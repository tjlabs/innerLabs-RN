import React from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, Dimensions} from 'react-native';
const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get("window");

function LoginView(): React.ReactElement {
    return (
      <View style={styles.container}>
        <View style={styles.part}>
            <Text>Sunny</Text>
        </View>
        <View style={styles.imagePart}>
            {/* <Image source={innerLabsBI}/> */}
        </View>
        <View style={styles.part}>
            <Text>Sunny</Text>
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
  imagePart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  part: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginView;