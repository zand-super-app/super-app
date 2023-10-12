import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useAuth} from '../contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountScreen = () => {
  const {signOut} = useAuth();
  const [userData, setUserData] = useState<any | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if(userData) {
        setUserData(JSON.parse(userData));
      }      
    };

    getUserData();
  },[]);

  return (
    <View style={styles.container}>
      <Image 
      style={{width: 120, height: 120, borderRadius:20, alignSelf: 'center'}}
      source={{uri: userData?.profilePicUrl}} />
      <Text style={{marginVertical: 10}}>{userData?.fullName} - {userData?.company}</Text>
      <Text>{userData?.roles}</Text>
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
