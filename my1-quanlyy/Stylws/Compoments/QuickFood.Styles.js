import { StyleSheet } from "react-native";

export const QuickFoodStyles = StyleSheet.create({
  cotainer: { margin: 10 },
  Text1: { fontSize: 17, fontWeight: "500", marginBottom: 10 },
  Image: {
    aspectRatio: 5 / 6,
    height: 170,
    borderRadius: 10,
    overflow: "hidden",
  },
  Text2: {
    position: "absolute",
    bottom: 10,
    left: 10,
    fontSize: 30,
    fontWeight: "900",
    color: "#fff",
  },
  Text3: { marginTop: 10, fontSize: 16, fontWeight: "500" },
  View1: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  Text4: { marginLeft: 3, fontSize: 15, fontWeight: "400" },
});
