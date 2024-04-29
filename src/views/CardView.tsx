import palette from '@styles/colorPalette';
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CommonType } from '../common/CommonType'

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get("window");
type CardViewNavigationProp = StackNavigationProp<CommonType.ViewStackPageList, 'CardView'>;
type Props = {
  navigation: CardViewNavigationProp;
  route: { params: { id: string, region: string } };
};

function CardView({navigation, route}: Props): React.ReactElement {
  const {id, region} = route.params;

    return (
      <View style={styles.container}>
        <View style={styles.city}>
          <Text style={styles.cityName}>{id}</Text>
        </View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.weather}
        >
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.gray2,
  },
  city: {
    flex: 1,
    backgroundColor: palette.gray2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  weather: {
    backgroundColor: palette.gray2
  },
  day: {
    flex: 1,
    alignItems: "center",
    width: SCREEN_WIDTH,
  },
  temp: {
    marginTop: 50,
    fontWeight: "600",
    fontSize: 178,

  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
});

export default CardView;