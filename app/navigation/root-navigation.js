import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ProductDetail, Splash } from "../screens";
import HomeNavigator from "./home-navigator";

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen
          name="splash"
          options={{ headerShown: false }}
          component={Splash}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="home"
          component={HomeNavigator}
        />
        <Stack.Screen
          name="productDetail"
          options={{
            headerShown: false,
          }}
          component={ProductDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
