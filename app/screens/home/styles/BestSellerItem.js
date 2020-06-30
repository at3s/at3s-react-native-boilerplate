import { StyleSheet } from "react-native";
import color from "../../../theme/color";
import { horizontal, vertical } from "../../../theme/responsive";

const styles = StyleSheet.create({
  CONTAINER: {
    alignItems: "center",
    marginTop: vertical(17),
  },
  AVATAR: {
    width: horizontal(44),
    height: horizontal(44),
    marginBottom: 8,
    borderRadius: 100,
  },
  NAME: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: color.black,
    fontWeight: "300",
    marginBottom: vertical(20),
  },
});

export default styles;
