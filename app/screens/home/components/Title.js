import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import color from "../../../theme/color";
import { vertical } from "../../../theme/responsive";

export function Title(props) {
  return (
    <View style={styles.CONTAINER}>
      <Text style={styles.TITLE}>{props.title}</Text>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.ACTION_TEXT}>{props.action_text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  CONTAINER: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: vertical(36),
    alignItems: "center",
  },
  TITLE: {
    color: color.black,
    fontSize: 21,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  ACTION_TEXT: {
    fontSize: 12,
  },
});
