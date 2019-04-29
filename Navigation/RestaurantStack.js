import { createStackNavigator } from "react-navigation";

import RestaurantList from "../Components/RestaurantList";
import RestaurantDetail from "../Components/RestaurantDetail";

const RestaurantStack = createStackNavigator(
  {
    RestaurantList: RestaurantList,
    RestaurantDetail: RestaurantDetail
  },
  {
    initialRouteName: "RestaurantList",
    navigationOptions: {
      tabBarColor: "#6992F9"
    }
  }
);

export default RestaurantStack;
