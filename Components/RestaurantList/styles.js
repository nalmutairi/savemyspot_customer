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
  card: {
    marginTop: 5,
    height: 220,
    marginLeft: 4,
    marginRight: 4
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
  },
  accountIcon: {
    marginRight: 10
  },

  spotCard: {
    backgroundColor: "white",
    height: 80
  },
  spotNum: {
    borderColor: "rgb(163,35,58)",
    borderWidth: 2,
    width: 66,
    height: 66,
    borderRadius: 33,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "white",
    shadowOpacity: 0.6
  },
  spotName: {
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "white",
    shadowOpacity: 0.6,
    fontWeight: "bold",
    fontSize: 30,
    color: "rgb(163,35,58)",
    marginLeft: 20
  },

  outerCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,250,240, 0.7)",
    alignItems: "center",
    justifyContent: "center",
    top: 10,
    right: 20,
    position: "absolute"
  },
  innerCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgb(255,250,240)",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center"
  },
  qNum: {
    color: "rgb(157, 143, 136)",
    fontWeight: "bold"
  }
});

export default styles;
