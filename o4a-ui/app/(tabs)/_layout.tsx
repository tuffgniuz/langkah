import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "#9da0a6",
        tabBarActiveTintColor: "#3ffeb9",
        tabBarStyle: {
          backgroundColor: "#1e1e1e",
          borderTopWidth: 1,
          borderTopColor: "#292e3a",
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="meals"
        options={{ title: "Meals", headerShown: false }}
      />
      <Tabs.Screen
        name="workouts"
        options={{ title: "Workouts", headerShown: false }}
      />
      <Tabs.Screen
        name="recipes"
        options={{ title: "Recipes", headerShown: false }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", headerShown: false }}
      />
    </Tabs>
  );
};

export default TabLayout;
