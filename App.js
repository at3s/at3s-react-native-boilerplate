import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigator } from "./app/navigation/root-navigation";
import RootStore from "./app/store/root-store";

export default function App() {
  return (
    <RootStore>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </RootStore>
  );
}
