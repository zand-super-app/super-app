import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import NewsScreen from '../screens/NewsScreen';

export type HomeStackParamList = {
  Home: undefined;
  Account: undefined;
  News: undefined;
};

const Home = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Home.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Home.Screen name="Home" component={HomeScreen} />
      <Home.Screen name="News" component={NewsScreen} />
      <Home.Screen name="Account" component={AccountScreen} />
    </Home.Navigator>
  );
};

export default HomeNavigator;
