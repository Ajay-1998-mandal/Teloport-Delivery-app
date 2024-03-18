import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontFamily, FontSize, StyleVariable } from "../GlobalStyles";

export type NavigationsStatusBarType = {
  battery?: ImageSourcePropType;

  /** Style props */
  navigationsStatusBarPosition?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavigationsStatusBar = ({
  battery,
  navigationsStatusBarPosition,
}: NavigationsStatusBarType) => {
  const navigationsStatusBarStyle = useMemo(() => {
    return {
      ...getStyleValue("position", navigationsStatusBarPosition),
    };
  }, [navigationsStatusBarPosition]);

  return (
    <View
      style={[
        styles.navigationsstatusBar,
        styles.receptionParentFlexBox,
        navigationsStatusBarStyle,
      ]}
    >
      <View style={styles.receptionParentFlexBox}>
        <Image
          style={styles.receptionIcon}
          contentFit="cover"
          source={require("../assets/reception.png")}
        />
        <Text style={styles.provider}>{`StaySafe `}</Text>
        <Image
          style={[styles.wifiIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
      </View>
      <View style={styles.providerParent}>
        <Text style={styles.provider1}>100%</Text>
        <Image
          style={[styles.batteryIcon, styles.iconLayout]}
          contentFit="cover"
          source={battery}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  receptionParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 12,
    marginLeft: 4,
  },
  receptionIcon: {
    height: 10,
    width: 17,
  },
  provider: {
    width: 52,
    marginLeft: 4,
    textAlign: "left",
    color: Color.textTextWhite,
    fontFamily: FontFamily.sFProText,
    fontWeight: "500",
    lineHeight: 12,
    letterSpacing: -0.1,
    fontSize: FontSize.interBold12_size,
  },
  wifiIcon: {
    width: 17,
  },
  provider1: {
    width: 34,
    textAlign: "left",
    color: Color.textTextWhite,
    fontFamily: FontFamily.sFProText,
    fontWeight: "500",
    lineHeight: 12,
    letterSpacing: -0.1,
    fontSize: FontSize.interBold12_size,
  },
  batteryIcon: {
    width: 27,
  },
  providerParent: {
    flexDirection: "row",
  },
  navigationsstatusBar: {
    backgroundColor: Color.containerContainerBlack,
    width: 431,
    justifyContent: "space-between",
    padding: StyleVariable.spacingSpacing16,
  },
});

export default NavigationsStatusBar;
