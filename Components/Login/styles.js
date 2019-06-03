import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  form: {
    flex: 1,
    margin: 30,
    justifyContent: "center",
    alignItems: "stretch"
  },

  formfield: {
    backgroundColor: "transparent",
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: "rgb(163,35,58)"
  },
  formtitle: {
    position: "absolute",
    top: 100,
    fontWeight: "bold",
    color: "rgb(163,35,58)",
    fontSize: 50,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
    width: "100%",
    height: "100%"
  },
  formButton: { marginTop: 60, backgroundColor: "rgb(163,35,58)" },

  red: {
    color: "rgb(163,35,58)"
  },

  signupOption: {
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row"
  }
});

export default styles;
