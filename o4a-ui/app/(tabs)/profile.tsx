import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";

import { images } from "../../constants";

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full flex justify-center items-center mt-20">
        <Image
          source={images.dummyAvatar}
          className="w-32 h-32 rounded-full mb-5"
        />
        <Text className="text-white text-2xl font-rmedium">Kakarot</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
