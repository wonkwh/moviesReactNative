import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Movies from "../screens/movies";
import Search from "../screens/search";
import Tv from "../screens/tv";
import { useColorScheme } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../colors";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? colors.backgroundColor : "white",
        },
        tabBarActiveTintColor: isDark
          ? colors.tintColor
          : colors.backgroundColor,
        headerStyle: {
          backgroundColor: isDark ? colors.backgroundColor : "white",
        },
        headerTitleStyle: {
          color: isDark ? "white" : colors.backgroundColor,
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="film-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="tv-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"search-outline"} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
