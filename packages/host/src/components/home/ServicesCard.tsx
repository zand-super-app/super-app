import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import theme from '../../components/Theme';

type Props = {
  iconName: string;
  text: string;
};

const ServicesCard = ({iconName, text}: Props) => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        backgroundColor: theme.colors.white,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 4,
        shadowColor: theme.colors.primary,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      <Icon name={iconName} size={24} color={theme.colors.primary} />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 14,
          marginHorizontal: 6,
          marginVertical: 6,
        }}>
        {text}
      </Text>
    </View>
  );
};

export default ServicesCard;
