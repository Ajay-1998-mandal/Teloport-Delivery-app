import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import NavigationsStatusBar from "./NavigationsStatusBar";
import StateDefault4 from "./StateDefault4";

const ContentContainer = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.blockTopHeader}
      onPress={() => navigation.navigate("Account")}
    >
      <NavigationsStatusBar
        battery={require("../assets/battery1.png")}
        navigationsStatusBarPosition="unset"
      />
      <StateDefault4
        iconsProfilePhoto={require("../assets/iconsprofile-photo3.png")}
        iconsPin={require("../assets/iconspin1.png")}
        iconschevronDown={require("../assets/iconschevrondown1.png")}
        iconsHelp={require("../assets/iconshelp2.png")}
        iconsNotificationBel={require("../assets/iconsnotification-bel2.png")}
        stateDefaultPosition="unset"
        stateDefaultMarginTop={8}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  blockTopHeader: {
    alignItems: "center",
  },
});

export default ContentContainer;
