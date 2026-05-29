import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const Carouselstyles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  imageWrapper: {
    width: width,
    height: 200,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  dotsContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#E52B50",
  },
});
