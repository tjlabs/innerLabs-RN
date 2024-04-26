import palette from '@styles/colorPalette';
import React, {useState, useRef, useEffect} from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, Dimensions, TouchableOpacity, LayoutChangeEvent} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get("window");
const imgBI = require("@assets/innerLabsBI.png")
const imgLoginInput = require("@assets/fieldLogin.png")
const imgCheckedBox = require("@assets/checkedBox.png")
const imgUnCheckedBox = require("@assets/unCheckedBox.png")
const imgLoginButton = require("@assets/buttonLogin.png")

function LoginView(): React.ReactElement {
  const [imgWidth, setImgWidth] = useState(0);
  const imgRef = useRef<Image>(null);

  const [isSaveId, setIsSaveId] = useState(false);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedIsSaveId = await AsyncStorage.getItem('isSaveId');
        if (savedIsSaveId) {
          setIsSaveId(savedIsSaveId === 'true');
        }

        if (isSaveId) {
          const savedUserId = await AsyncStorage.getItem('user_id');
          if (savedUserId) {
            setUserId(savedUserId);
          }
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, []);

  const onImgLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setImgWidth(width);
  };

  const toggleCheckBox = async () => {
    setIsSaveId(!isSaveId);
    try {
      await AsyncStorage.setItem('isSaveId', String(!isSaveId));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const handleUserIdChange = async (text: string) => {
    setUserId(text);
    try {
      await AsyncStorage.setItem('user_id', text);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.part}>
      </View>
      <View style={styles.imageBI}>
        <View>
          <Image source={imgBI}/>
        </View>
      </View>
      <View style={styles.part}>
        <View style={{justifyContent:"center", alignItems:"center"}} onLayout={onImgLayout}>
          <Image ref={imgRef} source={imgLoginInput}/>
          <TextInput
            style={[styles.textInputLogin, {width: imgWidth}]}
            placeholder="Enter your ID"
            value={userId}
            onChangeText={handleUserIdChange}
            />
          <TouchableOpacity onPress={toggleCheckBox} style={styles.imageUncheckedBox}>
            <Image source={isSaveId ? imgCheckedBox : imgUnCheckedBox}  />
          </TouchableOpacity>
          <Text style={styles.textSaveId}>Save ID</Text>
        </View>
      </View>
      <View style={styles.part}>
        <View>
          <Image source={imgLoginButton}/>
        </View>
      </View>
      <View style={styles.part}>
          <Text style={styles.textSdkVersionTitle}>SDK Version</Text>
          <Text style={styles.textSdkVersionValue}>0.0.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.gray3,
  },

  imageBI: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imageLoginInput: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textInputLogin: {
    position: 'absolute',
    paddingHorizontal: 55,
    borderRadius: 5,
  },

  imageUncheckedBox: {
    position: 'absolute',
    right:60,
    top:65,
  },

  textSaveId: {
    position: 'absolute',
    justifyContent: "center",
    alignItems: 'center',
    height: 25.333333,
    right: 5,
    top: 67,
  },

  textSdkVersionTitle: {
    position: 'absolute',
    bottom: 60,
    left: 30,
    fontStyle: 'italic',
    fontSize: 16,
  },

  textSdkVersionValue: {
    position: 'absolute',
    bottom: 40,
    left: 30,
    fontSize: 12,
  },

  part: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
});

export default LoginView;