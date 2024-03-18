import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  FontSize,
  FontFamily,
  Color,
  StyleVariable,
  Padding,
} from "../GlobalStyles";

export type StageTextFieldRadiusType = {
  textfield?: string;

  /** Style props */
  stageTextFieldRadiusPosition?: string;
  stageTextFieldRadiusBorderRadius?: number;
  stageTextFieldRadiusBackgroundColor?: string;
  stageTextFieldRadiusAlignSelf?: string;
  stageTextFieldRadiusMarginTop?: number | string;
  stageTextFieldRadiusHeight?: number | string;
  stageTextFieldRadiusPaddingVertical?: number | string;
  textfieldColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StageTextFieldRadius = ({
  textfield,
  stageTextFieldRadiusPosition,
  stageTextFieldRadiusBorderRadius,
  stageTextFieldRadiusBackgroundColor,
  stageTextFieldRadiusAlignSelf,
  stageTextFieldRadiusMarginTop,
  stageTextFieldRadiusHeight,
  stageTextFieldRadiusPaddingVertical,
  textfieldColor,
}: StageTextFieldRadiusType) => {
  const stageTextFieldRadiusStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stageTextFieldRadiusPosition),
      ...getStyleValue("borderRadius", stageTextFieldRadiusBorderRadius),
      ...getStyleValue("backgroundColor", stageTextFieldRadiusBackgroundColor),
      ...getStyleValue("alignSelf", stageTextFieldRadiusAlignSelf),
      ...getStyleValue("marginTop", stageTextFieldRadiusMarginTop),
      ...getStyleValue("height", stageTextFieldRadiusHeight),
      ...getStyleValue("paddingVertical", stageTextFieldRadiusPaddingVertical),
    };
  }, [
    stageTextFieldRadiusPosition,
    stageTextFieldRadiusBorderRadius,
    stageTextFieldRadiusBackgroundColor,
    stageTextFieldRadiusAlignSelf,
    stageTextFieldRadiusMarginTop,
    stageTextFieldRadiusHeight,
    stageTextFieldRadiusPaddingVertical,
  ]);

  const textfieldStyle = useMemo(() => {
    return {
      ...getStyleValue("color", textfieldColor),
    };
  }, [textfieldColor]);

  return (
    <View
      style={[
        styles.stagetextFieldRadius,
        styles.textfieldWrapperFlexBox,
        stageTextFieldRadiusStyle,
      ]}
    >
      <View style={styles.textfieldWrapperFlexBox}>
        <Text style={[styles.textfield, textfieldStyle]}>{textfield}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textfieldWrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textfield: {
    fontSize: FontSize.interBold12_size,
    letterSpacing: -0.4,
    lineHeight: 25,
    fontFamily: FontFamily.interRegular10,
    color: Color.iconIconGrey,
    textAlign: "left",
  },
  stagetextFieldRadius: {
    borderRadius: StyleVariable.spacingSpacing16,
    backgroundColor: Color.textfieldTextfieldLightGrey,
    height: 48,
    paddingHorizontal: StyleVariable.spacingSpacing241,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
  },
});

export default StageTextFieldRadius;
