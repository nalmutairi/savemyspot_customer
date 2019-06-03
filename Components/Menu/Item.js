import React, { Component } from "react";

import {
  Body,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Right,
  Text
} from "native-base";

import { View } from "react-native";

class Item extends Component {
  render() {
    const { item } = this.props;

    return (
      <Card
        style={{ marginBottom: 0, marginTop: 0, marginLeft: 0, marginRight: 0 }}
      >
        <CardItem>
          {item.picture ? (
            <View style={{ position: "relative", marginLeft: 0 }}>
              <Thumbnail source={{ uri: item.picture || "Image URL" }} />
            </View>
          ) : null}

          <View style={{ marginLeft: 5, width: 280 }}>
            <Text>{item.name}</Text>
            <Text note>{item.description}</Text>
          </View>

          <View style={{ position: "relative", marginRight: 3 }}>
            <Text>{item.price}</Text>
          </View>
        </CardItem>
      </Card>
    );
  }
}

export default Item;
