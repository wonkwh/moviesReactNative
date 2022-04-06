import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "../colors";

const StackNavigator = createNativeStackNavigator();

const ScreenOne = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Two")}>
    <Text> go to two </Text>
  </TouchableOpacity>
);

const ScreenTwo = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Three")}>
    <Text> go to three </Text>
  </TouchableOpacity>
);

const ScreenThree = ({ navigation: { navigate, setOptions } }) => (
  <View>
    <TouchableOpacity onPress={() => setOptions({ title: "Hello!" })}>
      <Text> change title </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate("Tabs", { screen: "Search" })}>
      <Text> goto search tab </Text>
    </TouchableOpacity>
  </View>
);

const Stacks = () => (
  <StackNavigator.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
      headerTintColor: colors.tintColor,
    }}
  >
    <StackNavigator.Screen name="One" component={ScreenOne} />
    <StackNavigator.Screen name="Two" component={ScreenTwo} />
    <StackNavigator.Screen name="Three" component={ScreenThree} />
  </StackNavigator.Navigator>
);

export default Stacks;
