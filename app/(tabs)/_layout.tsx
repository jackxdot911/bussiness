import { View, Text } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { Tabs } from "expo-router";

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
          name="home"
          options={{
            tabBarLabel: ({ focused } : { focused: boolean }) => (
                <Text style={{ color: focused ? Colors.PRIMARY : '#000' , width : '100%' , textAlign : 'center' , marginBottom : 10}}>
                  Home
                </Text>
              ),
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            tabBarLabel: ({ focused } : { focused: boolean }) => (
                <Text style={{ color: focused ? Colors.PRIMARY : '#000' , width : '100%' , textAlign : 'center', marginBottom : 10}}>
                  Explore
                </Text>
              ),
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="search" size={24} color={color}/>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabel: ({ focused } : { focused: boolean }) => (
                <Text style={{ color: focused ? Colors.PRIMARY : '#000' , width : '100%' , textAlign : 'center', marginBottom : 10}}>
                  Profile
                </Text>
              ),
            tabBarIcon: ({ color }) => (
              <Ionicons name="people-sharp" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
  );
};

export default TabLayout;
