import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Header, Screen } from "../../components";
import { horizontal, vertical } from "../../theme/responsive";
import { ButtonBack } from "./components";
import styles from "./styles/ProductDetail";

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
