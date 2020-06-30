import React from "react";
import { Image, Text, View } from "react-native";
import styles from "../styles/BestSellerItem";

export function BestSellerItem(props) {
  return (
    <View style={styles.CONTAINER}>
      <Image
        source={require("../images/best-seller-avatar.png")}
        style={styles.AVATAR}
      />
      <Text style={styles.NAME}>{props.name}</Text>
    </View>
  );
}
