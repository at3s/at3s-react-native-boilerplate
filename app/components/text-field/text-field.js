import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./styles";

export function TextField(props) {
  const { inputName, secure, placeholder, value, containerInputStyle } = props;

  return (
    <View style={[styles.CONTAINER, containerInputStyle]}>
      <Text style={styles.INPUT_NAME}>{inputName}</Text>
      <TextInput
        style={styles.INPUT}
        secureTextEntry={secure}
        placeholder={placeholder}
        value={value}
      />
    </View>
  );
}
