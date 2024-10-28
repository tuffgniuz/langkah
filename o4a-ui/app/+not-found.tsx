import { Link, router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "@/components/actions/button";

const NotFoundScreen = () => {
  return (
    <SafeAreaView className="bg-primary">
      <View>
        <Text>Oops! Seems we couldn't find what you were looking for.</Text>
        <Button title="Go back" handlePress={() => router.back()} />
      </View>
    </SafeAreaView>
  );
};

export default NotFoundScreen;
