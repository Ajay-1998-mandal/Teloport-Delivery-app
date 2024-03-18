import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import NavigationsStatusBar from "./NavigationsStatusBar";
import StateLogoNavBar from "./StateLogoNavBar";

const SectionContainer = () => {
  return (
    <View style={styles.blockTopHeader}>
      <NavigationsStatusBar
        battery={require("../assets/battery1.png")}
        navigationsStatusBarPosition="unset"
      />
      <StateLogoNavBar
        group={require("../assets/group2.png")}
        iconsHelp={require("../assets/iconshelp3.png")}
        iconsNotificationBel={require("../assets/iconsnotification-bel3.png")}
        stateLogoNavBarPosition="unset"
        stateLogoNavBarMarginTop={8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  blockTopHeader: {
    alignItems: "center",
  },
});

export default SectionContainer;
