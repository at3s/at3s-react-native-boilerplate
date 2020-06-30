import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import color from "../../theme/color";
import styles from "./styles";

const iconSize = 25;

function CustomTab({ state, descriptors, navigation }) {
  return (
    <View style={styles.CONTAINER}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            key={index}
            activeOpacity={1}
          >
            {label === "home" && (
              <Icon
                name={"home"}
                size={iconSize}
                color={isFocused ? "#673ab7" : color.gray}
              />
            )}
            {label === "bag" && (
              <Icon
                name={"shopping-bag"}
                size={iconSize}
                color={isFocused ? "#673ab7" : color.gray}
              />
            )}
            {label === "tag" && (
              <Icon
                name={"tag"}
                size={iconSize}
                color={isFocused ? "#673ab7" : color.gray}
                style={{ transform: [{ rotate: "90deg" }] }}
              />
            )}
            {label === "profile" && (
              <Icon
                name={"user"}
                size={iconSize}
                color={isFocused ? "#673ab7" : color.gray}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default CustomTab;
