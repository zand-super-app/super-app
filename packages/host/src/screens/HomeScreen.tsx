import React, { useEffect, useState } from 'react';
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
import {
  Avatar,
  Card,
  Button,
  Divider,
  Text,
  Title,
  Paragraph,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {TabsParamList} from '../navigation/TabsNavigator';
import {HomeStackParamList} from '../navigation/HomeNavigator';
import Carousel from 'react-native-reanimated-carousel';

import theme from '../components/Theme';
import {SafeAreaView} from 'react-native';
import Header from '../components/Header';
import InfoCard from '../components/home/InfoCard';
import CarouselIndicator from '../components/CarouselIndicator';
import ServicesCard from '../components/home/ServicesCard';
import Services from '../components/home/Services';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList>,
  MaterialBottomTabScreenProps<TabsParamList, 'HomeNavigator'>
>;

const HomeScreen = ({navigation}: Props) => {
  const width = Dimensions.get('window').width;
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
    <SafeAreaView style={theme.styles.safeAreContainer}>
      <ScrollView>
        <Header title="Home" showMenu={true} />
        <View style={styles.infoContainer}>
          <Text>Welcome, {userData?.fullName}</Text>
          <Carousel
            pagingEnabled={true}
            loop
            width={width - 30}
            height={100}
            autoPlay={false}
            data={[...new Array(3).keys()]}
            scrollAnimationDuration={1000}
            onSnapToItem={index => console.log('current index:', index)}
            renderItem={({index}) => (
              <InfoCard
                icon="briefcase-outline"
                color={theme.colors.primary}
                text="You have spent 2559.50 AED so far this month"
              />
            )}
          />          
          <CarouselIndicator count={3} activeIndex={0} />

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
