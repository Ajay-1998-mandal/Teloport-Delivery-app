import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import StatePrimaryMedium from "./StatePrimaryMedium";

export type OrderContainer1Type = {
  uniqueId?: ImageSourcePropType;
  dimensionCode?: ImageSourcePropType;
};

const OrderContainer1 = ({ uniqueId, dimensionCode }: OrderContainer1Type) => {
  return (
    <View style={styles.buttonParent}>
      <StatePrimaryMedium
        iconEdit={require("../assets/iconsdelivery-shape6.png")}
        text="Deliveries"
        showText
        showIcon
        statePrimaryMediumPosition="unset"
        statePrimaryMediumBackgroundColor="#322708"
        statePrimaryMediumMarginLeft="unset"
        statePrimaryMediumAlignSelf="stretch"
        statePrimaryMediumMarginTop="unset"
        statePrimaryMediumWidth="unset"
        statePrimaryMediumHeight="~S_DT_~StyleVariable.spacingSpacing401"
        statePrimaryMediumPaddingHorizontal="unset"
        statePrimaryMediumPaddingVertical="unset"
        statePrimaryMediumPadding="unset"
        buttonColor="#fcd053"
      />
      <StatePrimaryMedium
        iconEdit={require("../assets/iconsmy-order-shap4.png")}
        text="My Order"
        showText
        showIcon
        statePrimaryMediumPosition="unset"
        statePrimaryMediumBorderRadius={16}
        statePrimaryMediumBackgroundColor="#124966"
        statePrimaryMediumMarginLeft="unset"
        statePrimaryMediumAlignSelf="stretch"
        statePrimaryMediumMarginTop={8}
        statePrimaryMediumWidth="unset"
        statePrimaryMediumHeight={40}
        statePrimaryMediumPaddingHorizontal="unset"
        statePrimaryMediumPaddingVertical="unset"
        statePrimaryMediumPadding="unset"
        buttonColor="#2eb4fc"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonParent: {
    alignSelf: "stretch",
    width: 114,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OrderContainer1;
