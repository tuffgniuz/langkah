import { Stack } from "expo-router";

const TabLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="meals" options={{ headerShown: false }} />
    </Stack>
  );
};

export default TabLayout;
