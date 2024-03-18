import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import Property1PaymentComponent from "./Property1PaymentComponent";
import { StyleVariable, Color } from "../GlobalStyles";

export type CardsPaymentType = {
  iconsCash?: ImageSourcePropType;
  iconsSuccess?: ImageSourcePropType;
  iconsVisaCard?: ImageSourcePropType;
  iconsCircle?: ImageSourcePropType;
  iconsPayPal?: ImageSourcePropType;
  iconsCircle1?: ImageSourcePropType;

  /** Style props */
  cardsPaymentPosition?: string;
  cardsPaymentBorderRadius?: number;
  cardsPaymentPaddingHorizontal?: number | string;
  cardsPaymentPaddingVertical?: number | string;
  cardsPaymentWidth?: number | string;
  cardsPaymentMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardsPayment = ({
  iconsCash,
  iconsSuccess,
  iconsVisaCard,
  iconsCircle,
  iconsPayPal,
  iconsCircle1,
  cardsPaymentPosition,
  cardsPaymentBorderRadius,
  cardsPaymentPaddingHorizontal,
  cardsPaymentPaddingVertical,
  cardsPaymentWidth,
  cardsPaymentMarginTop,
}: CardsPaymentType) => {
  const cardsPaymentStyle = useMemo(() => {
    return {
      ...getStyleValue("position", cardsPaymentPosition),
      ...getStyleValue("borderRadius", cardsPaymentBorderRadius),
      ...getStyleValue("paddingHorizontal", cardsPaymentPaddingHorizontal),
      ...getStyleValue("paddingVertical", cardsPaymentPaddingVertical),
      ...getStyleValue("width", cardsPaymentWidth),
      ...getStyleValue("marginTop", cardsPaymentMarginTop),
    };
  }, [
    cardsPaymentPosition,
    cardsPaymentBorderRadius,
    cardsPaymentPaddingHorizontal,
    cardsPaymentPaddingVertical,
    cardsPaymentWidth,
    cardsPaymentMarginTop,
  ]);

  return (
    <View style={[styles.cardspayment, cardsPaymentStyle]}>
      <Property1PaymentComponent
        iconsIconDarkGrey={require("../assets/iconscash.png")}
        caseOnDelivery="Case on Delivery"
        iconsSuccess={require("../assets/iconssuccess2.png")}
        property1PaymentComponentPosition="unset"
        property1PaymentComponentMarginTop="unset"
      />
      <Property1PaymentComponent
        iconsIconDarkGrey={require("../assets/iconsvisa-card.png")}
        caseOnDelivery="Visa/Mastercard/JCB"
        iconsSuccess={require("../assets/iconscircle2.png")}
        property1PaymentComponentPosition="unset"
        property1PaymentComponentMarginTop={16}
      />
      <Property1PaymentComponent
        iconsIconDarkGrey={require("../assets/iconspaypal.png")}
        caseOnDelivery="PayPal"
        iconsSuccess={require("../assets/iconscircle2.png")}
        property1PaymentComponentPosition="unset"
        property1PaymentComponentMarginTop={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardspayment: {
    borderRadius: StyleVariable.spacingSpacing16,
    backgroundColor: Color.containerContainerGreyDark,
    width: 398,
    paddingHorizontal: StyleVariable.spacingSpacing16,
    paddingVertical: StyleVariable.spacingSpacing24,
  },
});

export default CardsPayment;
