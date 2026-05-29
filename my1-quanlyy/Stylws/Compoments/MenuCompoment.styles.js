import { StyleSheet } from "react-native";

export const Menucompomentstyles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 6,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  image: {
    width: 100,
    height: 110,
    borderRadius: 10,
    backgroundColor: "#f1f1f1",
  },
  middle: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "flex-start",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    flexShrink: 1,
    maxWidth: 220, // cố định vì không import hằng số
    lineHeight: 22,
  },
  price: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: "500",
    color: "#444",
  },
  ratingRow: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  star: {
    marginRight: 3,
  },
  description: {
    marginTop: 8,
    color: "gray",
    fontSize: 14,
    lineHeight: 18,
    maxWidth: 200,
  },
  actionBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginLeft: 10,
  },
  addBtn: {
    backgroundColor: "#018749",
    borderRadius: 100, // không dùng '100%'
    padding: 4, // thêm đệm để icon không bị cắt
  },
  addText: {
    fontSize: 16,
  },
  quantityBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#018749",
  },
  qtyBtn: {
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  qtyBtnText: {
    fontSize: 22,
    color: "#018749",
    borderWidth: 1.2,
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: "100%",
    fontWeight: "600",
  },
  quantityText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#018749",
    paddingHorizontal: 6,
    minWidth: 24,
    textAlign: "center",
  },
});
