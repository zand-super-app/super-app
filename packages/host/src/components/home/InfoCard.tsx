import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import theme from '../../components/Theme';

type Props = {
  icon: string;
  color: string;
  text: string;
};

const InfoCard = ({icon, color, text}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
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
      <Icon name={icon} size={24} color={color} />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 14,
          marginHorizontal: 14,
        }}>
        {text}
      </Text>
    </View>
  );
};

export default InfoCard;
