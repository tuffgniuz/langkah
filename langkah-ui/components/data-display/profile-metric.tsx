import React, { FC } from "react";
import { Text, View } from "react-native";

const ProfileMetric: FC<{ label: string; value: string | number }> = ({
  label,
  value,
}) => {
  return (
    <View className="flex items-center justify-center mx-3">
      <Text className="text-white font-rmedium">{value}</Text>
      <Text className="text-gray">{label}</Text>
    </View>
  );
};

export default ProfileMetric;
