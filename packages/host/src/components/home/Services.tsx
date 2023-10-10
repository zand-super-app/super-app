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
          <ServicesCard
            iconName="wallet-outline"
            text="Accounts Services"
            serviceType="Static"
          />
          <ServicesCard
            iconName="cash-outline"
            text="Fund Transfers"
            serviceType="Static"
          />
          <ServicesCard
            iconName="mail-unread-outline"
            text="Approval Requests"
            serviceType="Static"
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
            serviceType="Static"
          />
          <ServicesCard
            iconName="cash-outline"
            text="Cash Management"
            serviceType="Static"
          />
          <ServicesCard
            iconName="earth-outline"
            text="My Remittances"
            serviceType="Static"
          />
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={{fontWeight: '600', color: '#3a3a3a', marginVertical: 10}}>
          Crypto & Trading
        </Text>
        <View style={styles.favContainer}>
          <ServicesCard
            iconName="apps-outline"
            text="Binance"
            serviceType="PWA"
            serviceUrl="https://www.binance.com/en/nft/home"
          />
          <ServicesCard
            iconName="skull-outline"
            text="Crypto Wallet"
            serviceType="PWA"
            serviceUrl="http://localhost:8100/"
          />
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
