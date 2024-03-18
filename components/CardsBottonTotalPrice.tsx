import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import StatePrimaryMedium from "./StatePrimaryMedium";
import { FontFamily, Color, FontSize, StyleVariable } from "../GlobalStyles";

export type CardsBottonTotalPriceType = {
  iconEdit?: ImageSourcePropType;
  button?: string;

  /** Style props */
  cardsBottonTotalPricePosition?: string;
  cardsBottonTotalPriceBorderTopLeftRadius?: number;
  cardsBottonTotalPriceBorderTopRightRadius?: number;
  cardsBottonTotalPricePaddingVertical?: number | string;
  cardsBottonTotalPriceMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardsBottonTotalPrice = ({
  iconEdit,
  button,
  cardsBottonTotalPricePosition,
  cardsBottonTotalPriceBorderTopLeftRadius,
  cardsBottonTotalPriceBorderTopRightRadius,
  cardsBottonTotalPricePaddingVertical,
  cardsBottonTotalPriceMarginTop,
}: CardsBottonTotalPriceType) => {
  const cardsBottonTotalPriceStyle = useMemo(() => {
    return {
      ...getStyleValue("position", cardsBottonTotalPricePosition),
      ...getStyleValue(
        "borderTopLeftRadius",
        cardsBottonTotalPriceBorderTopLeftRadius
      ),
      ...getStyleValue(
        "borderTopRightRadius",
        cardsBottonTotalPriceBorderTopRightRadius
      ),
      ...getStyleValue("paddingVertical", cardsBottonTotalPricePaddingVertical),
      ...getStyleValue("marginTop", cardsBottonTotalPriceMarginTop),
    };
  }, [
    cardsBottonTotalPricePosition,
    cardsBottonTotalPriceBorderTopLeftRadius,
    cardsBottonTotalPriceBorderTopRightRadius,
    cardsBottonTotalPricePaddingVertical,
    cardsBottonTotalPriceMarginTop,
  ]);

  return (
    <View style={[styles.cardsbottonTotalPrice, cardsBottonTotalPriceStyle]}>
      <View style={styles.frameParent}>
        <View style={styles.totalParent}>
          <Text style={[styles.total, styles.textTypo]}>Total</Text>
          <Text style={[styles.inclVat, styles.textTypo]}>(incl. VAT)</Text>
        </View>
        <Text style={[styles.text, styles.textTypo]}>$2.00</Text>
      </View>
      <StatePrimaryMedium
        iconEdit={require("../assets/iconedit1.png")}
        text="Process Next"
        showText
        showIcon={false}
        statePrimaryMediumPosition="unset"
        statePrimaryMediumBorderRadius={56}
        statePrimaryMediumBackgroundColor="#9bfe03"
        statePrimaryMediumMarginLeft={110}
        statePrimaryMediumAlignSelf="unset"
        statePrimaryMediumMarginTop="unset"
        statePrimaryMediumWidth="unset"
        statePrimaryMediumHeight={40}
        statePrimaryMediumPaddingHorizontal="unset"
        statePrimaryMediumPaddingVertical="unset"
        statePrimaryMediumFlex={1}
        statePrimaryMediumPadding={40}
        buttonColor="#3b3f34"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular10,
    lineHeight: 25,
  },
  total: {
    fontWeight: "500",
    color: Color.textTextGreyLight,
    letterSpacing: -0.4,
    fontSize: FontSize.interBold12_size,
    fontFamily: FontFamily.interRegular10,
    lineHeight: 25,
  },
  inclVat: {
    color: Color.iconIconGrey,
    marginLeft: 4,
    letterSpacing: -0.4,
    fontSize: FontSize.interBold12_size,
    fontFamily: FontFamily.interRegular10,
    lineHeight: 25,
  },
  totalParent: {
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.interBold16_size,
    letterSpacing: -0.5,
    fontWeight: "700",
    color: Color.textTextLime,
    marginTop: 8,
  },
  frameParent: {
    flex: 1,
  },
  cardsbottonTotalPrice: {
    borderTopLeftRadius: StyleVariable.spacingSpacing24,
    borderTopRightRadius: StyleVariable.spacingSpacing24,
    backgroundColor: Color.containerContainerGreyDark,
    width: 431,
    alignItems: "center",
    paddingHorizontal: StyleVariable.spacingSpacing32,
    paddingVertical: StyleVariable.spacingSpacing24,
    flexDirection: "row",
  },
});

export default CardsBottonTotalPrice;
