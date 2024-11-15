import { router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "@/components/actions/button";

const Index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full justify-center items-center h-full px-4">
        <View className="mb-5">
          <Text className="text-center text-white text-4xl font-rmedium mb-5">
            Your Journey Starts Here
          </Text>
          <Text className="text-center text-gray">
            Train hard, nourish your body, and rise to become the strongest
            version of yourself!
          </Text>
        </View>
        <Button
          title="Continue"
          containerStyle="w-full"
          handlePress={() => router.push("/(nutrition)")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;
