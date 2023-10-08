import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeNavigator from './HomeNavigator';
import ServicesNavigator from './ServicesNavigator';
import AccountNavigator from './AccountNavigator';
import theme from '../components/Theme';
import Icon from 'react-native-vector-icons/Ionicons';
import AccountScreen from '../screens/AccountScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HelpScreen from '../screens/HelpScreen';

export type TabsParamList = {
  HomeNavigator: undefined;
  ServicesNavigator: undefined;
  HelpScreen: undefined;
  SettingsNavigator: undefined;
};

const Tabs = createMaterialBottomTabNavigator<TabsParamList>();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      barStyle={{backgroundColor: theme.colors.white}}
      activeColor={theme.colors.primary}
      style={{backgroundColor: theme.colors.white}}
      >
      <Tabs.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="ServicesNavigator"
        component={ServicesNavigator}
        options={{
          title: 'Services',
          tabBarIcon: ({ color }) => (
            <Icon name="apps-outline" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="SettingsNavigator"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <Icon name="settings-outline" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          title: 'Help',
          tabBarIcon: ({ color }) => (
            <Icon name="chatbox-outline" color={color} size={26} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
