
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Asset } from 'expo-asset';
import  * as Font  from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function App() {

  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    await Font.loadAsync(Ionicons.font)
    await Asset.loadAsync(require("./my_profile.jpeg"))
    await Image.prefetch("https://reactnative.dev/img/oss_logo.png")
  };

  if (!ready) { 
    return (<AppLoading 
      startAsync={ startLoading }
      onFinish={onFinish}
      onError ={console.error}
    />)
  } else {
    return (
      <View style={styles.container}>
        <Text>App Loading is Done</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
