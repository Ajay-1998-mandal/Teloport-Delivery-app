import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import AddressContainer from "./AddressContainer";
import StatePrimaryMedium from "./StatePrimaryMedium";
import { StyleVariable, Color } from "../GlobalStyles";

export type StepDefaultType = {
  iconsEdit?: ImageSourcePropType;
  iconsEdit1?: ImageSourcePropType;
  iconsClock?: ImageSourcePropType;
  locationUndefinedGlyphUnd?: ImageSourcePropType;
  vector2?: ImageSourcePropType;
  locationUndefinedGlyphUnd1?: ImageSourcePropType;

  /** Style props */
  stepDefaultBorderRadius?: number;
  stepDefaultPaddingVertical?: number | string;
  stepDefaultMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StepDefault = ({
  iconsEdit,
  iconsEdit1,
  iconsClock,
  locationUndefinedGlyphUnd,
  vector2,
  locationUndefinedGlyphUnd1,
  stepDefaultBorderRadius,
  stepDefaultPaddingVertical,
  stepDefaultMarginTop,
}: StepDefaultType) => {
  const stepDefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", stepDefaultBorderRadius),
      ...getStyleValue("paddingVertical", stepDefaultPaddingVertical),
      ...getStyleValue("marginTop", stepDefaultMarginTop),
    };
  }, [
    stepDefaultBorderRadius,
    stepDefaultPaddingVertical,
    stepDefaultMarginTop,
  ]);

  return (
    <View style={[styles.stepdefault, stepDefaultStyle]}>
      <View style={[styles.instanceParent, styles.parentFlexBox]}>
        <AddressContainer
          pickupLocation="Collect from"
          senderAddressText="Sender address"
          parcelDetailsId={require("../assets/iconsedit.png")}
          pickupLocationAddress="Kilometer 6, 278H, Street 201R, Kroalkor Village, Unnamed Road, Phnom Penh"
          propMarginTop="unset"
        />
        <AddressContainer
          pickupLocation="Delivery to"
          senderAddressText="Receiver address"
          parcelDetailsId={require("../assets/iconsedit.png")}
          pickupLocationAddress="2nd Floor 01, 25 Mao Tse Toung Blvd (245), Phnom Penh 12302, Cambodia"
          propMarginTop={32}
        />
      </View>
      <StatePrimaryMedium
        iconEdit={require("../assets/iconsclock1.png")}
        text="Take around 20 min"
        showText
        showIcon
        statePrimaryMediumPosition="unset"
        statePrimaryMediumBorderRadius={16}
        statePrimaryMediumBackgroundColor="#3b3f34"
        statePrimaryMediumMarginLeft="unset"
        statePrimaryMediumAlignSelf="unset"
        statePrimaryMediumMarginTop={24}
        statePrimaryMediumWidth="unset"
        statePrimaryMediumHeight={40}
        statePrimaryMediumPaddingHorizontal="unset"
        statePrimaryMediumPaddingVertical="unset"
        statePrimaryMediumPadding="unset"
        buttonColor="#e9fac8"
      />
      <View style={[styles.locationUndefinedGlyphParent, styles.parentFlexBox]}>
        <Image
          style={styles.locationUndefinedGlyph}
          contentFit="cover"
          source={locationUndefinedGlyphUnd}
        />
        <Image
          style={[styles.frameChild, styles.frameChildSpaceBlock]}
          contentFit="cover"
          source={vector2}
        />
        <Image
          style={[styles.locationUndefinedGlyph1, styles.frameChildSpaceBlock]}
          contentFit="cover"
          source={locationUndefinedGlyphUnd1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameChildSpaceBlock: {
    marginTop: 5,
    overflow: "hidden",
  },
  instanceParent: {
    zIndex: 0,
  },
  locationUndefinedGlyph: {
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  frameChild: {
    maxWidth: "100%",
    height: 58,
  },
  locationUndefinedGlyph1: {
    height: 24,
    width: 24,
    marginTop: 5,
  },
  locationUndefinedGlyphParent: {
    position: "absolute",
    top: 20,
    left: 16,
    zIndex: 2,
  },
  stepdefault: {
    borderRadius: StyleVariable.spacingSpacing24,
    backgroundColor: Color.containerContainerGreyDark,
    width: 398,
    paddingHorizontal: StyleVariable.spacingSpacing48,
    paddingVertical: StyleVariable.spacingSpacing24,
  },
});

export default StepDefault;
