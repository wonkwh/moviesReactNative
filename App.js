
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Asset, useAssets } from 'expo-asset';
import  * as Font  from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function App() {
  //use Hooks
  const [assets] = useAssets([require("./my_profile.jpeg")])
  const [loaded] = Font.useFonts(Ionicons.font)

  if (!assets || !loaded) { 
    return <AppLoading />;
  } 
  
  return (
    <View style={styles.container}>
      <Text>App Loading is Done!!</Text>
      <StatusBar style="auto" />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
