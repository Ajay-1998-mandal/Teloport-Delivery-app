import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { StyleVariable, Color } from "../GlobalStyles";

export type StateDefault3Type = {
  isolatedCardboardBoxTrans?: ImageSourcePropType;
  iconsCircle?: ImageSourcePropType;

  /** Style props */
  stateDefaultPosition?: string;
  stateDefaultBorderRadius?: number;
  stateDefaultBackgroundColor?: string;
  stateDefaultWidth?: number | string;
  stateDefaultPadding?: number | string;
  stateDefaultMarginLeft?: number | string;
  frameViewPosition?: string;
  iconsCircleTop?: number | string;
  iconsCircleLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateDefault3 = ({
  isolatedCardboardBoxTrans,
  iconsCircle,
  stateDefaultPosition,
  stateDefaultBorderRadius,
  stateDefaultBackgroundColor,
  stateDefaultWidth,
  stateDefaultPadding,
  stateDefaultMarginLeft,
  frameViewPosition,
  iconsCircleTop,
  iconsCircleLeft,
}: StateDefault3Type) => {
  const stateDefault2Style = useMemo(() => {
    return {
      ...getStyleValue("position", stateDefaultPosition),
      ...getStyleValue("borderRadius", stateDefaultBorderRadius),
      ...getStyleValue("backgroundColor", stateDefaultBackgroundColor),
      ...getStyleValue("width", stateDefaultWidth),
      ...getStyleValue("padding", stateDefaultPadding),
      ...getStyleValue("marginLeft", stateDefaultMarginLeft),
    };
  }, [
    stateDefaultPosition,
    stateDefaultBorderRadius,
    stateDefaultBackgroundColor,
    stateDefaultWidth,
    stateDefaultPadding,
    stateDefaultMarginLeft,
  ]);

  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("position", frameViewPosition),
    };
  }, [frameViewPosition]);

  const iconsCircleStyle = useMemo(() => {
    return {
      ...getStyleValue("top", iconsCircleTop),
      ...getStyleValue("left", iconsCircleLeft),
    };
  }, [iconsCircleTop, iconsCircleLeft]);

  return (
    <View style={[styles.statedefault, stateDefault2Style]}>
      <View style={[styles.isolatedCardboardBoxTransfoParent, frameView1Style]}>
        <Image
          style={styles.isolatedCardboardBoxTransfoIcon}
          contentFit="cover"
          source={isolatedCardboardBoxTrans}
        />
        <Image
          style={[styles.iconscircle, iconsCircleStyle]}
          contentFit="cover"
          source={iconsCircle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  isolatedCardboardBoxTransfoIcon: {
    width: 50,
    height: 46,
    zIndex: 0,
  },
  iconscircle: {
    position: "absolute",
    top: -15,
    left: 60,
    width: 16,
    height: 16,
    overflow: "hidden",
    zIndex: 1,
  },
  isolatedCardboardBoxTransfoParent: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  statedefault: {
    borderRadius: StyleVariable.spacingSpacing16,
    backgroundColor: Color.containerContainerGreyDark,
    width: 126,
    alignItems: "center",
    justifyContent: "center",
    padding: StyleVariable.spacingSpacing24,
  },
});

export default StateDefault3;
