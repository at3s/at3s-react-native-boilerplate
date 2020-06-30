import { StyleSheet } from "react-native";
import color from "../../../theme/color";
import { horizontal, vertical } from "../../../theme/responsive";

const styles = StyleSheet.create({
  BEST_SELLER: {
    backgroundColor: color.blueLight,
    marginTop: vertical(31),
    paddingVertical: vertical(25),
    paddingHorizontal: horizontal(20),
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: { width: 20, height: 0 },
    shadowRadius: 40,
    borderRadius: 2,
    elevation: 10,
    flexDirection: "row",
  },
  BEST_SELLER_LEFT: {
    width: "50%",
    alignItems: "flex-start",
  },
  BEST_SELLER_RIGHT: {
    width: "50%",
    position: "relative",
  },
  BEST_SELLER_BTN: {
    paddingVertical: vertical(5),
    paddingHorizontal: horizontal(12),
    borderRadius: 3,
    backgroundColor: color.white,
  },
  BEST_SELLER_TEXT_BTN: {
    color: color.blueLight,
    fontSize: 11,
    fontFamily: "Roboto",
    fontWeight: "400",
  },
  BEST_SELLER_TITLE: {
    color: color.white,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
    fontFamily: "Roboto",
    marginTop: vertical(13),
  },
  BEST_SELLER_PRICE: {
    color: color.white,
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "300",
    marginTop: vertical(18),
  },
  PRODUCT: {
    position: "absolute",
    top: -30,
    right: -42,
  },
});

export default styles;
