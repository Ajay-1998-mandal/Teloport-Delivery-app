import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import StatePrimaryMedium from "./StatePrimaryMedium";

export type Property1DimensionType = {
  iconEdit?: ImageSourcePropType;
  iconEdit1?: ImageSourcePropType;
  iconEdit2?: ImageSourcePropType;
  iconEdit3?: ImageSourcePropType;
  iconEdit4?: ImageSourcePropType;

  /** Style props */
  property1DimensionPosition?: string;
  property1DimensionMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Dimension = ({
  iconEdit,
  iconEdit1,
  iconEdit2,
  iconEdit3,
  iconEdit4,
  property1DimensionPosition,
  property1DimensionMarginTop,
}: Property1DimensionType) => {
  const property1DimensionStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1DimensionPosition),
      ...getStyleValue("marginTop", property1DimensionMarginTop),
    };
  }, [property1DimensionPosition, property1DimensionMarginTop]);

  return (
    <View style={[styles.property1dimension, property1DimensionStyle]}>
      <StatePrimaryMedium
        iconEdit={require("../assets/iconedit.png")}
        text="10 cm"
        showText
        showIcon={false}
        statePrimaryMediumPosition="unset"
        statePrimaryMediumBackgroundColor="#202020"
        statePrimaryMediumMarginLeft="unset"
        statePrimaryMediumAlignSelf="unset"
        statePrimaryMediumMarginTop="unset"
        statePrimaryMediumWidth="unset"
        statePrimaryMediumHeight={30}
        statePrimaryMediumPaddingHorizontal="unset"
        statePrimaryMediumPaddingVertical="unset"
        statePrimaryMediumPadding="unset"
        buttonColor="#929c7e"
      />
      <StatePrimaryMedium
        iconEdit={require("../assets/iconedit.png")}
        text="20 cm"
        showText
        showIcon={false}
        statePrimaryMediumPosition="unset"
        statePrimaryMediumBorderRadius={56}
        statePrimaryMediumBackgroundColor="#202020"
        statePrimaryMediumMarginLeft={8}
        statePrimaryMediumAlignSelf="unset"
        statePrimaryMediumMarginTop="unset"
        statePrimaryMediumWidth="unset"
        statePrimaryMediumHeight={30}
        statePrimaryMediumPaddingHorizontal="unset"
        statePrimaryMediumPaddingVertical="unset"
        statePrimaryMediumPadding="unset"
        buttonColor="#929c7e"
      />
      <StatePrimaryMedium
        iconEdit={require("../assets/iconedit.png")}
        text="30 cm"
        showText
        showIcon={false}
        statePrimaryMediumPosition="unset"
        statePrimaryMediumBorderRadius={56}
        statePrimaryMediumBackgroundColor="#202020"
        statePrimaryMediumMarginLeft={8}
        statePrimaryMediumAlignSelf="unset"
        statePrimaryMediumMarginTop="unset"
        statePrimaryMediumWidth="unset"
        statePrimaryMediumHeight={30}
        statePrimaryMediumPaddingHorizontal="unset"
        statePrimaryMediumPaddingVertical="unset"
        statePrimaryMediumPadding="unset"
        buttonColor="#929c7e"
      />
      <StatePrimaryMedium
        iconEdit={require("../assets/iconedit.png")}
        text="40 cm"
        showText
        showIcon={false}
        statePrimaryMediumPosition="unset"
        statePrimaryMediumBorderRadius={56}
        statePrimaryMediumBackgroundColor="#202020"
        statePrimaryMediumMarginLeft={8}
        statePrimaryMediumAlignSelf="unset"
        statePrimaryMediumMarginTop="unset"
        statePrimaryMediumWidth="unset"
        statePrimaryMediumHeight={30}
        statePrimaryMediumPaddingHorizontal="unset"
        statePrimaryMediumPaddingVertical="unset"
        statePrimaryMediumPadding="unset"
        buttonColor="#929c7e"
      />
      <StatePrimaryMedium
        iconEdit={require("../assets/iconedit.png")}
        text="50 cm"
        showText
        showIcon={false}
        statePrimaryMediumPosition="unset"
        statePrimaryMediumBorderRadius={56}
        statePrimaryMediumBackgroundColor="#202020"
        statePrimaryMediumMarginLeft={8}
        statePrimaryMediumAlignSelf="unset"
        statePrimaryMediumMarginTop="unset"
        statePrimaryMediumWidth="unset"
        statePrimaryMediumHeight={30}
        statePrimaryMediumPaddingHorizontal="unset"
        statePrimaryMediumPaddingVertical="unset"
        statePrimaryMediumPadding="unset"
        buttonColor="#929c7e"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  property1dimension: {
    flexDirection: "row",
  },
});

export default Property1Dimension;
