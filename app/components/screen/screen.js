import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import { fixed, scroll } from "./screen.preset";
const isIos = Platform.OS === "ios";

const ScreenWithScroll = (props) => {
  const {
    style,
    statusBarTranslucent,
    statusBarBackgroundColor,
    hideStatusbar,
    statusbarStyle,
    children,
  } = props;

  return (
    <KeyboardAvoidingView
      behavior={isIos ? "padding" : null}
      keyboardVerticalOffset={"none"}
      style={[scroll.outer, style]}
    >
      <StatusBar
        translucent={statusBarTranslucent}
        backgroundColor={statusBarBackgroundColor}
        hidden={hideStatusbar || false}
        barStyle={statusbarStyle || "light-content"}
      />
      <View style={scroll.inner}>
        <ScrollView keyboardShouldPersistTaps="always">{children}</ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const ScreenWithoutScroll = (props) => {
  const {
    style,
    statusBarTranslucent,
    statusBarBackgroundColor,
    hideStatusbar,
    statusbarStyle,
    children,
  } = props;

  return (
    <KeyboardAvoidingView
      behavior={isIos ? "padding" : null}
      keyboardVerticalOffset={"none"}
      style={[fixed.outer, style]}
    >
      <StatusBar
        translucent={statusBarTranslucent}
        backgroundColor={statusBarBackgroundColor}
        hidden={hideStatusbar || false}
        barStyle={statusbarStyle || "light-content"}
      />
      <View style={fixed.inner}>{children}</View>
    </KeyboardAvoidingView>
  );
};

export function Screen(props) {
  if (props.scroll) {
    return <ScreenWithScroll {...props} />;
  } else {
    return <ScreenWithoutScroll {...props} />;
  }
}

export default Screen;
