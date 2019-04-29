import React, { Component } from "react";
import { observer } from "mobx-react";
import axios from "axios";
import {
  Container,
  Tab,
  Tabs,
  Content,
  Text,
  Button,
  View,
  Input
} from "native-base";

import { TouchableOpacity } from "react-native";
import { Modal } from "react-native-modal";
import newsocket from "../../Stores/socketStore";
import RestaurantStore from "../../Stores/restaurantStore";
import SocketStore from "../../Stores/socketStore";
import AuthStore from "../../Stores/authStore";
import QueueModal from "../QueueModal";
import Queue from "../Queue";
import Menu from "../Menu";
import styles from "./styles";

const instance = axios.create({
  baseURL: "http:127.0.0.1:8000/"
});

class RestaurantDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: null,
      loading: true,
      currentQ: 0,
      position: null,
      guests: null,
      restaurantID: this.props.navigation.getParam("restaurant", {}).id,
      visibleModal: false
    };
  }

  componentDidMount() {
    this.fetchARestaurant();
  }

  fetchARestaurant() {
    instance
      .get("api/restaurant/detail/" + this.state.restaurantID)
      .then(res => res.data)
      .then(restaurant =>
        this.setState({ restaurant: restaurant, loading: false })
      )

      .catch(err => console.error(err));
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("restaurant", {}).name
  });

  render() {
    const { restaurant, loading } = this.state;
    if (loading) {
      return <Content />;
    } else {
      return (
        <Container>
          <Tabs>
            <Tab heading="Queue">
              <Queue restaurant={restaurant} />
            </Tab>
            <Tab heading="Menu">
              <Menu category={restaurant.category} />
            </Tab>
          </Tabs>
        </Container>
      );
    }
  }
}

export default observer(RestaurantDetail);
