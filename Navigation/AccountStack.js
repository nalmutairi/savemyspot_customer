import { createStackNavigator } from "react-navigation";

import React from "react";

import Account from "../Components/Account";
import RestaurantList from "../Components/RestaurantList";

const AccountStack = createStackNavigator(
  {
    Login: Account,
    RestaurantList: RestaurantList
  },
  {
    initialRouteName: "Login",
    navigationOptions: {
      tabBarColor: "#DD3C40"
    }
  }
);

export default AccountStack;
