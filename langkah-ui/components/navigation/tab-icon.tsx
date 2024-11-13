import React, { FC } from "react";
import { Image, Text, View } from "react-native";

const TabIcon: FC<{
  icon: string;
  color: string;
  name: string;
  focused: boolean;
}> = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-rregular" : "font-rregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabIcon;
