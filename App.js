import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Asset, useAssets } from "expo-asset";
import * as Font from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/root";

export default function App() {
  //use Hooks
  const [assets] = useAssets([require("./my_profile.jpeg")]);
  const [loaded] = Font.useFonts(Ionicons.font);

  if (!assets || !loaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
