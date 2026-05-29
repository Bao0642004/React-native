import { StyleSheet } from "react-native";

export const HomeStyle = StyleSheet.create({
  container: { marginTop: 50 },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 10,
    borderColor: "#C0C0C0",
    borderRadius: 7,
  },
  Textinput: { fontSize: 17, flex: 1 },
  icon1: { marginLeft: 10 },
  view2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  filterButton: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D0D0D0",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    width: 120,
  },
});
