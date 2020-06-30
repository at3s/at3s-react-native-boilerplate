import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/BestSeller";

export function BestSeller() {
  return (
    <View style={styles.BEST_SELLER}>
      <View style={styles.BEST_SELLER_LEFT}>
        <TouchableOpacity style={styles.BEST_SELLER_BTN}>
          <Text style={styles.BEST_SELLER_TEXT_BTN}>Best Seller</Text>
        </TouchableOpacity>
        <Text style={styles.BEST_SELLER_TITLE}>
          Beats By Solo Dr.Dre Wireless
        </Text>
        <Text style={styles.BEST_SELLER_PRICE}>24.90$</Text>
      </View>
      <View style={styles.BEST_SELLER_RIGHT}>
        <Image
          style={styles.PRODUCT}
          source={require("../images/head-phone.png")}
        />
      </View>
    </View>
  );
}
