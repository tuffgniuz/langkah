import React, { FC } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import WeekDays from "../../components/week-days";
import DailyNutritionSummary from "../../components/daily-nutrition-summary";
import Meals from "../../components/data-display/meals";

const Nutrition: FC = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="px-4 pt-2">
          {/* Render today's calorie and macros component */}
          <WeekDays containerStyle="mb-5" />
          <DailyNutritionSummary kcalEaten={1330} kcalGoal={2000} />
          {/* Overview of logged meals */}
          <Meals />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Nutrition;
