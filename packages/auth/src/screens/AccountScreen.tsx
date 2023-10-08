import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useAuth} from '../contexts/AuthContext';

const AccountScreen = () => {
  const {signOut} = useAuth();

  return (
    <View style={styles.container}>
      <Image 
      style={{width: 120, height: 120, borderRadius:20, alignSelf: 'center'}}
      source={{uri: 'https://randomuser.me/api/portraits/men/76.jpg'}} />
      <Text style={{marginVertical: 10}}>Steven Jackford - GBE Enterprises</Text>
      <Text>Owner</Text>
      <Button mode="contained" onPress={signOut} style={{marginVertical: 20}}>
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AccountScreen;
