import {DefaultTheme} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff7f41',
    background: '#ededed',
    white: '#fff',
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
  typography: {
    pageTitle: {
      fontSize: 20,
      marginBottom: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    heading: {
      fontSize: 16,
      textAlign: 'center',
    },
  },
  styles: {
    container: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
      backgroundColor: '#ededed',
    },
    formContainer: {
      marginVertical: 16,
    },
    headingContainer: {
      marginBottom: 16,
      alignItems: 'center',
    },
    listContainer: {
      marginVertical: 16,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      position: 'absolute',
      justifyContent: 'center',
      bottom: 16,
      left: 0,
      right: 0,
      padding: 16,
    },
    button: {
      flex: 1,
      minWidth: '45%',
      marginHorizontal: 8,
    },
    input: {
      marginBottom: 16,
      backgroundColor: '#fff',
      borderColor: '#f5f1f2',
      borderWidth: 2,
      borderTopEndRadius: 14,
      borderTopStartRadius: 14,
      borderBottomStartRadius: 14,
      borderBottomEndRadius: 14,
      borderBottomWidth: 0,
    },
  },
};

export default theme;
