import React, { Component } from "react";
import { Container, Tab, Tabs, Content, Text, Button } from "native-base";
import { observer } from "mobx-react";
import { Overlay } from "react-native-elements";

import Login from "../Login";
import SignUp from "../SignUp";
import authStore from "../../Stores/authStore";

class Account extends Component {
  render() {
    if (authStore.user === null) {
      return (
        <Container>
          <Tabs>
            <Tab heading="Login">
              <Login />
            </Tab>
            <Tab heading="SignUp">
              <SignUp />
            </Tab>
          </Tabs>
        </Container>
      );
    } else {
      return (
        <Content>
          <Text>{authStore.user.username}</Text>
          <Button onPress={() => authStore.logoutUser(this.props.navigation)}>
            <Text>Logout</Text>
          </Button>
        </Content>
      );
    }
  }
}

export default observer(Account);
