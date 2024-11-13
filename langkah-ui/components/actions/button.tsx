import { FC } from "react";
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";

const Button: FC<{
  title: string;
  containerStyle?: string;
  isLoading?: boolean;
  handlePress?: (event: GestureResponderEvent) => void | undefined;
}> = ({ title, containerStyle, isLoading, handlePress }) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      activeOpacity={0.7}
      onPress={handlePress}
      className={`bg-secondary p-4 rounded-xl justify-center items-center ${containerStyle}`}
    >
      <Text className="text-white font-rmedium">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
