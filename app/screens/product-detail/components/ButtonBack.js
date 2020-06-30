import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity } from "react-native";

export function ButtonBack() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        style={{ width: 20, height: 14 }}
        source={require("../images/back.png")}
      />
    </TouchableOpacity>
  );
}
