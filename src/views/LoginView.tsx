import React from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, Dimensions} from 'react-native';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get("window");
const imgBI = require("@assets/innerLabsBI.png")
const imgLoginInput = require("@assets/fieldLogin.png")
const imgCheckedBox = require("@assets/checkedBox.png")
const imgUnCheckedBox = require("@assets/unCheckedBox.png")

function LoginView(): React.ReactElement {
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
          <View>
            <Image source={imgLoginInput}/>
            <TextInput style={styles.textInputLogin} placeholder="Enter your ID"/>
            <Image source={imgUnCheckedBox}/>
          </View>
        </View>
        <View style={styles.part}>
            <Text>Sunny</Text>
        </View>
        <View style={styles.part}>
            <Text>Sunny</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
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
    width: '100%',
    height: 55,
    paddingHorizontal: 60,
  },

  part: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
});

export default LoginView;