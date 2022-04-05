import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import Movies from "../screens/movies"
import Search from "../screens/search"
import Tv from "../screens/tv"

const Tab = createBottomTabNavigator()

const Tabs = () => (
	<Tab.Navigator screenOptions = {{ 
    tabBarActiveTintColor: "tomato",
   }}
   >
    <Tab.Screen name="Movies" component={Movies} />
    <Tab.Screen name="Tv" component={Tv} />
    <Tab.Screen name="Search" component={Search} options = {{ headerTitleStyle: {color: "tomato"}}}/>
  </Tab.Navigator>
)

export default Tabs