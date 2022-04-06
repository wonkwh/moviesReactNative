import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Movies = ({ navigation: { navigate } }) => (
  <TouchableOpacity
    onPress={() => navigate("Stack", { screen: "Three" })}
    style={styles.container}
  >
    <Text> Movies</Text>
  </TouchableOpacity>
);

export default Movies;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
