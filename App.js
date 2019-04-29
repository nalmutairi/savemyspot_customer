import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HomePage from "./Components/HomePage";

import SocketStore from "./Stores/socketStore";

export default class App extends React.Component {
  render() {
    return <HomePage />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
