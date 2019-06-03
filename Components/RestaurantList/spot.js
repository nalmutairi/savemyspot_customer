import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Card, CardItem, Body, Text, Left, Right } from "native-base";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
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
          <CardItem
            style={{
              backgroundColor: "white",
              height: 80
            }}
          >
            <View
              style={{
                borderColor: "rgb(163,35,58)",
                borderWidth: 2,
                width: 66,
                height: 66,
                borderRadius: 33,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 30,
                shadowOffset: { width: 3, height: 3 },
                shadowColor: "white",
                shadowOpacity: 0.6
              }}
            >
              <Text style={{ color: "rgb(163,35,58)", fontSize: 40 }}>
                {spot.position}
              </Text>
            </View>
            <View>
              <Text className>Currently waiting for: </Text>
              <Text
                style={{
                  shadowOffset: { width: 3, height: 3 },
                  shadowColor: "white",
                  shadowOpacity: 0.6,
                  fontWeight: "bold",
                  fontSize: 30,
                  color: "rgb(163,35,58)",
                  marginLeft: 20
                }}
              >
                {spot.restaurant.name}
              </Text>
            </View>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}
export default withNavigation(Spot);
