import React, { Component } from "react";
import styles from "./styles";
import { withNavigation } from "react-navigation";
import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button
} from "native-base";

import SocketStore from "../../Stores/socketStore";
class RestaurantObject extends Component {
  handlePress() {
    this.props.navigation.navigate("RestaurantDetail", {
      restaurant: this.props.restaurant
    });
  }
  render() {
    const { restaurant } = this.props;
    console.log("ewrw", restaurant.name);
    return (
      <TouchableOpacity
        onPress={() => this.handlePress(restaurant)}
        style={{ height: 220 }}
      >
        <ImageBackground
          source={{
            uri: "https://screenshotlayer.com/images/assets/placeholder.png"
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <Text>{restaurant.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(RestaurantObject);
