import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  qContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  img: {
    flex: 1,
    opacity: 0.9,
    width: "100%",
    height: "35%",
    alignItems: "center",
    justifyContent: "center"
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
  queueButtons: {
    marginTop: 300,
    backgroundColor: "#f7ca67"
  },
  numText: {
    color: "white",
    textAlign: "center",
    fontSize: 29,
    fontWeight: "bold",
    marginRight: 15,
    marginLeft: 15
  },
  circleTextColor: {
    color: "rgb(157, 143, 136)"
  },
  circleText: {
    color: "rgb(157, 143, 136)",
    fontSize: 105,
    textAlign: "center"
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
  white: {
    color: "white"
  }
});

export default styles;
