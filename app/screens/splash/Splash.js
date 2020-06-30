import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button, Screen } from "../../components";
import color from "../../theme/color";
import { horizontal, vertical } from "../../theme/responsive";

export function Splash({ navigation }) {
  return (
    <Screen hideStatusbar>
      <ImageBackground
        style={{
          flex: 1,
          width: null,
          height: null,
        }}
        source={require("./bg.png")}
        imageStyle={{
          resizeMode: "stretch",
        }}
      >
        <View style={styles.CONTAINER}>
          <Text style={styles.LISTEN_ALL_DAY}>Listen all day</Text>
          <Text style={styles.ENJOY}>
            Enjoy your playlist without interruption, because a full charge
            lasts up to 22 hours - or up to 40 hours with Pure ANC off.
          </Text>
          <View style={styles.GROUP_BUTTON}>
            <Button
              buttonStyle={styles.BTN_LOGIN}
              onPress={() => navigation.navigate("home")}
              text="Login"
              textStyle={{ fontSize: 14 }}
              color={color.purple}
            />
            <Button
              buttonStyle={styles.BTN_SIGNUP}
              onPress={() => navigation.navigate("home")}
              text="Sign Up"
              textStyle={{ color: color.purple, fontSize: 14 }}
              color="transparent"
            />
          </View>
        </View>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginHorizontal: horizontal(16),
  },
  LISTEN_ALL_DAY: {
    color: color.white,
    fontWeight: "700",
    fontSize: 30,
    fontFamily: "Roboto",
    marginBottom: vertical(18),
  },
  ENJOY: {
    fontSize: 14,
    fontWeight: "300",
    lineHeight: 22,
    color: color.white,
    opacity: 0.49,
    fontFamily: "Roboto",
    marginBottom: vertical(18),
    paddingBottom: 12,
  },
  GROUP_BUTTON: {
    flexDirection: "row",
    marginBottom: vertical(55),
    width: "100%",
  },
  BTN_LOGIN: {
    paddingHorizontal: horizontal(52),
    paddingVertical: vertical(12),
    backgroundColor: color.purple,
    marginRight: horizontal(25),
  },
  BTN_SIGNUP: {
    paddingHorizontal: horizontal(52),
    paddingVertical: vertical(12),
  },
});
