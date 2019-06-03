import React, { Component } from "react";
import { observer } from "mobx-react";

import { Content, Icon, Input, List, Text } from "native-base";
import { ScrollView, View } from "react-native";

//Components
import RestaurantObject from "./RestaurantObject";
import Spot from "./spot.js";

//Stores
import restaurantStore from "../../Stores/restaurantStore";
import authStore from "../../Stores/authStore";

class RestaurantList extends Component {
  componentDidMount() {
    restaurantStore.fetchAllRestaurants();
    authStore.getMySpot();
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Save My Spot",
      headerRight:
        authStore.user !== null ? (
          <Icon
            style={{ marginRight: 10 }}
            onPress={() => authStore.logoutUser(navigation)}
            name="logout"
            type="SimpleLineIcons"
          />
        ) : (
          <Icon
            style={{ marginRight: 10 }}
            onPress={() => navigation.navigate("Login")}
            name="login"
            type="SimpleLineIcons"
          />
        )
    };
  };

  updateSearch = search => {
    restaurantStore.query = search;
  };

  render() {
    const restaurants = restaurantStore.filteredRestaurants;

    let RestaurantList;
    if (restaurants) {
      RestaurantList = restaurants.map(restaurant => (
        <RestaurantObject restaurant={restaurant} key={restaurant.id} />
      ));
    }

    let spots = authStore.spots;
    let SpotList;
    if (spots) {
      SpotList = spots.map(spot => <Spot spot={spot} key={spot.id} />);
    }

    return (
      <Content>
        <ScrollView style={{ backgroundColor: "rgba(7, 183, 10, 0.03)" }}>
          <List>{SpotList}</List>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10
            }}
          >
            <Icon style={{ marginTop: 5 }} name="search" />
            <Input
              placeholder="Search..."
              onChangeText={this.updateSearch}
              value={restaurantStore.query}
            />
          </View>
          <List>{RestaurantList}</List>
        </ScrollView>
      </Content>
    );
  }
}

export default observer(RestaurantList);
