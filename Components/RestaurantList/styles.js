import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    margin: 20
  },
  queueNum: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    backgroundColor: "rgb(255,250,240)",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute"
  },
  cardImg: {
    borderRadius: 40,
    borderWidth: 1
  },
  bottomTitle: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 5,
    marginLeft: 10,
    backgroundColor: "transparent"
  },

  cardTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white"
  },
  cardDesc: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  }
});

export default styles;
