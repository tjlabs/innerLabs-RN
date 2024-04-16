/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef, useState } from 'react';
import PermissionUtil, { APP_PERMISSION_CODE } from '@common/PermissionUtil';
import WeatherView from '@views/WeatherView';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Linking,
  Alert,
  Platform,
  PermissionsAndroid,
  ToastAndroid,
} from 'react-native';
import LoginView from './views/LoginView';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get("window");

function App(): React.JSX.Element {
  useEffect(() => {
    const requestPermissions = async () => {
      try {
        await PermissionUtil.cmmReqPermissions([...APP_PERMISSION_CODE.location, ...APP_PERMISSION_CODE.bluetooth, ...APP_PERMISSION_CODE.motion]);
      } catch (error) {
        console.error('Error requesting permissions:', error);
      }
    };
    requestPermissions();
  }, []);

  return (
    <LoginView/>
    // <WeatherView/>
  );
}

export default App;
