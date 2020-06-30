import { StyleSheet } from "react-native";
import { horizontal } from "../../../theme/responsive";

const styles = StyleSheet.create({
  CONTAINER: {
    paddingHorizontal: horizontal(20),
  },
  BEST_SELLER_ITEM: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
