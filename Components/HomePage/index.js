import React, { Component } from "react";
import { View } from "react-native";

// NativeBase Components
import { Container, Header } from "native-base";

// Navigation
import Nav from "../../Navigation/";

class HomePage extends Component {
  render() {
    return (
      <Container>
        <Nav />
      </Container>
    );
  }
}

export default HomePage;
