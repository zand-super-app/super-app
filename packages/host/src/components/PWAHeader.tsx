import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from './Theme';
import {Image} from 'react-native';

type HeaderProps = {
  showBack?: boolean;
  handleClose: () => void;
};

const PWAHeader = ({showBack, handleClose}: HeaderProps) => {
  return (
    <View style={styles.container}>
      {showBack && (
        <TouchableOpacity onPress={handleClose}>
          <Icon name="arrow-back" size={24} color={theme.colors.primary} />
        </TouchableOpacity>
      )}

      <Image
        style={{width: 60, height: 60, alignSelf: 'center'}}
        source={{
          uri: 'https://www.zand.ae/-/media/zand/Articles/listing-278x350-572x350/zand-logo-360x320.png',
        }}
      />
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
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

export default PWAHeader;
