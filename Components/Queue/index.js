import React, { Component } from "react";

import RestaurantStore from "../../Stores/restaurantStore";
import AuthStore from "../../Stores/authStore";
import SocketStore from "../../Stores/socketStore";
import newsocket from "../../Stores/socketStore";
import styles from "../RestaurantDetail/styles";
import {
  Container,
  Tab,
  Tabs,
  Content,
  Text,
  Button,
  View,
  Input,
  Form,
  Item,
  Label,
  Picker
} from "native-base";

import { TouchableOpacity } from "react-native";
import { observer } from "mobx-react";
class Queue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: this.props.restaurant,
      currentQ: 0,
      position: null,
      numOfGuests: "0"
    };
  }

  componentDidMount() {
    if (AuthStore.user) {
      SocketStore.getRestaurant(this.props.restaurant, AuthStore.user.user_id);
    } else {
      SocketStore.getRestaurant(this.props.restaurant, null);
    }
    newsocket.socket.on("q info", data => {
      this.setState({ currentQ: data.restaurantQ, spot: data.spot });
      // if (data.length === 0) {
      //   this.setState({ currentQ: 0 });
      // } else {
      //   this.setState({ currentQ: data });
      // data.forEach(spot => {
      //   if (spot.user === AuthStore.user.user_id) {
      //     this.setState({
      //       currentQ: data[0].position,
      //       position: spot
      //     });
      //   } else {
      //     this.setState({ currentQ: data[0].position });
      //   }
      // });
      //}
    });
    newsocket.socket.on("user position", data =>
      this.setState({ position: data.position })
    );
  }

  getQueueButton() {
    if (AuthStore.user !== null) {
      if (this.state.position === null) {
        return (
          <TouchableOpacity
            style={{ marginTop: 50 }}
            onPress={() => {
              SocketStore.addToQ(
                AuthStore.user.user_id,
                this.props.restaurant.id,
                1
              );
            }}
          >
            <Text style={styles.white}> Join Queue</Text>
          </TouchableOpacity>
        );
      } else {
        return (
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                this.leaveQ();
              }}
            >
              <Text style={styles.white}>Leave Queue</Text>
            </TouchableOpacity>

            <Text style={styles.white}>My Spot:</Text>
            <Text style={styles.white}>{this.state.position.position}</Text>
          </View>
        );
      }
    }
  }

  leaveQ() {
    SocketStore.leaveQ(this.state.position);
    this.setState({ position: null });
  }
  render() {
    console.log("guests", this.state.numOfGuests);
    const { restaurant } = this.props;

    return (
      <Container>
        <View style={{ marginBottom: 20 }}>
          <View style={{ alignItems: "center" }} style={styles.qCircle}>
            <Text style={styles.circleText}>{this.state.currentQ}</Text>
            <Text style={styles.white}>in queue</Text>
            <View>{this.getQueueButton()}</View>
          </View>
        </View>
      </Container>
    );
  }
}

export default observer(Queue);
