import { router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "@/components/actions/button";

const Index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full justify-center items-center h-full px-4">
        <Text></Text>
        <Button
          title="Continue"
          containerStyle="w-full"
          handlePress={() => router.push("/meals")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;
