import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { icons } from "../../constants";

const Meals = () => {
  return (
    <>
      <Text className="text-white font-rmedium mb-2">Meals</Text>
      <View className="bg-black-200 rounded-xl p-2">
        <View className="flex-row items-center gap-4">
          <Image source={icons.bowl} tintColor="#fefefe" className="w-6 h-6" />
          <View className="flex-1">
            {/* should be have space between */}
            <View className="flex-row items-center  mb-1">
              <Text className="text-white font-rmedium flex-1">Breakfast</Text>
              <View className="flex-row items-center gap-1">
                <Image
                  source={icons.clock}
                  tintColor="#9da0a6"
                  className="w-3 h-3"
                />
                <Text className="text-gray text-xs font-rlight">07:00</Text>
              </View>
            </View>
            <Text className="text-gray text-xs mb-1">450 / 600 kcal</Text>
            <Text className="text-gray text-xs">Rolled Oats, Banana</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Meals;
