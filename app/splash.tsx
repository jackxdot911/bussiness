import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native"; // Import Lottie


const splashScreen = () => {
  return (
    <View style={styles.splashContainer}>
        <LottieView
          key="splashAnimation"
          source={require("./../assets/lottie/splash-screen.json")}
          autoPlay
          loop={false}
          style={styles.lottie}
        />
      </View>
  )
}

export default splashScreen

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff", // Add a background color (white)
      },
      lottie: {
        width: Dimensions.get("window").width * 0.8,
        height: Dimensions.get("window").width * 0.8,
      },
})