import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { images } from "../../constants";
import ProfileMetric from "@/components/data-display/profile-metric";

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full flex justify-center items-center mt-20 px-4">
        <Image
          source={images.dummyAvatar}
          className="w-32 h-32 rounded-full mb-5"
        />
        <Text className="text-white text-2xl font-rmedium mb-5">Kakarot</Text>
        <View className="flex-row mb-5">
          <ProfileMetric label="Weight" value="100 kg" />
          <ProfileMetric label="Goal" value="80 kg" />
          <ProfileMetric label="Daily kcal" value="2400 kcal" />
        </View>
        <TouchableOpacity className="bg-secondary rounded-xl p-4 w-full">
          <Text className="text-white text-center">Weigh in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
