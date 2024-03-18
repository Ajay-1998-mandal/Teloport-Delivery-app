import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type Property1PaymentComponentType = {
  iconsIconDarkGrey?: ImageSourcePropType;
  caseOnDelivery?: string;
  iconsSuccess?: ImageSourcePropType;

  /** Style props */
  property1PaymentComponentPosition?: string;
  property1PaymentComponentMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1PaymentComponent = ({
  iconsIconDarkGrey,
  caseOnDelivery,
  iconsSuccess,
  property1PaymentComponentPosition,
  property1PaymentComponentMarginTop,
}: Property1PaymentComponentType) => {
  const property1PaymentComponentStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1PaymentComponentPosition),
      ...getStyleValue("marginTop", property1PaymentComponentMarginTop),
    };
  }, [property1PaymentComponentPosition, property1PaymentComponentMarginTop]);

  return (
    <View
      style={[
        styles.property1paymentComponent,
        styles.iconsiconDarkGreyParentFlexBox,
        property1PaymentComponentStyle,
      ]}
    >
      <View style={styles.iconsiconDarkGreyParentFlexBox}>
        <Image
          style={styles.iconsiconDarkGrey}
          contentFit="cover"
          source={iconsIconDarkGrey}
        />
        <Text style={styles.caseOnDelivery}>{caseOnDelivery}</Text>
      </View>
      <Image
        style={styles.iconssuccess}
        contentFit="cover"
        source={iconsSuccess}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconsiconDarkGreyParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconsiconDarkGrey: {
    width: 30,
    height: 30,
  },
  caseOnDelivery: {
    fontSize: FontSize.interMedium14_size,
    letterSpacing: -0.4,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: FontFamily.interRegular10,
    color: Color.textTextGreyLight,
    textAlign: "left",
    marginLeft: 8,
  },
  iconssuccess: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  property1paymentComponent: {
    width: 369,
    justifyContent: "space-between",
  },
});

export default Property1PaymentComponent;
