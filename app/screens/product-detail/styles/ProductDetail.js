import { StyleSheet } from "react-native";
import color from "../../../theme/color";
import { horizontal, vertical } from "../../../theme/responsive";

const styles = StyleSheet.create({
  CONTAINER: {
    paddingHorizontal: horizontal(20),
  },
  PRODUCT: {
    backgroundColor: "#fff",
    height: vertical(373),
    borderBottomLeftRadius: 0,
    position: "relative",
  },
  PRODUCT_TEXT: {
    color: color.white,
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "300",
  },
  PRODUCT_IMG: {
    width: horizontal(150),
    height: vertical(210),
    position: "absolute",
    bottom: 0,
    left: "45%",
    transform: [{ translateX: -50 }, { translateY: 25 }],
  },
  DETAIL: {
    marginTop: vertical(42),
    paddingHorizontal: horizontal(20),
  },
  DETAIL_LEFT: {
    width: horizontal(218),
  },
  DETAIL_TITLE: {
    fontFamily: "Roboto",
    fontSize: 21,
    fontWeight: "600",
    lineHeight: 26,
    color: color.black,
    marginBottom: vertical(30),
  },
  FEATURE: {
    flexDirection: "row",
    marginBottom: vertical(20),
  },
  FEATURE_TEXT: {
    marginLeft: horizontal(9),
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "300",
    color: color.black,
  },
  DESCRIPTION: {
    marginTop: vertical(32),
    marginBottom: vertical(87),
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "300",
    color: color.black,
    lineHeight: 22,
  },
  BUY_CONTAINER: {
    width: horizontal(249),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.purple,
    paddingVertical: vertical(33),
  },
  BUY_TEXT: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "700",
    color: color.white,
  },
  ATC_CONTAINER: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.white,
    width: horizontal(126),
    paddingVertical: vertical(33),
  },
  ATC_TEXT: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "700",
    color: color.black,
  },
});

export default styles;
