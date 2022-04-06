import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { Asset, useAssets } from "expo-asset";
import * as Font from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import Stacks from "./navigation/stack";

export default function App() {
  //use Hooks
  const [assets] = useAssets([require("./my_profile.jpeg")]);
  const [loaded] = Font.useFonts(Ionicons.font);

  if (!assets || !loaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stacks />
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
