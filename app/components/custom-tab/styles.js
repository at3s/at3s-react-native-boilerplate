import { StyleSheet } from "react-native";
import { vertical } from "../../theme/responsive";

const styles = StyleSheet.create({
  CONTAINER: {
    flexDirection: "row",
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    borderStyle: "solid",
    paddingVertical: vertical(21),
  },
});

export default styles;
