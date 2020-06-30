import { StyleSheet } from "react-native";
import color from "../../../theme/color";
import { horizontal, vertical } from "../../../theme/responsive";

const styles = StyleSheet.create({
  CONTAINER: {
    marginRight: horizontal(27),
    marginTop: 10,
  },
  BG_IMG: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  IMG: {
    // width: horizontal(113),
    // height: vertical(129),
    width: 113,
    height: 129,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 20, height: 0 },
    shadowRadius: 40,
  },
  HEAD_PHONE: {
    // width: horizontal(61),
    // height: vertical(81),
  },
  TITLE: {
    fontSize: 12,
    color: color.black,
    fontWeight: "300",
    fontFamily: "Roboto",
    marginTop: vertical(18),
  },
  PRICE: {
    color: color.purple,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
});

export default styles;
