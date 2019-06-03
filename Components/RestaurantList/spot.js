import React, { Component } from "react";
import { withNavigation } from "react-navigation";

import { Body, Card, CardItem, Left, Right, Text } from "native-base";
import { TouchableOpacity, View } from "react-native";

import styles from "./styles.js";
class Spot extends Component {
  handlePress() {
    this.props.navigation.navigate("RestaurantDetail", {
      restaurant: this.props.spot.restaurant
    });
  }
  render() {
    const { spot } = this.props;
    return (
      <TouchableOpacity onPress={() => this.handlePress()}>
        <Card>
          <CardItem style={styles.spotcard}>
            <View style={styles.spotNum}>
              <Text style={{ color: "rgb(163,35,58)", fontSize: 40 }}>
                {spot.position}
              </Text>
            </View>
            <View>
              <Text className>Currently waiting for: </Text>
              <Text style={styles.spotName}>{spot.restaurant.name}</Text>
            </View>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}
export default withNavigation(Spot);
