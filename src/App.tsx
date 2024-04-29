/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef, useState } from 'react';
import PermissionUtil, { APP_PERMISSION_CODE } from '@common/PermissionUtil';
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
import StackNavigation from '@views/StackNavigation';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get("window");
function App(props: any): React.JSX.Element {
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
    <StackNavigation/>
  );
}

export default App;
