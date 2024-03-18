import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import NavigationsStatusBar from "./NavigationsStatusBar";
import StateDefault from "./StateDefault";

const ContentContainer2 = () => {
  return (
    <View>
      <NavigationsStatusBar
        battery={require("../assets/battery1.png")}
        navigationsStatusBarPosition="unset"
      />
      <StateDefault stateDefaultPosition="unset" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ContentContainer2;
