import { FC } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

import { icons } from "@/constants";

const SearchFood: FC<{ clsName?: string }> = ({ clsName }) => {
  return (
    <View
      className={`flex-row items-center justify-between bg-black-200 p-4 rounded-xl ${clsName}`}
    >
      <View className="flex-row gap-2">
        <Image source={icons.search} tintColor="#9da0a6" />
        <TextInput
          placeholder="Search for food..."
          placeholderTextColor="#9da0a6"
          className="text-gray"
        />
      </View>
      <TouchableOpacity>
        <Image source={icons.barcode} tintColor="#9da0a6" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchFood;
