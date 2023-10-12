import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ServicesCard from './ServicesCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Services = () => {
  const [userData, setUserData] = useState<any | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        setUserData(JSON.parse(userData));
      }
    };

    getUserData();
  }, []);

  return (
    <View>
      <View style={styles.sectionContainer}>
        <Text style={{fontWeight: '600', color: '#3a3a3a', marginVertical: 10}}>
          Favourties
        </Text>
        <View style={styles.favContainer}>
          {userData?.applications?.map((application: any) => {
            if (application?.location?.includes('favs')) {
              return (
                <ServicesCard
                  key={application.code}
                  iconName={application.iconName}
                  text={application.title}
                  serviceType={application.serviceType}
                  serviceUrl={application.serviceUrl}
                />
              );
            }
          })}
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={{fontWeight: '600', color: '#3a3a3a', marginVertical: 10}}>
          Essentials
        </Text>
        <View style={styles.favContainer}>
          {userData?.applications?.map((application: any) => {
            if (application?.location?.includes('essentials')) {
              return (
                <ServicesCard
                  key={application.code}
                  iconName={application.iconName}
                  text={application.title}
                  serviceType={application.serviceType}
                  serviceUrl={application.serviceUrl}
                />
              );
            }
          })}
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={{fontWeight: '600', color: '#3a3a3a', marginVertical: 10}}>
          Crypto & Trading
        </Text>
        <View style={styles.favContainer}>
          {userData?.applications?.map((application: any) => {
            if (application?.location?.includes('crypto')) {
              return (
                <ServicesCard
                  key={application.code}
                  iconName={application.iconName}
                  text={application.title}
                  serviceType={application.serviceType}
                  serviceUrl={application.serviceUrl}
                />
              );
            }
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  favContainer: {
    flexDirection: 'row',
  },
  sectionContainer: {
    flexDirection: 'column',
  },
});
export default Services;
