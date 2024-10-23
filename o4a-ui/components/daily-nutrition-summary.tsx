import { FC } from "react";
import { Text, View } from "react-native";
import CircularProgress from "./circular-progress";

const DailyNutritionSummary: FC<{
  kcalEaten?: number;
  kcalGoal?: number;
  containerStyle?: string;
}> = ({ kcalEaten = 0, kcalGoal = 2000, containerStyle }) => {
  const percentage = Math.min((kcalEaten / kcalGoal) * 100, 100);

  return (
    <View className={`w-full items-center justify-center ${containerStyle}`}>
      <View className="flex-row items-center justify-center">
        <View className="relative w-40 h-40 mx-2 items-center justify-center">
          <CircularProgress
            radius={70}
            strokeWidth={6}
            percentage={percentage}
          />
          <View
            className="absolute top-1/2 left-1/2"
            style={{
              transform: [{ translateX: -30 }, { translateY: -25 }],
            }}
          >
            <Text className="text-white font-bold text-4xl">
              {kcalGoal - kcalEaten}
            </Text>
            <Text className="text-gray text-center">kcal left</Text>
          </View>
        </View>
      </View>
      {/* Macronutrients Breakdown
      <View className="flex-row gap-4">
        <View className="flex-row items-center gap-2">
          <CircularProgress
            radius={15}
            strokeWidth={4}
            percentage={60}
            color="blue"
          />
          <Text>Carbs</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <CircularProgress
            radius={15}
            strokeWidth={4}
            percentage={60}
            color="blue"
          />
          <Text>Protein</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <CircularProgress
            radius={15}
            strokeWidth={4}
            percentage={60}
            color="blue"
          />

          <Text>Fats</Text>
        </View>
      </View>
        */}
    </View>
  );
};

export default DailyNutritionSummary;
