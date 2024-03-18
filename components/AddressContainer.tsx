import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type AddressContainerType = {
  pickupLocation?: string;
  senderAddressText?: string;
  parcelDetailsId?: ImageSourcePropType;
  pickupLocationAddress?: string;

  /** Style props */
  propMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const AddressContainer = ({
  pickupLocation,
  senderAddressText,
  parcelDetailsId,
  pickupLocationAddress,
  propMarginTop,
}: AddressContainerType) => {
  const frameView5Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.frameParent, frameView5Style]}>
      <View style={styles.frameGroup}>
        <View>
          <Text style={styles.collectFrom}>{pickupLocation}</Text>
          <Text style={[styles.senderAddress, styles.senderAddressTypo]}>
            {senderAddressText}
          </Text>
        </View>
        <Image
          style={styles.iconsedit}
          contentFit="cover"
          source={parcelDetailsId}
        />
      </View>
      <Text style={[styles.kilometer6278h, styles.senderAddressTypo]}>
        {pickupLocationAddress}
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
  iconsedit: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  frameGroup: {
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
  frameParent: {
    justifyContent: "center",
  },
});

export default AddressContainer;
