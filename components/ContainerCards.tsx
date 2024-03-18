import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import Property1Default from "./Property1Default";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

export type ContainerCardsType = {
  iconId?: ImageSourcePropType;
  menuItemText?: string;
  iconIdentifier?: ImageSourcePropType;
  menuOptionIdentifier?: string;
  menuItemIconId?: ImageSourcePropType;
  menuItemLabel?: string;
  menuItemCode?: ImageSourcePropType;
  sectionTitle?: string;
  iconIdentifierText?: ImageSourcePropType;
  menuItemIdentifier?: string;
  showFrameView?: boolean;
  frameViewVisible?: boolean;
  frameViewVisible1?: boolean;
  frameViewVisible2?: boolean;

  /** Style props */
  propPadding?: number | string;
  propPaddingHorizontal?: number | string;
  propPaddingVertical?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerCards = ({
  iconId,
  menuItemText,
  iconIdentifier,
  menuOptionIdentifier,
  menuItemIconId,
  menuItemLabel,
  menuItemCode,
  sectionTitle,
  iconIdentifierText,
  menuItemIdentifier,
  showFrameView,
  frameViewVisible,
  frameViewVisible1,
  frameViewVisible2,
  propPadding,
  propPaddingHorizontal,
  propPaddingVertical,
}: ContainerCardsType) => {
  const cardsStyle = useMemo(() => {
    return {
      ...getStyleValue("padding", propPadding),
      ...getStyleValue("paddingHorizontal", propPaddingHorizontal),
      ...getStyleValue("paddingVertical", propPaddingVertical),
    };
  }, [propPadding, propPaddingHorizontal, propPaddingVertical]);

  return (
    <View style={[styles.cards, cardsStyle]}>
      <Property1Default
        iconsVoucher={require("../assets/iconsusers.png")}
        option7="Account"
        property1DefaultPosition="unset"
        property1DefaultMarginTop="unset"
        option7FontWeight="700"
        option7FontFamily="Inter"
      />
      <Property1Default
        iconsVoucher={require("../assets/iconspin3.png")}
        option7="Address"
        property1DefaultPosition="unset"
        property1DefaultMarginTop={24}
        option7LineHeight={25}
        option7FontWeight="500"
        option7FontFamily="Inter"
      />
      <Property1Default
        iconsVoucher={require("../assets/iconsheadphones.png")}
        option7="Contact Us"
        property1DefaultPosition="unset"
        property1DefaultMarginTop={24}
        option7LineHeight={25}
        option7FontWeight="500"
        option7FontFamily="Inter"
      />
      <Property1Default
        iconsVoucher={require("../assets/iconshelp4.png")}
        option7="About Us"
        property1DefaultPosition="unset"
        property1DefaultMarginTop={24}
        option7LineHeight={25}
        option7FontWeight="500"
        option7FontFamily="Inter"
      />
      <Property1Default
        iconsVoucher={require("../assets/iconssettings.png")}
        option7="Setting"
        property1DefaultPosition="unset"
        property1DefaultMarginTop={24}
        option7LineHeight={25}
        option7FontWeight="500"
        option7FontFamily="Inter"
      />
      {frameViewVisible3 && (
        <View style={[styles.cardsInner, styles.cardsInnerFlexBox]}>
          <View style={[styles.iconsvoucherParent, styles.cardsInnerFlexBox]}>
            <Image
              style={styles.iconsvoucher}
              contentFit="cover"
              source={require("../assets/iconsvoucher1.png")}
            />
            <Text style={styles.option7}>Option 6</Text>
          </View>
        </View>
      )}
      {frameViewVisible4 && (
        <View style={[styles.cardsInner, styles.cardsInnerFlexBox]}>
          <View style={[styles.iconsvoucherParent, styles.cardsInnerFlexBox]}>
            <Image
              style={styles.iconsvoucher}
              contentFit="cover"
              source={require("../assets/iconsvoucher1.png")}
            />
            <Text style={styles.option7}>Option 7</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardsInnerFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconsvoucher: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  option7: {
    fontSize: FontSize.interBold12_size,
    letterSpacing: -0.4,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: FontFamily.interRegular10,
    color: Color.iconIconGrey,
    textAlign: "left",
    marginLeft: 8,
  },
  iconsvoucherParent: {
    width: 198,
  },
  cardsInner: {
    width: 366,
    display: "none",
    marginTop: 24,
  },
  cards: {
    borderRadius: StyleVariable.spacingSpacing16,
    backgroundColor: Color.containerContainerGreyDark,
    width: 398,
    padding: StyleVariable.spacingSpacing24,
    marginTop: 16,
  },
});

export default ContainerCards;
