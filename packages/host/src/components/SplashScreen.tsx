import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {ProgressBar, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from './Theme'; '../components/Theme'

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Icon
        style={styles.icon}
        size={56}
        color={theme.colors.primary}
        name="cloud"
      />
      <Text style={styles.text}>
        Loading app.. Please wait...
      </Text>
      <ProgressBar
        style={styles.progress}
        indeterminate
        color={theme.colors.primary}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    textAlign: 'center',
  },
  text: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    fontSize: 24,
    color: theme.colors.primary,
    textAlign: 'center',
  },
  progress: {
    marginVertical: 16,
    marginHorizontal: 32,
  },
});

export default SplashScreen;
