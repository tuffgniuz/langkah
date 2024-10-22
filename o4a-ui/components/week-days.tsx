import { FC } from "react";
import { ScrollView, Text, View } from "react-native";

import useWeekDays from "@/hooks/useWeekDays";

const WeekDays: FC<{ containerStyle?: string }> = ({ containerStyle }) => {
  const weekDays: Date[] = useWeekDays();
  const currentDate = new Date();

  return (
    <View className={`w-full justify-center flex-row gap-1 ${containerStyle}`}>
      {weekDays.map((date: Date, index: number) => (
        <View
          key={index}
          className={`w-12 p-2 rounded-full items-center justify-center ${date.toDateString() === currentDate.toDateString() ? "bg-green-100" : ""}`}
        >
          <Text className="mb-5">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
          </Text>
          <Text
            className={`font-bold p-2 ${date.toDateString() === currentDate.toDateString() ? "bg-white rounded-full" : ""}`}
          >
            {date.getDate()}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default WeekDays;
