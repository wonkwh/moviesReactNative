
import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Tv = () => (
  <View style={styles.container}>
    <Text> Tv</Text>
  </View>
)

export default Tv;
const styles = StyleSheet.create( {
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
})