import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  ListRenderItem,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {CompositeScreenProps} from '@react-navigation/native';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text} from 'react-native-paper';
import {TabsParamList} from '../navigation/TabsNavigator';
import {HomeStackParamList} from '../navigation/HomeNavigator';
import Carousel from 'react-native-reanimated-carousel';

import theme from '../components/Theme';
import {SafeAreaView} from 'react-native';
import Header from '../components/Header';
import InfoCard from '../components/home/InfoCard';
import CarouselIndicator from '../components/CarouselIndicator';
import Services from '../components/home/Services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreditCardApplyCard from '../components/home/CreditCardApplyCard';

type Props = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList>,
  MaterialBottomTabScreenProps<TabsParamList, 'HomeNavigator'>
>;

const HomeScreen = ({navigation}: Props) => {
  const width = Dimensions.get('window').width;
  const [userData, setUserData] = useState<any | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

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
    <SafeAreaView style={theme.styles.safeAreContainer}>
      <ScrollView>
        <Header title="Home" showMenu={true} />
        <View style={styles.infoContainer}>
          <Text style={{marginBottom: 10, fontWeight: '700'}}>
            Welcome, {userData?.fullName}
          </Text>
          <Carousel
            pagingEnabled={true}
            loop
            width={width - 30}
            height={100}
            autoPlay={false}
            data={userData?.banners}
            scrollAnimationDuration={1000}
            onSnapToItem={index => {
              setActiveIndex(index);
            }}
            renderItem={({item, index}) => {
              if (item === 'apply-card') {
                return <CreditCardApplyCard />;
              } else {
                return (
                  <InfoCard
                    icon="briefcase-outline"
                    color={theme.colors.primary}
                    text="You have spent 2559.50 AED so far this month"
                  />
                );
              }
            }}
          />
          <CarouselIndicator
            count={userData?.banners.length}
            activeIndex={activeIndex}
          />

          <Services />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default HomeScreen;
