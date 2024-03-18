import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import StateType from "./StateType";
import { StyleVariable, Color } from "../GlobalStyles";

export type CardsMenuTypeComponentType = {
  iconsSupportShape?: ImageSourcePropType;
  iconsSettingShape?: ImageSourcePropType;

  /** Style props */
  cardsMenuTypeComponentPosition?: string;
  cardsMenuTypeComponentBorderRadius?: number;
  cardsMenuTypeComponentPaddingHorizontal?: number | string;
  cardsMenuTypeComponentPaddingVertical?: number | string;
  cardsMenuTypeComponentMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardsMenuTypeComponent = ({
  iconsSupportShape,
  iconsSettingShape,
  cardsMenuTypeComponentPosition,
  cardsMenuTypeComponentBorderRadius,
  cardsMenuTypeComponentPaddingHorizontal,
  cardsMenuTypeComponentPaddingVertical,
  cardsMenuTypeComponentMarginLeft,
}: CardsMenuTypeComponentType) => {
  const cardsMenuTypeComponentStyle = useMemo(() => {
    return {
      ...getStyleValue("position", cardsMenuTypeComponentPosition),
      ...getStyleValue("borderRadius", cardsMenuTypeComponentBorderRadius),
      ...getStyleValue(
        "paddingHorizontal",
        cardsMenuTypeComponentPaddingHorizontal
      ),
      ...getStyleValue(
        "paddingVertical",
        cardsMenuTypeComponentPaddingVertical
      ),
      ...getStyleValue("marginLeft", cardsMenuTypeComponentMarginLeft),
    };
  }, [
    cardsMenuTypeComponentPosition,
    cardsMenuTypeComponentBorderRadius,
    cardsMenuTypeComponentPaddingHorizontal,
    cardsMenuTypeComponentPaddingVertical,
    cardsMenuTypeComponentMarginLeft,
  ]);

  return (
    <View style={[styles.cardsmenuTypeComponent, cardsMenuTypeComponentStyle]}>
      <StateType
        iconsSettingShape={require("../assets/iconssupport-shape2.png")}
        deliveries="Support"
        stateType2Position="unset"
        stateType2FlexDirection="row"
        stateType2MarginLeft="unset"
        stateType2MarginTop="unset"
        stateType2BackgroundColor="unset"
        stateType2Width="unset"
        stateType2Padding="unset"
        iconsSettingShapeWidth={24}
        iconsSettingShapeHeight={24}
        iconsSettingShapeOverflow="hidden"
        deliveriesMarginLeft={8}
        deliveriesMarginTop="unset"
        deliveriesColor="#909090"
      />
      <StateType
        iconsSettingShape={require("../assets/iconssetting-shape1.png")}
        deliveries="Setting"
        stateType2Position="unset"
        stateType2FlexDirection="row"
        stateType2MarginLeft="unset"
        stateType2MarginTop={16}
        stateType2BackgroundColor="unset"
        stateType2Width="unset"
        stateType2Padding="unset"
        iconsSettingShapeWidth={24}
        iconsSettingShapeHeight={24}
        iconsSettingShapeOverflow="hidden"
        deliveriesMarginLeft={8}
        deliveriesMarginTop="unset"
        deliveriesColor="#909090"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardsmenuTypeComponent: {
    borderRadius: StyleVariable.spacingSpacing16,
    backgroundColor: Color.containerContainerLimeDark,
    paddingHorizontal: StyleVariable.spacingSpacing24,
    paddingVertical: StyleVariable.spacingSpacing16,
  },
});

export default CardsMenuTypeComponent;
