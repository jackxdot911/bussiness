import { View, Text, Pressable } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

const TabLayout = () => {
  return (
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIconStyle : {
            marginTop : 5
          },
          tabBarStyle : {
            height : 65,
            width : "70%",
            borderRadius : 99,
            alignSelf: 'center',
            margin : 20,
            padding: 3
          }
        }}
      >
        <Tabs.Screen
          name="login"
          options={{
            tabBarLabel: ({ focused } : { focused: boolean }) => (
                <Text style={{ color: focused ? Colors.PRIMARY : '#000' , width : '100%' , textAlign : 'center', marginBottom : 10}}>
                  Login
                </Text>
              ),
            tabBarIcon: ({ color }) => (
                <Ionicons name="create-outline" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="signup"
          options={{
            tabBarLabel: ({ focused } : { focused: boolean }) => (
                <Text style={{ color: focused ? Colors.PRIMARY : '#000' , width : '100%' , textAlign : 'center' , marginBottom : 10}}>
                  Signup
                </Text>
              ),
            tabBarIcon: ({ color }) => (
                <AntDesign name="login" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
  );
};

export default TabLayout;
