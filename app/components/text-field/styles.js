import { StyleSheet } from "react-native";
import color from "../../theme/color";
import { horizontal, vertical } from "../../theme/responsive";

const styles = StyleSheet.create({
  CONTAINER: {
    borderRadius: 3,
    // borderWidth: 1,
    // borderColor: color.white,
    // borderStyle: "solid",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: color.white,
    marginBottom: vertical(13),
    paddingVertical: vertical(9),
    paddingHorizontal: horizontal(20),
  },
  INPUT_NAME: {
    color: "#959595",
    fontSize: 11,
  },
  INPUT: {
    color: color.black,
    fontSize: 14,
    fontFamily: "Roboto",
  },
});

export default styles;
