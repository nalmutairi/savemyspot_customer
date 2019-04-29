import React, { Component } from "react";
import { observer } from "mobx-react";
import RestaurantStore from "../../Stores/restaurantStore";
import {
  List,
  Text,
  Button,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Body,
  Right
} from "native-base";

import { ScrollView, View } from "react-native";

import RestaurantObject from "./RestaurantObject";

class RestaurantList extends Component {
  componentDidMount() {
    RestaurantStore.fetchAllRestaurants();
  }
  render() {
    const restaurants = RestaurantStore.restaurants;
    let RestaurantList;

    if (restaurants) {
      RestaurantList = restaurants.map(restaurant => (
        <RestaurantObject restaurant={restaurant} key={restaurant.id} />
      ));
    }
    return (
      <Content>
        <Header>
          <Left>
            <Button transparent />
          </Left>
          <Body>
            <Title>List</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView style={{ backgroundColor: "rgba(7, 183, 10, 0.03)" }}>
          <List>{RestaurantList}</List>
        </ScrollView>
      </Content>
    );
  }
}

export default observer(RestaurantList);
