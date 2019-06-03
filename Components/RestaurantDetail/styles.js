import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  qContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#e0d5d5"
  },
  buttonContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: 250,
    height: 45,
    marginTop: 350,
    flexDirection: "row",
    alignItems: "stretch"
  },
  qCircle: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    backgroundColor: "rgba(255,250,240, 0.7)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 30,
    position: "absolute"
  },
  iqCircle: {
    width: 165,
    height: 165,
    borderRadius: 165 / 2,
    backgroundColor: "rgb(255,250,240)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    position: "absolute"
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
  circleTextColor: {
    color: "rgb(157, 143, 136)"
  },
  circleText: {
    color: "rgb(157, 143, 136)",
    fontSize: 105,
    textAlign: "center"
  },

  leftMargin: {
    marginLeft: 20
  },

  rightMargin: {
    marginRight: 20
  },
  actionButton: {
    width: 35,
    height: 35,
    backgroundColor: "rgb(241, 202,118)"
  },

  buttonText: {
    color: "white"
  },

  numText: {
    color: "white",
    textAlign: "center",
    fontSize: 29
  }
});

export default styles;
