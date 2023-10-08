import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from './Theme';
import {Image} from 'react-native';

type HeaderProps = {
  title: string;
  showMenu?: boolean;
  showBack?: boolean;
};

const MenuIcon = () => {
  return (
    <View style={{flexDirection: 'column'}}>
      <View
        style={{
          width: 20,
          borderWidth: 1,
          marginVertical: 2,
          borderColor: theme.colors.primary,
        }}
      />
      <View
        style={{
          width: 15,
          borderWidth: 1,
          marginVertical: 2,
          borderColor: theme.colors.primary,
        }}
      />
      <View
        style={{
          width: 10,
          borderWidth: 1,
          marginVertical: 2,
          borderColor: theme.colors.primary,
        }}
      />
    </View>
  );
};
const Header = ({title, showMenu, showBack}: HeaderProps) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleAccountPress = () => {
    navigation.navigate("Account");
  };

  return (
    <View style={styles.container}>
      {showBack && (
        <TouchableOpacity onPress={handleBackPress}>
          <Icon name="arrow-back" size={24} color={theme.colors.primary} />
        </TouchableOpacity>
      )}

      {showMenu && (
        <TouchableOpacity onPress={handleBackPress}>
          <MenuIcon />
        </TouchableOpacity>
      )}
      <Image
        style={{width: 60, height: 60, alignSelf: 'center'}}
        source={{
          uri: 'https://www.zand.ae/-/media/zand/Articles/listing-278x350-572x350/zand-logo-360x320.png',
        }}
      />

      <TouchableOpacity onPress={handleAccountPress}>
          <Icon name="person-outline" size={24} color={theme.colors.primary} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e0df',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
    marginHorizontal: 16,
  },
});

export default Header;
