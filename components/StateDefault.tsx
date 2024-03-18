import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

export type StateDefaultType = {
  /** Style props */
  stateDefaultPosition?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateDefault = ({ stateDefaultPosition }: StateDefaultType) => {
  const stateDefault5Style = useMemo(() => {
    return {
      ...getStyleValue("position", stateDefaultPosition),
    };
  }, [stateDefaultPosition]);

  return (
    <View style={[styles.statedefault, stateDefault5Style]}>
      <Image
        style={styles.arrowLeft1Icon}
        contentFit="cover"
        source={require("../assets/arrowleft-1.png")}
      />
      <Text style={styles.back}>Back</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowLeft1Icon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  back: {
    fontSize: FontSize.interMedium14_size,
    letterSpacing: -0.4,
    lineHeight: 25,
    fontWeight: "600",
    fontFamily: FontFamily.interRegular10,
    color: Color.textTextGreyLight,
    textAlign: "left",
    marginLeft: 8,
  },
  statedefault: {
    backgroundColor: Color.containerContainerBlack,
    width: 431,
    flexDirection: "row",
    alignItems: "center",
    padding: StyleVariable.spacingSpacing16,
  },
});

export default StateDefault;
