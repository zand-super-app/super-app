import React, {useCallback} from 'react';
import {View, Text} from 'react-native';

import theme from '../../components/Theme';
import {Button} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/HomeNavigator';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {TabsParamList} from '../../navigation/TabsNavigator';
import {CompositeScreenProps, useNavigation} from '@react-navigation/native';

type Props = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList>,
  MaterialBottomTabScreenProps<TabsParamList, 'HomeNavigator'>
>;

const CreditCardApplyCard = () => {
  const navigation = useNavigation();

  const openNews = useCallback(() => navigation.navigate('News'), [navigation]);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 10,
        padding: 18,
        borderRadius: 5,
        backgroundColor: theme.colors.white,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 14,
          marginHorizontal: 14,
        }}>
        Hey, here is a pre-approved credit card curated for your needs.
      </Text>
      <Button mode="text" onPress={openNews}>
        Apply Now
      </Button>
    </View>
  );
};

export default CreditCardApplyCard;
