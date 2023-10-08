import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Button, MD3Colors, Text, TextInput} from 'react-native-paper';
import {useAuth} from '../contexts/AuthContext';
import theme from '../components/Theme';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handChangeEmail = (text: string) => {
    setEmail(text);
  };

  const handleChangePassword = (text: string) => {
    setPassword(text);
  };

  const {signIn, signUp} = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.pageTitle}>
          Welcome to Zand Digital Corporate Banking
        </Text>
        <Image
          style={{width: 120, height: 120, marginVertical: 16}}
          source={{
            uri: 'https://www.zand.ae/-/media/zand/Articles/listing-278x350-572x350/zand-logo-360x320.png',
          }}
        />
      </View>
      <View style={theme.styles.formContainer}>
        <TextInput
          mode="flat"
          autoComplete="off"
          label="Username"
          value={email}
          onChangeText={handChangeEmail}
          style={theme.styles.input}
          underlineColor={theme.colors.white}
          underlineStyle={{width: 0}}
        />
        <TextInput
          mode="flat"
          autoComplete="off"
          label="Password"
          value={password}
          onChangeText={handleChangePassword}
          style={theme.styles.input}
          underlineColor={theme.colors.white}
          underlineStyle={{width: 0}}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button mode="contained" style={styles.button} onPress={signIn}>
          Log in
        </Button>
      </View>
      <View style={styles.infoContainer}>
        <Text style={{textAlign: "center", marginVertical: 8}}>New to Zand Bank? </Text>
        <Button
          mode="outlined"
          style={[styles.button, styles.buttonOutline]}
          onPress={signUp}>
          Create a corporate account
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  headingContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading: {
    fontSize: 16,
    textAlign: 'center',
  },
  listContainer: {
    marginVertical: 16,
  },
  listItem: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 12,
  },
  buttonContainer: {
    paddingVertical: 16,
  },
  infoContainer: {
    marginVertical: 16,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
  },
  buttonOutline: {
    borderWidth: 0,
    backgroundColor: theme.colors.white,
  },
});

export default SignInScreen;
