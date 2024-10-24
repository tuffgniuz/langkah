import React, { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { icons } from "@/constants";

import WeekDays from "../../components/week-days";
import DailyNutritionSummary from "../../components/daily-nutrition-summary";
import Meals from "../../components/data-display/meals";

const DUMMY_MEALS = [
  {
    name: "oats",
  },
  {
    name: "Scrambled eggs",
  },
];

const Nutrition: FC = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="px-4 pt-2">
          <WeekDays containerStyle="mb-5" />
          {/* Render today's calorie and macros component */}
          <DailyNutritionSummary kcalEaten={1330} kcalGoal={2000} />
          {/* Overview of logged meals */}
          <Meals meals={DUMMY_MEALS} />
        </View>
      </ScrollView>
      {/* Button to navigate to food search screen */}
      <View className="border-t border-black-200 px-4 pt-2">
        <TouchableOpacity className="flex-row items-center justify-between bg-black-200 p-4 rounded-lg">
          <View className="flex-row items-center gap-2">
            <Image
              source={icons.search}
              className="w-4 h-4"
              tintColor="#9da0a6"
            />
            <Text className="text-gray">Search Food</Text>
          </View>
          {/* should be pushed to the right edge */}
          <Image
            source={icons.barcode}
            className="w-4 h-4"
            tintColor="#9da0a6"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Nutrition;
