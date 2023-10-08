import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NavBar from '../components/NavBar';
import UpcomingScreen from '../screens/UpcomingScreen';
import AccountScreen from '../screens/AccountScreen';

export type HomeStackParamList = {
  Home: undefined;
  Account: undefined;
};

const Home = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Home.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Home.Screen name="Home" component={HomeScreen} />
      <Home.Screen name="Account" component={AccountScreen} />
    </Home.Navigator>
  );
};

export default HomeNavigator;
