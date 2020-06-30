import { StyleSheet } from "react-native";
import color from "../../theme/color";

const styles = StyleSheet.create({
  TEXT: {
    fontSize: 14,
    color: color.white,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  CONTAINER: {
    borderColor: "#7c6bd7",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
