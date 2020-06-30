import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

export function Button(props) {
  const { textStyle, buttonStyle, onPress } = props;
  return (
    <TouchableOpacity style={[styles.CONTAINER, buttonStyle]} onPress={onPress}>
      <Text style={[styles.TEXT, textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
}
