import { StyleSheet } from "react-native";
import color from "../../theme/color";
import { horizontal, vertical } from "../../theme/responsive";

const styles = StyleSheet.create({
  HEADER: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: vertical(15),
  },
  WELCOME: {
    fontFamily: "Roboto",
    fontSize: 21,
    fontWeight: "700",
  },
  RIGHT_HEADER: {
    flexDirection: "row",
    alignItems: "center",
  },
  NOTICE: {
    position: "relative",
  },
  NOTICE_NUMBER: {
    position: "absolute",
    fontSize: 11,
    backgroundColor: color.purple,
    color: color.white,
    padding: 2,
    borderRadius: 100,
    width: 15,
    height: 15,
    textAlign: "center",
    lineHeight: 12,
    right: -5,
    top: -5,
  },
  AVATAR: {
    marginLeft: horizontal(28),
    borderRadius: 2,
    width: horizontal(30),
    height: horizontal(30),
  },
});

export default styles;
