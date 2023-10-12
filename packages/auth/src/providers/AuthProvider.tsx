import React from 'react';
import AuthService from '../services/AuthService';
import {AuthContext} from '../contexts/AuthContext';

enum ActionTypes {
  RESTORE_TOKEN = 'RESTORE_TOKEN',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
  SIGN_UP = 'SIGN_UP',
}

type Action = {
  type: ActionTypes;
  payload?: any;
};

type State = {
  isLoading: boolean;
  isSignout: boolean;
  isSignup: boolean;
  userData: any;
};

const reducer = (prevState: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.RESTORE_TOKEN:
      return {
        ...prevState,
        isSignout: action.payload,
        isLoading: false,
      };
    case ActionTypes.SIGN_UP:
      return {
        ...prevState,
        isSignup: true,
        isSignout: false,
      };
    case ActionTypes.SIGN_IN:
      return {
        ...prevState,
        isSignout: false,
        userData: action.payload,
      };
    case ActionTypes.SIGN_OUT:
      return {
        ...prevState,
        isSignout: true,
      };
    default:
      return prevState;
  }
};

const AuthProvider = ({
  children,
}: {
  children: (data: State) => React.ReactNode;
}) => {
  const [state, dispatch] = React.useReducer(reducer, {
    isLoading: false,
    isSignout: false,
    isSignup: false,
    userData: null,
  });

  const authContext = React.useMemo(
    () => ({
      signIn: async (userName: string, password: string) => {
        try {
          await AuthService.shared.setCredentials('dummy-auth-token');
          const response = await fetch(`https://1f76-83-110-11-204.ngrok-free.app/personalization-service/profiles?username=${userName}`);          
          console.log('API response:', response);
          const data = await response.json();
          await AuthService.shared.setUserData(data);
          dispatch({type: ActionTypes.SIGN_IN, payload: {userData: data}});
        } catch (e) {
          // Handle error
        }
        
      },
      signOut: async () => {
        try {
          await AuthService.shared.removeCredentials();
        } catch (e) {
          // Handle error
        }

        dispatch({type: ActionTypes.SIGN_OUT});
      },
      signUp: async () => {
        try {
          await AuthService.shared.removeCredentials();
        } catch (e) {
          // Handle error
        }

        dispatch({type: ActionTypes.SIGN_UP});
      },
    }),
    [],
  );

  React.useEffect(() => {
    const restoreToken = async () => {
      let userToken;

      try {
        userToken = await AuthService.shared.getCredentials();
      } catch (e) {
        // Handle error
      }

      dispatch({type: ActionTypes.RESTORE_TOKEN, payload: !userToken});
    };

    restoreToken();
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      {children(state)}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
