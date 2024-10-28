import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SearchFood from "@/components/actions/search-food";
import { icons } from "@/constants";
import FoodProductPreviewList from "@/components/data-display/food-product-preview-list";

// This screen should log a meal
// - choose food product or a recipe
// - the meal should be given a title
//   because the app logs the meal by time, not like the common breakfast, lunch, diner and snack approach

const CreateMealScreen = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="p-4">
        <View className="mb-5">
          <Text className="text-gray text-xl font-semibold">Meal title</Text>
        </View>
        <SearchFood clsName="mb-5" />
      </View>
      <View className="flex-row justify-between mb-5">
        <View className="flex-row items-center gap-2 pb-2 px-4">
          <Image source={icons.carrot} />
          <Text className="text-white text-lg">Food</Text>
        </View>
        <View className="pb-2 px-4">
          <Text className="text-white text-lg">Recipes</Text>
        </View>
        <View className="pb-2 px-4">
          <Text className="text-white text-lg">Favorites</Text>
        </View>
      </View>
      <ScrollView className="px-4">
        {/* here a list of recently selected items should be renderen so initially empty */}
        <FoodProductPreviewList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateMealScreen;
