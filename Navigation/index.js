import React from "react";
import { createStackNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
// Components
import RestaurantList from "../Components/RestaurantList";
import RestaurantDetail from "../Components/RestaurantDetail";

const Nav = createStackNavigator(
  {
    RestaurantList: RestaurantList,
    RestaurantDetail: RestaurantDetail
  },
  {
    initialRouteName: "RestaurantList"
  }
);

export default createAppContainer(Nav);
