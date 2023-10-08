import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ServicesCard from './ServicesCard';

const Services = () => {
  return (
    <View>
      <View style={styles.sectionContainer}>
        <Text style={{fontWeight: '600', color: '#3a3a3a', marginVertical: 10}}>
          Favourties
        </Text>
        <View style={styles.favContainer}>
          <ServicesCard iconName="wallet-outline" text="Accounts Services" />
          <ServicesCard iconName="cash-outline" text="Fund Transfers" />
          <ServicesCard
            iconName="mail-unread-outline"
            text="Approval Requests"
          />
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={{fontWeight: '600', color: '#3a3a3a', marginVertical: 10}}>
          Essentials
        </Text>
        <View style={styles.favContainer}>
          <ServicesCard
            iconName="people-outline"
            text="Beneficary Management"
          />
          <ServicesCard iconName="cash-outline" text="Cash Management" />
          <ServicesCard iconName="earth-outline" text="My Remittances" />
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={{fontWeight: '600', color: '#3a3a3a', marginVertical: 10}}>
          Crypto & Trading
        </Text>
        <View style={styles.favContainer}>
          <ServicesCard iconName="apps-outline" text="Binance" />
          <ServicesCard iconName="skull-outline" text="Phantom" />
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
