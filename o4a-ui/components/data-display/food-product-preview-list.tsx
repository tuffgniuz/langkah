import { Image, Text, TouchableOpacity, View } from "react-native";

import { icons } from "@/constants";
import { foodProducts } from "@/constants/dummy-data";

const FoodProductPreviewList = () => {
  return (
    <View>
      {foodProducts.map((product) => (
        <View className="flex-row items-center justify-between bg-black-200 p-4 rounded-xl mb-2">
          <View className="flex-row items-center gap-4">
            <View className="flex-row gap-1">
              <Text className="text-gray text-xs">100</Text>
              <Text className="text-gray text-xs">gr</Text>
            </View>
            <View>
              <Text className="text-white font-rmedium">{product.name}</Text>
              <Text className="text-gray text-xs">{product.brand}</Text>
            </View>
          </View>
          <TouchableOpacity className="flex justify-center items-center bg-secondary h-8 w-8 rounded-full">
            <Image source={icons.add} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default FoodProductPreviewList;
