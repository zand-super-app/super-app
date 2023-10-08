import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import {Text, Title} from 'react-native-paper';
import {View} from 'react-native';
import theme from '../components/Theme';

const SettingsScreen = () => {
  return (
    <ErrorBoundary name="SettingsScreen">
      <View
        style={{
          flex: 1,
          padding: 16,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.background,
        }}>
        <Title>Settings</Title>
      </View>
    </ErrorBoundary>
  );
};

export default SettingsScreen;
