import { Stack } from "expo-router";

const NutritionLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="create-meal" />
      <Stack.Screen name="food-product-detail" />
    </Stack>
  );
};

export default NutritionLayout;
