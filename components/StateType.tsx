import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type StateTypeType = {
  iconsSettingShape?: ImageSourcePropType;
  deliveries?: string;

  /** Style props */
  stateType2Position?: string;
  stateType2FlexDirection?: string;
  stateType2Flex?: number;
  stateType2MarginLeft?: number | string;
  stateType2MarginTop?: number | string;
  stateType2BorderRadius?: number;
  stateType2BackgroundColor?: string;
  stateType2Width?: number | string;
  stateType2Padding?: number | string;
  iconsSettingShapeWidth?: number | string;
  iconsSettingShapeHeight?: number | string;
  iconsSettingShapeOverflow?: string;
  deliveriesMarginLeft?: number | string;
  deliveriesMarginTop?: number | string;
  deliveriesColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateType = ({
  iconsSettingShape,
  deliveries,
  stateType2Position,
  stateType2FlexDirection,
  stateType2Flex,
  stateType2MarginLeft,
  stateType2MarginTop,
  stateType2BorderRadius,
  stateType2BackgroundColor,
  stateType2Width,
  stateType2Padding,
  iconsSettingShapeWidth,
  iconsSettingShapeHeight,
  iconsSettingShapeOverflow,
  deliveriesMarginLeft,
  deliveriesMarginTop,
  deliveriesColor,
}: StateTypeType) => {
  const stateType2Style = useMemo(() => {
    return {
      ...getStyleValue("position", stateType2Position),
      ...getStyleValue("flexDirection", stateType2FlexDirection),
      ...getStyleValue("flex", stateType2Flex),
      ...getStyleValue("marginLeft", stateType2MarginLeft),
      ...getStyleValue("marginTop", stateType2MarginTop),
      ...getStyleValue("borderRadius", stateType2BorderRadius),
      ...getStyleValue("backgroundColor", stateType2BackgroundColor),
      ...getStyleValue("width", stateType2Width),
      ...getStyleValue("padding", stateType2Padding),
    };
  }, [
    stateType2Position,
    stateType2FlexDirection,
    stateType2Flex,
    stateType2MarginLeft,
    stateType2MarginTop,
    stateType2BorderRadius,
    stateType2BackgroundColor,
    stateType2Width,
    stateType2Padding,
  ]);

  const iconsSettingShapeStyle = useMemo(() => {
    return {
      ...getStyleValue("width", iconsSettingShapeWidth),
      ...getStyleValue("height", iconsSettingShapeHeight),
      ...getStyleValue("overflow", iconsSettingShapeOverflow),
    };
  }, [
    iconsSettingShapeWidth,
    iconsSettingShapeHeight,
    iconsSettingShapeOverflow,
  ]);

  const deliveriesStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", deliveriesMarginLeft),
      ...getStyleValue("marginTop", deliveriesMarginTop),
      ...getStyleValue("color", deliveriesColor),
    };
  }, [deliveriesMarginLeft, deliveriesMarginTop, deliveriesColor]);

  return (
    <View style={[styles.statetype2, stateType2Style]}>
      <Image
        style={[styles.iconssettingShape, iconsSettingShapeStyle]}
        contentFit="cover"
        source={iconsSettingShape}
      />
      <Text style={[styles.deliveries, deliveriesStyle]}>{deliveries}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconssettingShape: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  deliveries: {
    fontSize: FontSize.interBold12_size,
    letterSpacing: -0.4,
    lineHeight: 25,
    fontFamily: FontFamily.interRegular10,
    color: Color.iconIconGrey,
    textAlign: "center",
    marginLeft: 8,
  },
  statetype2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default StateType;
