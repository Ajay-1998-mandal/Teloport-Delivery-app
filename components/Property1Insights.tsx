import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, StyleVariable } from "../GlobalStyles";

export type Property1InsightsType = {
  title?: string;
  caption?: string;

  /** Style props */
  property1InsightsPosition?: string;
  property1InsightsWidth?: number | string;
  property1InsightsHeight?: number | string;
  property1InsightsBorderRadius?: number;
  property1InsightsBackgroundColor?: string;
  property1InsightsPadding?: number | string;
  property1InsightsMarginLeft?: number | string;
  titleColor?: string;
  captionColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Insights = ({
  title,
  caption,
  property1InsightsPosition,
  property1InsightsWidth,
  property1InsightsHeight,
  property1InsightsBorderRadius,
  property1InsightsBackgroundColor,
  property1InsightsPadding,
  property1InsightsMarginLeft,
  titleColor,
  captionColor,
}: Property1InsightsType) => {
  const property1InsightsStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1InsightsPosition),
      ...getStyleValue("width", property1InsightsWidth),
      ...getStyleValue("height", property1InsightsHeight),
      ...getStyleValue("borderRadius", property1InsightsBorderRadius),
      ...getStyleValue("backgroundColor", property1InsightsBackgroundColor),
      ...getStyleValue("padding", property1InsightsPadding),
      ...getStyleValue("marginLeft", property1InsightsMarginLeft),
    };
  }, [
    property1InsightsPosition,
    property1InsightsWidth,
    property1InsightsHeight,
    property1InsightsBorderRadius,
    property1InsightsBackgroundColor,
    property1InsightsPadding,
    property1InsightsMarginLeft,
  ]);

  const titleStyle = useMemo(() => {
    return {
      ...getStyleValue("color", titleColor),
    };
  }, [titleColor]);

  const captionStyle = useMemo(() => {
    return {
      ...getStyleValue("color", captionColor),
    };
  }, [captionColor]);

  return (
    <View style={[styles.property1insights, property1InsightsStyle]}>
      <Text style={[styles.title, styles.titleTypo, titleStyle]}>{title}</Text>
      <Text style={[styles.caption, styles.titleTypo, captionStyle]}>
        {caption}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular10,
    lineHeight: 25,
    letterSpacing: -0.4,
  },
  title: {
    fontSize: FontSize.interMedium14_size,
    fontWeight: "600",
    color: Color.containerContainerGreyDark,
  },
  caption: {
    fontSize: FontSize.interBold12_size,
    color: Color.iconIconGrey,
    marginTop: 8,
  },
  property1insights: {
    borderRadius: StyleVariable.spacingSpacing16,
    backgroundColor: Color.borderBorderLimeLight,
    width: 118,
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    padding: StyleVariable.spacingSpacing24,
  },
});

export default Property1Insights;
