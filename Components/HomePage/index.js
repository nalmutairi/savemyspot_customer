import React, { Component } from "react";
import { View } from "react-native";

// NativeBase Components
import { Container, Header } from "native-base";

// Navigation
import BottomNavTab from "../../Navigation/BottomNavTab";

class HomePage extends Component {
  render() {
    return (
      <Container>
        <BottomNavTab />
      </Container>
    );
  }
}

export default HomePage;
