import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView>
      <Text>Index</Text>
      <Link href="/meals">Go to meals</Link>
    </SafeAreaView>
  );
};

export default Index;
