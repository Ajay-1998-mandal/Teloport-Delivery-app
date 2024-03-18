import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import StateDefault2 from "./StateDefault2";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

const PackageTypeSelectorContainer = () => {
  return (
    <View style={styles.blockChoosePackageType}>
      <View style={styles.blockTitle}>
        <Text style={styles.choosePackageType}>Choose package type</Text>
      </View>
      <StateDefault2
        iconsSuccess={require("../assets/iconssuccess4.png")}
        stateDefaultPosition="unset"
        stateDefaultMarginTop={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  choosePackageType: {
    fontSize: FontSize.interBold16_size,
    letterSpacing: -0.5,
    lineHeight: 25,
    fontWeight: "600",
    fontFamily: FontFamily.interRegular10,
    color: Color.iconIconGrey,
    textAlign: "left",
  },
  blockTitle: {
    flexDirection: "row",
    paddingHorizontal: StyleVariable.spacingSpacing16,
    paddingVertical: 0,
  },
  blockChoosePackageType: {
    marginTop: 48,
  },
});

export default PackageTypeSelectorContainer;
