import React from "react";
import { Icon } from "native-base";

import { createAppContainer } from "react-navigation";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import RestaurantStack from "./RestaurantStack";
import AccountStack from "./AccountStack";
const BottomNavTab = createMaterialBottomTabNavigator(
  {
    RestaurantList: { screen: RestaurantStack },
    Account: { screen: AccountStack }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let iconType;
        if (routeName === "RestaurantList") {
          iconName = "home";
        } else if (routeName === "Account") {
          iconName = "person";
          iconType = "MaterialIcons";
        }
        return (
          <Icon name={iconName} style={{ color: tintColor }} type={iconType} />
        );
      }
    })
  },
  {
    initialRouteName: "RestaurantList"
  }
);

export default createAppContainer(BottomNavTab);
