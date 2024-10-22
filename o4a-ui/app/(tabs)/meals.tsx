import { FC } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import WeekDays from "@/components/week-days";
import DailyNutritionSummary from "@/components/daily-nutrition-summary";

const Meals: FC = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      {/* Render today's calorie and macros component */}
      <WeekDays containerStyle="mb-5" />
      <DailyNutritionSummary kcalEaten={1330} kcalGoal={2000} />
      {/* Overview of logged meals */}
      {/*
      <ScrollView>
        <Text>You haven't logged any meals today</Text>
      </ScrollView>
      <TouchableOpacity className="w-full items-center">
        <Text>Add meal</Text>
      </TouchableOpacity>
      */}
    </SafeAreaView>
  );
};

export default Meals;
