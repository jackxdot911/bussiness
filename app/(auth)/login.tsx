import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const login = () => {
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.MainText}>login</Text>
      <Pressable onPress={() => router.push("/startup")}>
        <Text>Go to startup Page</Text>
      </Pressable>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  MainText: { fontSize: 40, fontFamily: "outfit-bold" },
  MainContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
