import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { horizontal, vertical } from "../../theme/responsive";
import { Screen, Header } from "../../components";
import { ButtonBack } from "./components";
import Constants from "expo-constants";
import color from "../../theme/color";
import Icon from "react-native-vector-icons/FontAwesome5";

export function ProductDetail() {
  const navigation = useNavigation();

  return (
    <Screen
      scroll
      statusBarTranslucent
      statusBarBackgroundColor={"transparent"}
    >
      <View style={styles.PRODUCT}>
        <ImageBackground
          style={{
            width: null,
            height: null,
            flex: 1,
          }}
          resizeMode="stretch"
          source={require("./images/bg.png")}
        >
          <Header
            component={<ButtonBack />}
            whiteBell
            headerStyle={{
              paddingHorizontal: horizontal(20),
              marginTop: vertical(15),
              paddingTop: Constants.statusBarHeight,
            }}
          />
          <View style={styles.CONTAINER}>
            <Text style={{ ...styles.PRODUCT_TEXT, marginTop: vertical(23) }}>
              Beats By Solo
            </Text>
            <Text style={{ ...styles.PRODUCT_TEXT, fontWeight: "bold" }}>
              Dr. Dre
            </Text>
          </View>
          <Image
            style={styles.PRODUCT_IMG}
            source={require("./images/head-phone-yellow.png")}
            resizeMode="cover"
          />
        </ImageBackground>
      </View>
      <View style={styles.DETAIL}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.DETAIL_LEFT}>
            <Text style={styles.DETAIL_TITLE}>
              Experience your music like never before.
            </Text>
            <View style={styles.FEATURE}>
              <Icon
                name="battery-three-quarters"
                size={25}
                style={{ transform: [{ rotate: "270deg" }] }}
              />
              <Text style={styles.FEATURE_TEXT}>Up to 40-hour battery</Text>
            </View>
            <View style={styles.FEATURE}>
              <Icon name="wifi" size={25} />
              <Text style={styles.FEATURE_TEXT}>Wi-Fi</Text>
            </View>
          </View>
          <Image
            resizeMode="stretch"
            style={{ width: horizontal(123), height: vertical(190) }}
            source={require("./images/foldedcase.png")}
          />
        </View>
        <Text style={styles.DESCRIPTION}>
          With Fast Fuel, it only takes a few minutes of charging to get up to 3
          hours of play, so you can be on your way quicker.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          shadowColor: "rgba(0, 0, 0, 0.52)",
          shadowOffset: { width: -20, height: 20 },
          shadowRadius: 40,
          elevation: 20,
        }}
      >
        <TouchableOpacity style={styles.BUY_CONTAINER}>
          <Text style={styles.BUY_TEXT}>Buy Now 120$</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ATC_CONTAINER}>
          <Text style={styles.ATC_TEXT}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  CONTAINER: {
    paddingHorizontal: horizontal(20),
  },
  PRODUCT: {
    backgroundColor: "#fff",
    height: vertical(373),
    borderBottomLeftRadius: 0,
    position: "relative",
  },
  PRODUCT_TEXT: {
    color: color.white,
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "300",
  },
  PRODUCT_IMG: {
    width: horizontal(150),
    height: vertical(210),
    position: "absolute",
    bottom: 0,
    left: "45%",
    transform: [{ translateX: -50 }, { translateY: 25 }],
  },
  DETAIL: {
    marginTop: vertical(42),
    paddingHorizontal: horizontal(20),
  },
  DETAIL_LEFT: {
    width: horizontal(218),
  },
  DETAIL_TITLE: {
    fontFamily: "Roboto",
    fontSize: 21,
    fontWeight: "600",
    lineHeight: 26,
    color: color.black,
    marginBottom: vertical(30),
  },
  FEATURE: {
    flexDirection: "row",
    marginBottom: vertical(20),
  },
  FEATURE_TEXT: {
    marginLeft: horizontal(9),
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "300",
    color: color.black,
  },
  DESCRIPTION: {
    marginTop: vertical(32),
    marginBottom: vertical(87),
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "300",
    color: color.black,
    lineHeight: 22,
  },
  BUY_CONTAINER: {
    width: horizontal(249),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.purple,
    paddingVertical: vertical(33),
  },
  BUY_TEXT: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "700",
    color: color.white,
  },
  ATC_CONTAINER: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.white,
    width: horizontal(126),
    paddingVertical: vertical(33),
  },
  ATC_TEXT: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "700",
    color: color.black,
  },
});
