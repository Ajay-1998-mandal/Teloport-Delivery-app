import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import IconsProfilePhoto from "./IconsProfilePhoto";
import SupportContainer from "./SupportContainer";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

export type StateOption3Type = {
  iconsProfilePhoto?: ImageSourcePropType;
  iconsDeliveryShape?: ImageSourcePropType;
  iconsSupportShape?: ImageSourcePropType;
  iconsMyOrderShap?: ImageSourcePropType;
  iconsSettingShape?: ImageSourcePropType;

  /** Style props */
  stateOption2Position?: string;
  stateOption2BorderRadius?: number;
  stateOption2PaddingHorizontal?: number | string;
  stateOption2PaddingVertical?: number | string;
  stateOption2MarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateOption3 = ({
  iconsProfilePhoto,
  iconsDeliveryShape,
  iconsSupportShape,
  iconsMyOrderShap,
  iconsSettingShape,
  stateOption2Position,
  stateOption2BorderRadius,
  stateOption2PaddingHorizontal,
  stateOption2PaddingVertical,
  stateOption2MarginTop,
}: StateOption3Type) => {
  const stateOption2Style = useMemo(() => {
    return {
      ...getStyleValue("position", stateOption2Position),
      ...getStyleValue("borderRadius", stateOption2BorderRadius),
      ...getStyleValue("paddingHorizontal", stateOption2PaddingHorizontal),
      ...getStyleValue("paddingVertical", stateOption2PaddingVertical),
      ...getStyleValue("marginTop", stateOption2MarginTop),
    };
  }, [
    stateOption2Position,
    stateOption2BorderRadius,
    stateOption2PaddingHorizontal,
    stateOption2PaddingVertical,
    stateOption2MarginTop,
  ]);

  return (
    <View style={[styles.stateoption2, stateOption2Style]}>
      <View style={styles.parentFlexBox}>
        <IconsProfilePhoto
          iconsProfilePhotoIconsPro={require("../assets/iconsprofile-photo.png")}
          iconsProfilePhotoWidth={69}
          iconsProfilePhotoHeight={69}
        />
        <Text style={styles.raksa}>Raksa</Text>
      </View>
      <View style={[styles.stateoption2Inner, styles.parentFlexBox]}>
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          <SupportContainer
            deliveryId={require("../assets/iconsdelivery-shape.png")}
            deliveryCode="Deliveries"
            dimensionId={require("../assets/iconssupport-shape.png")}
            supportType="Support"
            propMarginTop="unset"
            propBackgroundColor="#322708"
            propColor="#fcd053"
            propBackgroundColor1="#3b3f34"
            propColor1="#9bfe03"
          />
          <SupportContainer
            deliveryId={require("../assets/iconsmy-order-shap.png")}
            deliveryCode="My Order"
            dimensionId={require("../assets/iconssetting-shape.png")}
            supportType="Setting"
            propMarginTop={8}
            propBackgroundColor="#124966"
            propColor="#2eb4fc"
            propBackgroundColor1="#5d0a22"
            propColor1="#f6a3bb"
          />
        </View>
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
    alignSelf: "stretch",
    flex: 1,
  },
  stateoption2Inner: {
    width: 249,
    flexDirection: "row",
    justifyContent: "center",
  },
  stateoption2: {
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

export default StateOption3;
