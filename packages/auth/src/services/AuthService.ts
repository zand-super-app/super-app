import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthService {
  TOKEN_KEY = 'token';
  USER_DATA = 'userData';

  getCredentials(): Promise<string | null> {
    return AsyncStorage.getItem(this.TOKEN_KEY);
  }

  getUserData(): Promise<string | null> {
    return AsyncStorage.getItem(this.USER_DATA);
  }

  setCredentials(token: string): Promise<void> {
    return AsyncStorage.setItem(this.TOKEN_KEY, token);
  }

  setUserData(userData: string): Promise<void> {
    return AsyncStorage.setItem(this.USER_DATA, JSON.stringify(userData));
  }

  removeCredentials(): Promise<void> {
    AsyncStorage.removeItem(this.TOKEN_KEY);
    return AsyncStorage.removeItem(this.USER_DATA);
  }

  static shared = new AuthService();
}

export default AuthService;
