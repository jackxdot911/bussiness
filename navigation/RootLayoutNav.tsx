import React from "react";
import { Stack } from "expo-router";

const RootLayoutNav = () => {
  return (
    <Stack initialRouteName="splash">
      <Stack.Screen 
        name="splash"
        options={{
          headerShown: true
        }}
      />
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="startup"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="about/contact"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="about/our"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="about/terms"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default RootLayoutNav;
