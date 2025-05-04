import React from "react";
import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-indigo-600">Mai Mai</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;
