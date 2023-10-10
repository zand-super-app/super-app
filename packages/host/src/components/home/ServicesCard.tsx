import React, {useRef} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import theme from '../../components/Theme';
import {TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import {Modal, Portal, Button} from 'react-native-paper';
import {Dimensions} from 'react-native';
import PWAHeader from '../PWAHeader';

type Props = {
  iconName: string;
  text: string;
  serviceType: 'PWA' | 'Static';
  serviceUrl?: string;
};

const ServicesCard = ({iconName, text, serviceType, serviceUrl}: Props) => {
  const [showWebView, setShowWebView] = React.useState(false);
  const webViewRef = React.useRef<WebView | null>(null);

  const handlePress = () => {
    if (serviceType === 'PWA') {
      setShowWebView(true);
    }
  };

  const handleClose = () => {
    setShowWebView(false);
  };

  const dimensions = Dimensions.get('window');

  const containerStyle = {
    backgroundColor: 'white',
    paddingVertical: 50,
    width: dimensions.width,
    height: dimensions.height,
  };

  return (
    <View style={{marginHorizontal: 4}}>
      <TouchableOpacity onPress={handlePress}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#e0e0e0',
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
      </TouchableOpacity>
      {showWebView && (
        <Portal>
          <Modal
            visible={showWebView}
            onDismiss={handleClose}
            contentContainerStyle={containerStyle}>
            {/* <View>
              <Button onPress={handleClose}>Back to Main app</Button>
            </View> */}

            <PWAHeader showBack={true} handleClose={handleClose} />

            <WebView
              startInLoadingState={true}
              renderLoading={() => <ActivityIndicator />}
              onLoadEnd={() => {
                if (webViewRef.current) {
                  const userData = {
                    'userName': 'sharaf',
                    'fullName': 'Sharaf'
                  }
                  webViewRef.current.postMessage(JSON.stringify(userData));
                }
              }}
              ref={webViewRef}
              source={{uri: serviceUrl + ''}}
              style={{flex: 1}}
              // onNavigationStateChange={event => {
              //   if (event.url !== serviceUrl) {
              //     handleClose();
              //   }
              // }}
            />
          </Modal>
        </Portal>
      )}
    </View>
  );
};

export default ServicesCard;
