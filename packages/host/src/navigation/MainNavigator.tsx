import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookingScreen from '../screens/BookingScreen';
import TabsNavigator from './TabsNavigator';
import NewsScreen from '../screens/NewsScreen';
import ShoppingScreen from '../screens/ShoppingScreen';
import DashboardScreen from '../screens/DashboardScreen';
import HomeNavigator from './HomeNavigator';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';

export type MainStackParamList = {
  Tabs: undefined;
  Booking: undefined;
  Shopping: undefined;
  News: undefined;
  Dashboard: undefined;
  Account: undefined;
};

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Main.Screen name="Tabs" component={TabsNavigator} />      
    </Main.Navigator>
  );
};

export default MainNavigator;
