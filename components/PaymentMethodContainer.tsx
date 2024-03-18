import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import CardsPayment from "./CardsPayment";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

const PaymentMethodContainer = () => {
  return (
    <View style={styles.blockPaymentMethod}>
      <View style={styles.blockTitle}>
        <Text style={styles.paymentMethod}>Payment method</Text>
      </View>
      <CardsPayment
        iconsCash={require("../assets/iconscash1.png")}
        iconsSuccess={require("../assets/iconssuccess5.png")}
        iconsVisaCard={require("../assets/iconsvisa-card1.png")}
        iconsCircle={require("../assets/iconscircle4.png")}
        iconsPayPal={require("../assets/iconspaypal1.png")}
        iconsCircle1={require("../assets/iconscircle4.png")}
        cardsPaymentPosition="unset"
        cardsPaymentBorderRadius={16}
        cardsPaymentPaddingHorizontal="unset"
        cardsPaymentPaddingVertical="unset"
        cardsPaymentWidth={398}
        cardsPaymentMarginTop={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paymentMethod: {
    fontSize: FontSize.interBold16_size,
    letterSpacing: -0.5,
    lineHeight: 25,
    fontWeight: "600",
    fontFamily: FontFamily.interRegular10,
    color: Color.iconIconGrey,
    textAlign: "left",
  },
  blockTitle: {
    flexDirection: "row",
    paddingHorizontal: StyleVariable.spacingSpacing16,
    paddingVertical: 0,
  },
  blockPaymentMethod: {
    marginTop: 48,
  },
});

export default PaymentMethodContainer;
