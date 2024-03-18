import React, { useMemo } from "react";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import ProfileCardContainer from "./ProfileCardContainer";
import OrderContainer from "./OrderContainer";
import { StyleVariable, Color } from "../GlobalStyles";

export type StateOption1Type = {
  iconsProfilePhoto?: ImageSourcePropType;
  iconsPin?: ImageSourcePropType;
  iconschevronDown?: ImageSourcePropType;
  iconsDeliveryShape?: ImageSourcePropType;
  iconsMyOrderShap?: ImageSourcePropType;
  iconsSupportShape?: ImageSourcePropType;
  iconsDeliveryShape1?: ImageSourcePropType;

  /** Style props */
  stateOption3Position?: string;
  stateOption3BorderRadius?: number;
  stateOption3PaddingHorizontal?: number | string;
  stateOption3MarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateOption1 = ({
  iconsProfilePhoto,
  iconsPin,
  iconschevronDown,
  iconsDeliveryShape,
  iconsMyOrderShap,
  iconsSupportShape,
  iconsDeliveryShape1,
  stateOption3Position,
  stateOption3BorderRadius,
  stateOption3PaddingHorizontal,
  stateOption3MarginTop,
}: StateOption1Type) => {
  const stateOption3Style = useMemo(() => {
    return {
      ...getStyleValue("position", stateOption3Position),
      ...getStyleValue("borderRadius", stateOption3BorderRadius),
      ...getStyleValue("paddingHorizontal", stateOption3PaddingHorizontal),
      ...getStyleValue("marginTop", stateOption3MarginTop),
    };
  }, [
    stateOption3Position,
    stateOption3BorderRadius,
    stateOption3PaddingHorizontal,
    stateOption3MarginTop,
  ]);

  return (
    <View
      style={[
        styles.stateoption3,
        styles.stateoption3FlexBox,
        stateOption3Style,
      ]}
    >
      <ProfileCardContainer
        iconCode={require("../assets/iconsprofile-photo2.png")}
        dimensionCode={require("../assets/iconspin.png")}
        itemCode={require("../assets/iconschevrondown.png")}
      />
      <View style={[styles.stateoption3Inner, styles.stateoption3FlexBox]}>
        <View style={[styles.frameWrapper, styles.frameFlexBox]}>
          <View style={[styles.frameParent, styles.frameFlexBox]}>
            <OrderContainer
              deliveryIconId={require("../assets/iconsdelivery-shape1.png")}
              deliveryDimensions="Deliveries"
              iconId={require("../assets/iconsmy-order-shap1.png")}
              orderTitle="My Order"
              propMarginLeft="unset"
              propBackgroundColor="#322708"
              propColor="#fcd053"
              propBackgroundColor1="#124966"
              propColor1="#2eb4fc"
            />
            <OrderContainer
              deliveryIconId={require("../assets/iconssupport-shape1.png")}
              deliveryDimensions="Support"
              iconId={require("../assets/iconsdelivery-shape2.png")}
              orderTitle="Deliveries"
              propMarginLeft={8}
              propBackgroundColor="#3b3f34"
              propColor="#9bfe03"
              propBackgroundColor1="#5d0a22"
              propColor1="#f6a3bb"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stateoption3FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    flexDirection: "row",
    justifyContent: "center",
  },
  frameWrapper: {
    alignSelf: "stretch",
  },
  stateoption3Inner: {
    flex: 1,
    justifyContent: "flex-end",
    marginLeft: 4,
  },
  stateoption3: {
    borderRadius: StyleVariable.spacingSpacing24,
    backgroundColor: Color.containerContainerGreyDark,
    width: 398,
    paddingHorizontal: StyleVariable.spacingSpacing24,
    paddingVertical: StyleVariable.spacingSpacing32,
  },
});

export default StateOption1;
