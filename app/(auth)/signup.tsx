import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const signup = () => {
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.MainText}>signup</Text>
      <Pressable onPress={() => router.push("/about/our")} accessibilityLabel="Go to startup page">
        <Text style={styles.btnTxt}>Scroll</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/about/contact")} accessibilityLabel="Go to startup page">
        <Text style={styles.btnTxt}>Section</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/about/terms")} accessibilityLabel="Go to startup page">
        <Text style={styles.btnTxt}>Model</Text>
      </Pressable>
    </View>
  )
}

export default signup

const styles = StyleSheet.create({
    MainText: { fontSize: 40, fontFamily: 'outfit-bold' },
    MainContainer: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' },
    btnTxt : {fontSize : 20 , fontFamily : 'outfit-bold'}
})