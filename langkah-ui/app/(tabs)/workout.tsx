import Button from "@/components/actions/button";
import { SafeAreaView, ScrollView, View } from "react-native";

const Workout = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView></ScrollView>
      <View className="border-t border-black-200 px-4 pt-2">
        <Button title="Create program" />
      </View>
    </SafeAreaView>
  );
};

export default Workout;
