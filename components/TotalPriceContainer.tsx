import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import StatePrimaryMedium from "./StatePrimaryMedium";
import { FontFamily, Color, FontSize, StyleVariable } from "../GlobalStyles";

export type TotalPriceContainerType = {
  uniqueIdText?: ImageSourcePropType;
  buttonText?: string;
};

const TotalPriceContainer = ({
  uniqueIdText,
  buttonText,
}: TotalPriceContainerType) => {
  return (
    <View style={styles.cardsbottonTotalPrice}>
      <View style={styles.frameParent}>
        <View style={styles.totalParent}>
          <Text style={[styles.total, styles.textTypo]}>Total</Text>
          <Text style={[styles.inclVat, styles.textTypo]}>(incl. VAT)</Text>
        </View>
        <Text style={[styles.text, styles.textTypo]}>$2.00</Text>
      </View>
      <StatePrimaryMedium
        iconEdit={require("../assets/iconedit1.png")}
        text="Submit"
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
    marginTop: 48,
    flexDirection: "row",
  },
});

export default TotalPriceContainer;
