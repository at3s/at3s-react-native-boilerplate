import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import color from "../../theme/color";
import styles from "./styles";

export function Header(props) {
  return (
    <View style={[styles.HEADER, props.headerStyle]}>
      {props.title && <Text style={styles.WELCOME}>{props.title}</Text>}
      {props.component && props.component}
      <View style={styles.RIGHT_HEADER}>
        <TouchableOpacity style={styles.NOTICE}>
          <Icon
            name="bell"
            size={25}
            color={props.whiteBell ? "#fff" : "#000"}
          />
          <Text
            style={{
              ...styles.NOTICE_NUMBER,
              color: props.whiteBell ? color.purple : color.white,
              backgroundColor: props.whiteBell ? color.white : color.purple,
              borderColor: props.whiteBell ? color.purple : null,
              borderWidth: props.whiteBell ? 1 : null,
              borderStyle: props.whiteBell ? "solid" : null,
            }}
          >
            2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.AVATAR}
            resizeMode="cover"
            source={require("../../../assets/avatar.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
