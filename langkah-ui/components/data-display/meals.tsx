import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

import { icons } from "../../constants";
import { Meal } from "@/constants/models";

const Meals: FC<{ meals?: Meal[] }> = ({ meals }) => {
  return (
    <>
      <Text className="text-white font-rmedium mb-2">Meals</Text>
      {meals?.map((meal, index) => (
        <View key={index} className="bg-black-200 rounded-xl p-2 mb-4 relative">
          <View className="flex-row items-center">
            {/* Time on the left */}
            <Text className="text-gray text-xs font-rmedium px-2">07:00</Text>
            <View className="flex-1">
              {/* Space between meal name and right-side content */}
              <View className="flex-row justify-between items-center mb-1">
                <Text className="text-white font-rmedium flex-1">
                  {meal.name || "Overnight Oats"} {/* Example meal name */}
                </Text>
                <View className="flex-row items-center gap-1">
                  <Text className="text-gray text-xs">450 / 600 kcal</Text>
                </View>
              </View>
              <Text className="text-gray text-xs mb-1">
                {meal.ingredients || "Rolled Oats, Banana"}
              </Text>
              <View className="flex-row gap-5">
                <Text className="text-gray text-xs">Carbs</Text>
                <Text className="text-gray text-xs">Protein</Text>
                <Text className="text-gray text-xs">Fats</Text>
              </View>
            </View>
          </View>
          {/* Vertical Line on the left */}
          {index < meals.length - 1 && (
            <View
              className="absolute bg-secondary left-6"
              style={{ width: 1, height: 15, top: "130%" }}
            />
          )}
        </View>
      ))}
      {/* Vertical line extending from last meal to the button */}
      <View className="relative flex-row items-start">
        {/* Vertical line extending from the last meal to the button */}
        <View
          className="absolute bg-secondary left-6"
          style={{ width: 1, height: 20, top: -15 }}
        />
        <TouchableOpacity
          className="bg-secondary h-8 w-8 p-2 rounded-full items-center justify-center ml-2"
          onPress={() => router.push("/(nutrition)/create-meal")}
        >
          <Image source={icons.add} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Meals;
