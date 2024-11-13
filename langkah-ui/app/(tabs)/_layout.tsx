import React from "react";
import { Tabs, useSegments } from "expo-router";

import { icons } from "../../constants";

import TabIcon from "../../components/navigation/tab-icon";

const TabLayout = () => {
  const segments = useSegments();

  // Determine if the current route includes "create-meal" by checking path segments.
  const isCreateMeal = (segments as readonly string[]).includes("create-meal");

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
        name="(nutrition)"
        options={{
          headerShown: false,
          tabBarStyle: isCreateMeal
            ? { display: "none" }
            : {
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
        name="workout"
        options={{
          title: "Workout",
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
              icon={icons.dumbell}
              color={color}
              name="Workout"
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
