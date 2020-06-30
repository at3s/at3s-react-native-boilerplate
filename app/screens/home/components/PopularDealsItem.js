import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../styles/PopularDealsItem";

export function PopularDealsItem(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("productDetail")}
      style={styles.CONTAINER}
    >
      <View style={styles.IMG}>
        <ImageBackground
          source={props.backgroundImg}
          style={styles.BG_IMG}
          imageStyle={{
            resizeMode: "cover",
          }}
        >
          <Image
            style={styles.HEAD_PHONE}
            resizeMode="cover"
            source={props.img}
          />
        </ImageBackground>
      </View>
      <Text style={styles.TITLE}>{props.title}</Text>
      <Text style={styles.PRICE}>{props.price}</Text>
    </TouchableOpacity>
  );
}

export default PopularDealsItem;
