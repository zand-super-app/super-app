import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import {Text, Title} from 'react-native-paper';
import {View} from 'react-native';
import theme from '../components/Theme';

const HelpScreen = () => {
  return (
    <ErrorBoundary name="HelpScreen">
      <View
        style={{
          flex: 1,
          padding: 16,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.background,
        }}>
        <Title>Help</Title>
      </View>
    </ErrorBoundary>
  );
};

export default HelpScreen;
