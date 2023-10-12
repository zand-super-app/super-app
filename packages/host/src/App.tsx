import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {Federated} from '@callstack/repack/client';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import SplashScreen from './components/SplashScreen';
import ErrorBoundary from './components/ErrorBoundary';
import theme from './components/Theme';
import {Provider as PaperProvider} from 'react-native-paper';

const AuthProvider = React.lazy(() =>
  Federated.importModule('auth', './AuthProvider'),
);
const SignInScreen = React.lazy(() =>
  Federated.importModule('auth', './SignInScreen'),
);

const SignUpScreen = React.lazy(() => Federated.importModule('news', './App'));

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <ErrorBoundary name="AuthProvider">
        <React.Suspense fallback={<SplashScreen />}>
          <AuthProvider>
            {(authData: {
              isSignout: boolean;
              isLoading: boolean;
              isSignup: boolean;
              userData: any;
            }) => {
              if (authData.isLoading) {
                return <SplashScreen />;
              }

              if (authData.isSignout) {
                return (
                  <React.Suspense fallback={<SplashScreen />}>
                    <SignInScreen />
                  </React.Suspense>
                );
              }

              if (authData.isSignup) {
                return (
                  <PaperProvider theme={theme}>
                    <NavigationContainer
                      onReady={() =>
                        RNBootSplash.hide({fade: true, duration: 500})
                      }>
                      <SignUpScreen />
                    </NavigationContainer>
                  </PaperProvider>
                );
              }

              return (
                <NavigationContainer
                  onReady={() =>
                    RNBootSplash.hide({fade: true, duration: 500})
                  }>
                  <MainNavigator />
                </NavigationContainer>
              );
            }}
          </AuthProvider>
        </React.Suspense>
      </ErrorBoundary>
    </PaperProvider>
  );
};

export default App;
