import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import StateType from "./StateType";
import { StyleVariable, Color } from "../GlobalStyles";

export type StateDefault5Type = {
  iconsDelivery?: ImageSourcePropType;
  iconsMyOrder?: ImageSourcePropType;
  iconsSupport?: ImageSourcePropType;
  iconsSetting?: ImageSourcePropType;

  /** Style props */
  stateDefaultPosition?: string;
  stateDefaultBorderRadius?: number;
  stateDefaultPadding?: number | string;
  stateDefaultMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateDefault5 = ({
  iconsDelivery,
  iconsMyOrder,
  iconsSupport,
  iconsSetting,
  stateDefaultPosition,
  stateDefaultBorderRadius,
  stateDefaultPadding,
  stateDefaultMarginTop,
}: StateDefault5Type) => {
  const stateDefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stateDefaultPosition),
      ...getStyleValue("borderRadius", stateDefaultBorderRadius),
      ...getStyleValue("padding", stateDefaultPadding),
      ...getStyleValue("marginTop", stateDefaultMarginTop),
    };
  }, [
    stateDefaultPosition,
    stateDefaultBorderRadius,
    stateDefaultPadding,
    stateDefaultMarginTop,
  ]);

  return (
    <View style={[styles.statedefault, stateDefaultStyle]}>
      <StateType
        iconsSettingShape={require("../assets/iconsdelivery.png")}
        deliveries="Deliveries"
        stateType2Position="unset"
        stateType2FlexDirection="column"
        stateType2Flex={1}
        stateType2MarginLeft="unset"
        stateType2MarginTop="unset"
        stateType2BackgroundColor="unset"
        stateType2Width="unset"
        stateType2Padding="unset"
        iconsSettingShapeWidth={42}
        iconsSettingShapeHeight={42}
        iconsSettingShapeOverflow="unset"
        deliveriesMarginLeft="unset"
        deliveriesMarginTop={16}
        deliveriesColor="#909090"
      />
      <StateType
        iconsSettingShape={require("../assets/iconsmy-order.png")}
        deliveries="My Order"
        stateType2Position="unset"
        stateType2FlexDirection="column"
        stateType2Flex={1}
        stateType2MarginLeft={70}
        stateType2MarginTop="unset"
        stateType2BackgroundColor="unset"
        stateType2Width="unset"
        stateType2Padding="unset"
        iconsSettingShapeWidth={42}
        iconsSettingShapeHeight={42}
        iconsSettingShapeOverflow="unset"
        deliveriesMarginLeft="unset"
        deliveriesMarginTop={16}
        deliveriesColor="#909090"
      />
      <StateType
        iconsSettingShape={require("../assets/iconssupport.png")}
        deliveries="Support"
        stateType2Position="unset"
        stateType2FlexDirection="column"
        stateType2Flex={1}
        stateType2MarginLeft={70}
        stateType2MarginTop="unset"
        stateType2BackgroundColor="unset"
        stateType2Width="unset"
        stateType2Padding="unset"
        iconsSettingShapeWidth={42}
        iconsSettingShapeHeight={42}
        iconsSettingShapeOverflow="unset"
        deliveriesMarginLeft="unset"
        deliveriesMarginTop={16}
        deliveriesColor="#909090"
      />
      <StateType
        iconsSettingShape={require("../assets/iconssetting.png")}
        deliveries="Setting"
        stateType2Position="unset"
        stateType2FlexDirection="column"
        stateType2Flex={1}
        stateType2MarginLeft={70}
        stateType2MarginTop="unset"
        stateType2BackgroundColor="unset"
        stateType2Width="unset"
        stateType2Padding="unset"
        iconsSettingShapeWidth={42}
        iconsSettingShapeHeight={42}
        iconsSettingShapeOverflow="unset"
        deliveriesMarginLeft="unset"
        deliveriesMarginTop={16}
        deliveriesColor="#909090"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statedefault: {
    borderRadius: StyleVariable.spacingSpacing24,
    backgroundColor: Color.containerContainerGreyDark,
    width: 398,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: StyleVariable.spacingSpacing40,
  },
});

export default StateDefault5;
