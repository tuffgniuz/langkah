import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Link href="/meals">Go to Meals</Link>
    </SafeAreaView>
  );
};

export default Home;
