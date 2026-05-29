import { StyleSheet } from "react-native";

export const MenuItemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    overflow: "hidden",
  },
  image: {
    width: 130,
    height: 175,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    color: "gray",
  },
  price: {
    fontSize: 14,
    color: "#E52B50",
    fontWeight: "bold",
    marginTop: 5,
  },
  TExt1: { marginLeft: 3, fontSize: 15, fontWeight: "400" },
  TExt2: { marginLeft: 3 },
  Text3: { fontSize: 17, color: "gray", marginTop: 6 },
  View1: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  View2: {
    backgroundColor: "#FFB6C1",
    width: 22,

    height: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  Text4: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
  },
  TExt5: {
    marginTop: 5,
    marginLeft: 4,
    fontSize: 16,
    fontWeight: "500",
  },
});
