import { FC } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import WeekDays from "@/components/week-days";
import DailyNutritionSummary from "@/components/daily-nutrition-summary";

const Meals: FC = () => {
  return (
    <SafeAreaView>
      {/* Render today's calorie and macros component */}
      <WeekDays containerStyle="mb-10" />
      <DailyNutritionSummary kcalEaten={280} kcalGoal={2000} />
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default Meals;
