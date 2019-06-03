import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

//Components
import Spinner from "./spinner.js";

//Stores
import socketStore from "../../Stores/socketStore";
import authStore from "../../Stores/authStore";

import styles from "../RestaurantDetail/styles";

import { Button, Item, Text, View } from "native-base";
import { Image, TouchableOpacity } from "react-native";

class Queue extends Component {
  constructor(props) {
    _isMounted = false;
    super(props);
    this.state = {
      currentQ: null,
      position: null
    };
  }

  componentDidMount() {
    this.restaurantRequest();
    socketStore.socket.on("q info", data => {
      this.setState({ currentQ: data.restaurantQ });
    });
    socketStore.socket.on("user spot", data => {
      this.setState({ position: data.spot });
    });
    socketStore.socket.on("update queue", () => {
      this.restaurantRequest();
    });
  }

  componentWillUnmount() {
    socketStore.socket.off("q info");
    socketStore.socket.off("user spot");
    socketStore.socket.off("update queue");
  }

  restaurantRequest() {
    if (authStore.user) {
      socketStore.getRestaurant(this.props.restaurant, authStore.user.user_id);
    } else {
      socketStore.getRestaurant(this.props.restaurant, null);
    }
  }

  leaveQ() {
    socketStore.leaveQ(this.state.position);
  }

  getQueueNumber() {
    if (this.state.position) {
      return (
        <>
          <Text style={styles.circleText}>{this.state.position.position}</Text>
          <Text style={styles.circleTextColor}>My spot</Text>
        </>
      );
    } else {
      return (
        <>
          <Text style={styles.circleText}>{this.state.currentQ}</Text>
          <Text style={styles.circleTextColor}>in queue</Text>
        </>
      );
    }
  }

  getQueueOptions() {
    if (authStore.user !== null) {
      if (this.state.position) {
        return (
          <Button
            rounded
            light
            style={{ marginTop: 300, backgroundColor: "#f7ca67" }}
            onPress={() => this.leaveQ()}
          >
            <Text style={{ color: "white" }}>Leave Q</Text>
          </Button>
        );
      } else {
        return (
          <Spinner
            user={authStore.user.user_id}
            restaurant={this.props.restaurant.id}
          />
        );
      }
    } else {
      return (
        <Button
          rounded
          light
          style={{ marginTop: 300, backgroundColor: "#f7ca67" }}
          onPress={() => {
            this.props.navigation.navigate("Login");
          }}
        >
          <Text style={{ color: "white" }}>Login to Join Q</Text>
        </Button>
      );
    }
  }

  render() {
    const { restaurant } = this.props;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image
          source={{
            uri:
              restaurant.picture ||
              "https://screenshotlayer.com/images/assets/placeholder.png"
          }}
          style={{
            flex: 1,
            opacity: 0.9,
            width: "100%",
            height: "35%",
            alignItems: "center",
            justifyContent: "center"
          }}
        />

        <View style={styles.qCircle}>
          <View style={styles.iqCircle}>{this.getQueueNumber()}</View>
          <View>{this.getQueueOptions()}</View>
        </View>
      </View>
    );
  }
}

export default withNavigation(observer(Queue));
