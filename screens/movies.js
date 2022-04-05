
import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Movies = () => (
  <View style={styles.container}>
    <Text> Movies</Text>
  </View>
)

export default Movies
const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})