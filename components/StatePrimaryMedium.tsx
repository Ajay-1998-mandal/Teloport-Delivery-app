import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

export type StatePrimaryMediumType = {
  iconEdit?: ImageSourcePropType;
  text?: string;
  showText?: boolean;
  showIcon?: boolean;

  /** Style props */
  statePrimaryMediumPosition?: string;
  statePrimaryMediumBorderRadius?: number;
  statePrimaryMediumBackgroundColor?: string;
  statePrimaryMediumMarginLeft?: number | string;
  statePrimaryMediumAlignSelf?: string;
  statePrimaryMediumMarginTop?: number | string;
  statePrimaryMediumWidth?: number | string;
  statePrimaryMediumHeight?: number | string;
  statePrimaryMediumPaddingHorizontal?: number | string;
  statePrimaryMediumPaddingVertical?: number | string;
  statePrimaryMediumFlex?: number;
  statePrimaryMediumPadding?: number | string;
  buttonColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatePrimaryMedium = ({
  iconEdit,
  text = "Button",
  showText = true,
  showIcon = true,
  statePrimaryMediumPosition,
  statePrimaryMediumBorderRadius,
  statePrimaryMediumBackgroundColor,
  statePrimaryMediumMarginLeft,
  statePrimaryMediumAlignSelf,
  statePrimaryMediumMarginTop,
  statePrimaryMediumWidth,
  statePrimaryMediumHeight,
  statePrimaryMediumPaddingHorizontal,
  statePrimaryMediumPaddingVertical,
  statePrimaryMediumFlex,
  statePrimaryMediumPadding,
  buttonColor,
}: StatePrimaryMediumType) => {
  const statePrimaryMediumStyle = useMemo(() => {
    return {
      ...getStyleValue("position", statePrimaryMediumPosition),
      ...getStyleValue("borderRadius", statePrimaryMediumBorderRadius),
      ...getStyleValue("backgroundColor", statePrimaryMediumBackgroundColor),
      ...getStyleValue("marginLeft", statePrimaryMediumMarginLeft),
      ...getStyleValue("alignSelf", statePrimaryMediumAlignSelf),
      ...getStyleValue("marginTop", statePrimaryMediumMarginTop),
      ...getStyleValue("width", statePrimaryMediumWidth),
      ...getStyleValue("height", statePrimaryMediumHeight),
      ...getStyleValue(
        "paddingHorizontal",
        statePrimaryMediumPaddingHorizontal
      ),
      ...getStyleValue("paddingVertical", statePrimaryMediumPaddingVertical),
      ...getStyleValue("flex", statePrimaryMediumFlex),
      ...getStyleValue("padding", statePrimaryMediumPadding),
    };
  }, [
    statePrimaryMediumPosition,
    statePrimaryMediumBorderRadius,
    statePrimaryMediumBackgroundColor,
    statePrimaryMediumMarginLeft,
    statePrimaryMediumAlignSelf,
    statePrimaryMediumMarginTop,
    statePrimaryMediumWidth,
    statePrimaryMediumHeight,
    statePrimaryMediumPaddingHorizontal,
    statePrimaryMediumPaddingVertical,
    statePrimaryMediumFlex,
    statePrimaryMediumPadding,
  ]);

  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("color", buttonColor),
    };
  }, [buttonColor]);

  return (
    <View style={[styles.stateprimaryMedium, statePrimaryMediumStyle]}>
      {showIcon && (
        <Image style={styles.iconedit} contentFit="cover" source={iconEdit} />
      )}
      {showText && <Text style={[styles.button, buttonStyle]}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  iconedit: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  button: {
    fontSize: FontSize.interBold12_size,
    letterSpacing: -0.4,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: FontFamily.interRegular10,
    color: Color.containerContainerLimeDark,
    textAlign: "center",
    marginLeft: 5,
  },
  stateprimaryMedium: {
    borderRadius: StyleVariable.spacingSpacing161,
    backgroundColor: Color.textTextLime,
    height: StyleVariable.spacingSpacing401,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: StyleVariable.spacingSpacing161,
    paddingVertical: StyleVariable.spacingSpacing401,
  },
});

export default StatePrimaryMedium;
