import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "#3B8686",
    alignItems: "center",
    justifyContent: "center"
  },
  qCircle: {
    width: 250,
    height: 250,
    borderRadius: 150 / 2,
    backgroundColor: "#79BD9A",
    alignItems: "center",
    justifyContent: "center"
  },

  joinCircle: {
    marginLeft: 55,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "#3B8686",
    alignItems: "center",
    justifyContent: "center"
  },

  white: {
    color: "white",
    textAlign: "center"
  },
  circleText: {
    color: "white",
    fontSize: 105,
    textAlign: "center"
  },

  leftMargin: {
    marginLeft: 20
  },

  rightMargin: {
    marginRight: 20
  }
});

export default styles;
