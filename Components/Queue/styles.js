import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  qContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#e0d5d5"
  },

  actionButton: {
    width: 35,
    height: 35,
    backgroundColor: "rgb(241, 202,118)"
  },

  buttonText: {
    fontWeight: "bold",
    color: "white"
  },

  numText: {
    color: "white",
    textAlign: "center",
    fontSize: 29,
    fontWeight: "bold",
    marginRight: 15,
    marginLeft: 15
  }
});

export default styles;
