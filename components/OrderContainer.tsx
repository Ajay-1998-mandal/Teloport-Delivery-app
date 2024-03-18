import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import StateType from "./StateType";

export type OrderContainerType = {
  deliveryIconId?: ImageSourcePropType;
  deliveryDimensions?: string;
  iconId?: ImageSourcePropType;
  orderTitle?: string;

  /** Style props */
  propMarginLeft?: number | string;
  propBackgroundColor?: string;
  propColor?: string;
  propBackgroundColor1?: string;
  propColor1?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const OrderContainer = ({
  deliveryIconId,
  deliveryDimensions,
  iconId,
  orderTitle,
  propMarginLeft,
  propBackgroundColor,
  propColor,
  propBackgroundColor1,
  propColor1,
}: OrderContainerType) => {
  const frameView4Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  const stateType2Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const deliveriesStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const stateType2Style1 = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor1),
    };
  }, [propBackgroundColor1]);

  const deliveriesStyle1 = useMemo(() => {
    return {
      ...getStyleValue("color", propColor1),
    };
  }, [propColor1]);

  return (
    <View style={[styles.cardsmenuTypeParent, frameView4Style]}>
      <StateType
        iconsSettingShape={require("../assets/iconsdelivery-shape4.png")}
        deliveries="Deliveries"
        stateType2Position="unset"
        stateType2FlexDirection="column"
        stateType2MarginLeft="unset"
        stateType2MarginTop="unset"
        stateType2BackgroundColor="#322708"
        stateType2Width={100}
        stateType2Padding="~S_DT_~StyleVariable.spacingSpacing16"
        iconsSettingShapeWidth={28}
        iconsSettingShapeHeight={28}
        iconsSettingShapeOverflow="hidden"
        deliveriesMarginLeft="unset"
        deliveriesMarginTop={4}
        deliveriesColor="#fcd053"
      />
      <StateType
        iconsSettingShape={require("../assets/iconsmy-order-shap3.png")}
        deliveries="My Order"
        stateType2Position="unset"
        stateType2FlexDirection="column"
        stateType2MarginLeft="unset"
        stateType2MarginTop={8}
        stateType2BorderRadius={16}
        stateType2BackgroundColor="#124966"
        stateType2Width={100}
        stateType2Padding={16}
        iconsSettingShapeWidth={28}
        iconsSettingShapeHeight={28}
        iconsSettingShapeOverflow="hidden"
        deliveriesMarginLeft="unset"
        deliveriesMarginTop={4}
        deliveriesColor="#2eb4fc"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardsmenuTypeParent: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OrderContainer;
