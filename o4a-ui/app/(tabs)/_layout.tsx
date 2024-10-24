import React from "react";
import { Tabs } from "expo-router";

import { icons } from "../../constants";

import TabIcon from "../../components/navigation/tab-icon";
import { Text } from "react-native";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "#9da0a6",
        tabBarActiveTintColor: "#3ffeb9",
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          shadowColor: "transparent",
          backgroundColor: "#1e1e1e",
          borderTopColor: "#292e3a",
          borderTopWidth: 1,
          height: 84,
        },
      }}
    >
      {/* For the nutrition screen I want an input field above the tab icons */}
      <Tabs.Screen
        name="nutrition"
        options={{
          title: "Nutrition",
          headerShown: false,
          tabBarStyle: {
            elevation: 0,
            shadowOpacity: 0,
            shadowColor: "transparent",
            backgroundColor: "#1e1e1e",
            borderTopColor: "#292e3a",
            borderTopWidth: 0,
            height: 84,
          },
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.meal}
              color={color}
              name="Nutrition"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="workouts"
        options={{
          title: "Workouts",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.dumbell}
              color={color}
              name="Workouts"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="recipes"
        options={{
          title: "Recipes",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.chef}
              color={color}
              name="Recipes"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
