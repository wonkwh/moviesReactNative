import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Stacks from "./stack";
import Tabs from "./tabs";

const RootStackNavigator = createNativeStackNavigator();

const Root = () => (
  <RootStackNavigator.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <RootStackNavigator.Screen name="Tabs" component={Tabs} />
    <RootStackNavigator.Screen name="Stack" component={Stacks} />
  </RootStackNavigator.Navigator>
);

export default Root;
