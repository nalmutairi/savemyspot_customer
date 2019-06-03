import React, { Component } from "react";
import { withNavigation } from "react-navigation";

import { ImageBackground, View, TouchableOpacity } from "react-native";
import {
  Button,
  Container,
  Content,
  Icon,
  Image,
  Item,
  Input,
  Text
} from "native-base";
import { Card } from "react-native-elements";

import Gradient from "react-native-css-gradient";
// Stores
import authStore from "../../Stores/authStore";

import styles from "./styles.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <ImageBackground
        imageStyle={{ opacity: 0.2 }}
        style={{ width: "100%", height: "100%" }}
        source={require("../../foodbackground.jpg")}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.formtitle}>Sign In</Text>
        </View>
        <View style={styles.form}>
          <Item style={styles.formfield}>
            <Input
              placeholderTextColor="gray"
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={username => this.setState({ username })}
            />
          </Item>
          <Item style={styles.formfield}>
            <Input
              placeholderTextColor="gray"
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </Item>

          <Button
            style={styles.formButton}
            full
            onPress={() =>
              authStore.loginUser(this.state, this.props.navigation)
            }
          >
            <Text>LOGIN</Text>
          </Button>
          <View style={styles.signupOption}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Signup")}
            >
              <Text style={styles.red}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default withNavigation(Login);
