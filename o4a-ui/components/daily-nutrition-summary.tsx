import { FC } from "react";
import { Text, View } from "react-native";

const DailyNutritionSummary: FC<{
  kcalEaten?: number;
  kcalGoal?: number;
  containerStyle?: string;
}> = ({ kcalEaten, kcalGoal, containerStyle }) => {
  const borderColor =
    kcalEaten / kcalGoal >= 1 ? "border-red-500" : "border-green-500";
  const percentage = Math.min((kcalEaten / kcalGoal) * 100, 100);
  return (
    <View className={`w-full items-center justify-center ${containerStyle}`}>
      <View
        className={`w-44 h-44 rounded-full border-4 ${borderColor} items-center justify-center mb-5`}
        style={{
          borderWidth: 4,
          borderColor: `rgba(0, 128, 0, ${percentage / 100})`,
        }}
      >
        <Text className="text-bold text-4xl">{kcalGoal - kcalEaten}</Text>
        <Text>kcal left</Text>
      </View>
      <View className="flex-row gap-4">
        <Text>Carbs</Text>
        <Text>Protein</Text>
        <Text>Fats</Text>
      </View>
    </View>
  );
};

export default DailyNutritionSummary;
