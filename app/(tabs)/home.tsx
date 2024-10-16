import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const Home = () => {
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.MainText}>Home</Text>
      <Pressable onPress={() => router.push("/(auth)/login")} accessibilityLabel="Go to login">
        <Text>Go to login</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  MainText: { fontSize: 40, fontFamily: "outfit-bold" },
  MainContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
