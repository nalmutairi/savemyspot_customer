import React, { Component } from "react";

import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <Card
        style={{ marginBottom: 0, marginTop: 0, marginLeft: 0, marginRight: 0 }}
      >
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: "Image URL" }} />
            <Body>
              <Text>{item.name}</Text>
              <Text note>{item.description}</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default Item;
