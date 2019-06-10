import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

import { Icon } from "native-base";

//Stores
import authStore from "../../Stores/authStore";

import styles from "../RestaurantList/styles.js";

class LoginButton extends Component {
  render() {
    return authStore.user !== null ? (
      <Icon
        style={styles.accountIcon}
        onPress={() => authStore.logoutUser(this.props.navigation)}
        name="logout"
        type="SimpleLineIcons"
      />
    ) : (
      <Icon
        style={styles.accountIcon}
        onPress={() => this.props.navigation.navigate("Login")}
        name="login"
        type="SimpleLineIcons"
      />
    );
  }
}

export default withNavigation(observer(LoginButton));
