import React, { Component } from "react";
import { withNavigation } from "react-navigation";

import { ImageBackground, TouchableOpacity, View } from "react-native";
import { Left, Right, Text } from "native-base";

import styles from "./styles";

class RestaurantObject extends Component {
  handlePress() {
    this.props.navigation.navigate("RestaurantDetail", {
      restaurant: this.props.restaurant
    });
  }
  render() {
    const { restaurant } = this.props;
    return (
      <TouchableOpacity
        onPress={() => this.handlePress(restaurant)}
        style={{
          marginTop: 5,
          height: 220,
          marginLeft: 4,
          marginRight: 4
        }}
      >
        <ImageBackground
          imageStyle={{ borderRadius: 6, opacity: 0.8 }}
          source={{
            uri:
              restaurant.picture ||
              "https://screenshotlayer.com/images/assets/placeholder.png"
          }}
          style={styles.cardImg}
          style={{
            width: "100%",
            height: "100%"
          }}
        >
          <View style={styles.bottomTitle}>
            <Text style={styles.cardTitle}>{restaurant.name}</Text>
            <Text style={styles.cardDesc}>{restaurant.description}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(RestaurantObject);
