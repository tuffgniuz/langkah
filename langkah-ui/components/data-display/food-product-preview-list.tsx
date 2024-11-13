import { Image, Text, TouchableOpacity, View } from "react-native";

import { icons } from "@/constants";
import { foodProducts } from "@/constants/dummy-data";

{
  /*
   * This list should be personalized
   * - list 1: suggested list based on frequent used food products (simple recommendation) or just recent used
   * - list 2: A list of saved recipes or perhaps a recommended list
   * - list 3: Saved food products and
   */
}

const FoodProductPreviewList = () => {
  return (
    <View>
      <Text className="text-gray ml-2 mb-5">Suggested</Text>
      {foodProducts.map((product) => (
        <View
          key={product.id}
          className="flex-row items-center justify-between bg-black-200 p-4 rounded-xl mb-2"
        >
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
