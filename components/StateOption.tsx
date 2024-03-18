import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import IconsProfilePhoto from "./IconsProfilePhoto";
import OrderContainer1 from "./OrderContainer1";
import SettingCardsContainer from "./SettingCardsContainer";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

export type StateOptionType = {
  iconsProfilePhoto?: ImageSourcePropType;
  iconsDeliveryShape?: ImageSourcePropType;
  iconsMyOrderShap?: ImageSourcePropType;
  iconsSupportShape?: ImageSourcePropType;
  iconsSettingShape?: ImageSourcePropType;

  /** Style props */
  stateOption1Position?: string;
  stateOption1BorderRadius?: number;
  stateOption1PaddingHorizontal?: number | string;
  stateOption1PaddingVertical?: number | string;
  stateOption1MarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateOption = ({
  iconsProfilePhoto,
  iconsDeliveryShape,
  iconsMyOrderShap,
  iconsSupportShape,
  iconsSettingShape,
  stateOption1Position,
  stateOption1BorderRadius,
  stateOption1PaddingHorizontal,
  stateOption1PaddingVertical,
  stateOption1MarginTop,
}: StateOptionType) => {
  const stateOption1Style = useMemo(() => {
    return {
      ...getStyleValue("position", stateOption1Position),
      ...getStyleValue("borderRadius", stateOption1BorderRadius),
      ...getStyleValue("paddingHorizontal", stateOption1PaddingHorizontal),
      ...getStyleValue("paddingVertical", stateOption1PaddingVertical),
      ...getStyleValue("marginTop", stateOption1MarginTop),
    };
  }, [
    stateOption1Position,
    stateOption1BorderRadius,
    stateOption1PaddingHorizontal,
    stateOption1PaddingVertical,
    stateOption1MarginTop,
  ]);

  return (
    <View style={[styles.stateoption1, stateOption1Style]}>
      <View style={styles.parentFlexBox}>
        <IconsProfilePhoto
          iconsProfilePhotoIconsPro={require("../assets/iconsprofile-photo.png")}
          iconsProfilePhotoWidth={69}
          iconsProfilePhotoHeight={69}
        />
        <Text style={styles.raksa}>Raksa</Text>
      </View>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <OrderContainer1
          uniqueId={require("../assets/iconsdelivery-shape3.png")}
          dimensionCode={require("../assets/iconsmy-order-shap2.png")}
        />
        <SettingCardsContainer
          iconId={require("../assets/iconssupport-shape3.png")}
          uniqueIdentifierText={require("../assets/iconssetting-shape2.png")}
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
  raksa: {
    fontSize: FontSize.interMedium14_size,
    letterSpacing: -0.4,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: FontFamily.interRegular10,
    color: Color.textTextWhite,
    textAlign: "center",
    marginTop: 8,
  },
  frameParent: {
    width: 249,
    flexDirection: "row",
    justifyContent: "center",
  },
  stateoption1: {
    borderRadius: StyleVariable.spacingSpacing24,
    backgroundColor: Color.containerContainerGreyDark,
    width: 398,
    justifyContent: "space-between",
    paddingHorizontal: StyleVariable.spacingSpacing24,
    paddingVertical: StyleVariable.spacingSpacing40,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default StateOption;
