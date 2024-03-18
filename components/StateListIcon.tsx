import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import Property1Default from "./Property1Default";
import { StyleVariable, Color } from "../GlobalStyles";

export type StateListIconType = {
  iconsVoucher?: ImageSourcePropType;
  option7?: string;
  iconsVoucher1?: ImageSourcePropType;
  option71?: string;
  iconsVoucher2?: ImageSourcePropType;
  option72?: string;
  iconsVoucher3?: ImageSourcePropType;
  option73?: string;
  iconsVoucher4?: ImageSourcePropType;
  option74?: string;
  iconsVoucher5?: ImageSourcePropType;
  iconsVoucher6?: ImageSourcePropType;
  showFrameView?: boolean;
  frameViewVisible?: boolean;
  frameViewVisible1?: boolean;
  frameViewVisible2?: boolean;
  frameViewVisible3?: boolean;
  frameViewVisible4?: boolean;

  /** Style props */
  stateListIconPosition?: string;
  stateListIconBorderRadius?: number;
  stateListIconPadding?: number | string;
  stateListIconWidth?: number | string;
  stateListIconMarginTop?: number | string;
  stateListIconPaddingHorizontal?: number | string;
  stateListIconPaddingVertical?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateListIcon = ({
  iconsVoucher,
  option7,
  iconsVoucher1,
  option71,
  iconsVoucher2,
  option72,
  iconsVoucher3,
  option73,
  iconsVoucher4,
  option74,
  iconsVoucher5,
  iconsVoucher6,
  showFrameView,
  frameViewVisible,
  frameViewVisible1,
  frameViewVisible2,
  frameViewVisible3,
  frameViewVisible4,
  stateListIconPosition,
  stateListIconBorderRadius,
  stateListIconPadding,
  stateListIconWidth,
  stateListIconMarginTop,
  stateListIconPaddingHorizontal,
  stateListIconPaddingVertical,
}: StateListIconType) => {
  const stateListIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stateListIconPosition),
      ...getStyleValue("borderRadius", stateListIconBorderRadius),
      ...getStyleValue("padding", stateListIconPadding),
      ...getStyleValue("width", stateListIconWidth),
      ...getStyleValue("marginTop", stateListIconMarginTop),
      ...getStyleValue("paddingHorizontal", stateListIconPaddingHorizontal),
      ...getStyleValue("paddingVertical", stateListIconPaddingVertical),
    };
  }, [
    stateListIconPosition,
    stateListIconBorderRadius,
    stateListIconPadding,
    stateListIconWidth,
    stateListIconMarginTop,
    stateListIconPaddingHorizontal,
    stateListIconPaddingVertical,
  ]);

  return (
    <View style={[styles.statelistIcon, stateListIconStyle]}>
      <Property1Default
        iconsVoucher={require("../assets/iconsvoucher.png")}
        option7="Option 1"
        property1DefaultPosition="unset"
        property1DefaultMarginTop="unset"
        option7FontWeight="700"
        option7FontFamily="Inter"
      />
      <Property1Default
        iconsVoucher={require("../assets/iconsvoucher.png")}
        option7="Option 2"
        property1DefaultPosition="unset"
        property1DefaultMarginTop={24}
        option7LineHeight={25}
        option7FontWeight="500"
        option7FontFamily="Inter"
      />
      <Property1Default
        iconsVoucher={require("../assets/iconsvoucher.png")}
        option7="Option 3"
        property1DefaultPosition="unset"
        property1DefaultMarginTop={24}
        option7LineHeight={25}
        option7FontWeight="500"
        option7FontFamily="Inter"
      />
      <Property1Default
        iconsVoucher={require("../assets/iconsvoucher.png")}
        option7="Option 4"
        property1DefaultPosition="unset"
        property1DefaultMarginTop={24}
        option7LineHeight={25}
        option7FontWeight="500"
        option7FontFamily="Inter"
      />
      <Property1Default
        iconsVoucher={require("../assets/iconsvoucher.png")}
        option7="Option 5"
        property1DefaultPosition="unset"
        property1DefaultMarginTop={24}
        option7LineHeight={25}
        option7FontWeight="500"
        option7FontFamily="Inter"
      />
      <Property1Default
        iconsVoucher={require("../assets/iconsvoucher.png")}
        option7="Option 6"
        property1DefaultPosition="unset"
        property1DefaultMarginTop={24}
        option7LineHeight={25}
        option7FontWeight="500"
        option7FontFamily="Inter"
      />
      <Property1Default
        iconsVoucher={require("../assets/iconsvoucher.png")}
        option7="Option 7"
        property1DefaultPosition="unset"
        property1DefaultMarginTop={24}
        option7LineHeight={25}
        option7FontWeight="500"
        option7FontFamily="Inter"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statelistIcon: {
    borderRadius: StyleVariable.spacingSpacing16,
    backgroundColor: Color.containerContainerGreyDark,
    width: 398,
    padding: StyleVariable.spacingSpacing24,
  },
});

export default StateListIcon;
