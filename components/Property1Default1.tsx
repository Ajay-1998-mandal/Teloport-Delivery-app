import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type Property1Default1Type = {
  collectFrom?: string;
  senderAddress?: string;
  iconsaddCircleHalfDot?: ImageSourcePropType;
  kilometer6278HStreet201RK?: string;

  /** Style props */
  property1DefaultPosition?: string;
  property1DefaultMarginTop?: number | string;
  iconsaddCircleHalfDotOverflow?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default1 = ({
  collectFrom,
  senderAddress,
  iconsaddCircleHalfDot,
  kilometer6278HStreet201RK,
  property1DefaultPosition,
  property1DefaultMarginTop,
  iconsaddCircleHalfDotOverflow,
}: Property1Default1Type) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("marginTop", property1DefaultMarginTop),
    };
  }, [property1DefaultPosition, property1DefaultMarginTop]);

  const iconsaddCircleHalfDotStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", iconsaddCircleHalfDotOverflow),
    };
  }, [iconsaddCircleHalfDotOverflow]);

  return (
    <View style={[styles.property1default, property1DefaultStyle]}>
      <View style={styles.frameParent}>
        <View>
          <Text style={styles.collectFrom}>{collectFrom}</Text>
          <Text style={[styles.senderAddress, styles.senderAddressTypo]}>
            {senderAddress}
          </Text>
        </View>
        <Image
          style={[styles.iconsaddCircleHalfDot, iconsaddCircleHalfDotStyle]}
          contentFit="cover"
          source={iconsaddCircleHalfDot}
        />
      </View>
      <Text style={[styles.kilometer6278h, styles.senderAddressTypo]}>
        {kilometer6278HStreet201RK}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  senderAddressTypo: {
    fontSize: FontSize.interBold12_size,
    textAlign: "left",
    fontFamily: FontFamily.interRegular10,
    lineHeight: 25,
    letterSpacing: -0.4,
  },
  collectFrom: {
    fontSize: FontSize.interMedium14_size,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.interRegular10,
    lineHeight: 25,
    letterSpacing: -0.4,
    color: Color.textTextGreyLight,
  },
  senderAddress: {
    color: Color.iconIconGrey,
    marginTop: 8,
  },
  iconsaddCircleHalfDot: {
    width: 24,
    height: 24,
  },
  frameParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  kilometer6278h: {
    width: 321,
    marginTop: 12,
    color: Color.textTextGreyLight,
    fontSize: FontSize.interBold12_size,
  },
  property1default: {
    justifyContent: "center",
  },
});

export default Property1Default1;
