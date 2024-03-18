import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type Property1DefaultType = {
  iconsVoucher?: ImageSourcePropType;
  option7?: string;

  /** Style props */
  property1DefaultPosition?: string;
  property1DefaultMarginTop?: number | string;
  option7LineHeight?: number | string;
  option7FontWeight?: string;
  option7FontFamily?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default = ({
  iconsVoucher,
  option7,
  property1DefaultPosition,
  property1DefaultMarginTop,
  option7LineHeight,
  option7FontWeight,
  option7FontFamily,
}: Property1DefaultType) => {
  const property1Default1Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("marginTop", property1DefaultMarginTop),
    };
  }, [property1DefaultPosition, property1DefaultMarginTop]);

  const option7Style = useMemo(() => {
    return {
      ...getStyleValue("lineHeight", option7LineHeight),
      ...getStyleValue("fontWeight", option7FontWeight),
      ...getStyleValue("fontFamily", option7FontFamily),
    };
  }, [option7LineHeight, option7FontWeight, option7FontFamily]);

  return (
    <View
      style={[
        styles.property1default,
        styles.property1defaultFlexBox,
        property1Default1Style,
      ]}
    >
      <View style={[styles.iconsvoucherParent, styles.property1defaultFlexBox]}>
        <Image
          style={styles.iconsvoucher}
          contentFit="cover"
          source={iconsVoucher}
        />
        <Text style={[styles.option7, option7Style]}>{option7}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultFlexBox: {
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
  property1default: {
    width: 366,
  },
});

export default Property1Default;
