import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import StatePrimaryMedium from "./StatePrimaryMedium";

export type SupportContainerType = {
  deliveryId?: ImageSourcePropType;
  deliveryCode?: string;
  dimensionId?: ImageSourcePropType;
  supportType?: string;

  /** Style props */
  propMarginTop?: number | string;
  propBackgroundColor?: string;
  propColor?: string;
  propBackgroundColor1?: string;
  propColor1?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SupportContainer = ({
  deliveryId,
  deliveryCode,
  dimensionId,
  supportType,
  propMarginTop,
  propBackgroundColor,
  propColor,
  propBackgroundColor1,
  propColor1,
}: SupportContainerType) => {
  const frameView3Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const statePrimaryMediumStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const statePrimaryMediumStyle1 = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor1),
    };
  }, [propBackgroundColor1]);

  const buttonStyle1 = useMemo(() => {
    return {
      ...getStyleValue("color", propColor1),
    };
  }, [propColor1]);

  return (
    <View style={[styles.buttonParent, frameView3Style]}>
      <StatePrimaryMedium
        iconEdit={require("../assets/iconsdelivery-shape3.png")}
        text="Deliveries"
        showText
        showIcon
        statePrimaryMediumPosition="unset"
        statePrimaryMediumBackgroundColor="#322708"
        statePrimaryMediumMarginLeft="unset"
        statePrimaryMediumAlignSelf="unset"
        statePrimaryMediumMarginTop="unset"
        statePrimaryMediumWidth={111}
        statePrimaryMediumHeight="~S_DT_~StyleVariable.spacingSpacing401"
        statePrimaryMediumPaddingHorizontal="unset"
        statePrimaryMediumPaddingVertical="unset"
        statePrimaryMediumPadding="unset"
        buttonColor="#fcd053"
      />
      <StatePrimaryMedium
        iconEdit={require("../assets/iconssupport-shape4.png")}
        text="Support"
        showText
        showIcon
        statePrimaryMediumPosition="unset"
        statePrimaryMediumBorderRadius={16}
        statePrimaryMediumBackgroundColor="#3b3f34"
        statePrimaryMediumMarginLeft={8}
        statePrimaryMediumAlignSelf="unset"
        statePrimaryMediumMarginTop="unset"
        statePrimaryMediumWidth={111}
        statePrimaryMediumHeight={40}
        statePrimaryMediumPaddingHorizontal="unset"
        statePrimaryMediumPaddingVertical="unset"
        statePrimaryMediumPadding="unset"
        buttonColor="#9bfe03"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SupportContainer;
