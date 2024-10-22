import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="meals" options={{ headerShown: false }} />
      <Tabs.Screen name="home" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default TabLayout;
