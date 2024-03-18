import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import StatePrimaryMedium from "./StatePrimaryMedium";

export type Property1TypeType = {
  iconEdit?: ImageSourcePropType;
  iconEdit1?: ImageSourcePropType;
  iconEdit2?: ImageSourcePropType;
  iconEdit3?: ImageSourcePropType;
  iconEdit4?: ImageSourcePropType;
  iconEdit5?: ImageSourcePropType;
  iconEdit6?: ImageSourcePropType;
  iconEdit7?: ImageSourcePropType;
  showButton?: boolean;

  /** Style props */
  property1TypePosition?: string;
  property1TypeWidth?: number | string;
  property1TypePaddingHorizontal?: number | string;
  property1TypePaddingVertical?: number | string;
  property1TypeMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Type = ({
  iconEdit,
  iconEdit1,
  iconEdit2,
  iconEdit3,
  iconEdit4,
  iconEdit5,
  iconEdit6,
  iconEdit7,
  showButton,
  property1TypePosition,
  property1TypeWidth,
  property1TypePaddingHorizontal,
  property1TypePaddingVertical,
  property1TypeMarginTop,
}: Property1TypeType) => {
  const property1TypeStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1TypePosition),
      ...getStyleValue("width", property1TypeWidth),
      ...getStyleValue("paddingHorizontal", property1TypePaddingHorizontal),
      ...getStyleValue("paddingVertical", property1TypePaddingVertical),
      ...getStyleValue("marginTop", property1TypeMarginTop),
    };
  }, [
    property1TypePosition,
    property1TypeWidth,
    property1TypePaddingHorizontal,
    property1TypePaddingVertical,
    property1TypeMarginTop,
  ]);

  return (
    <View style={[styles.property1type, property1TypeStyle]}>
      <StatePrimaryMedium
        iconEdit={require("../assets/iconedit.png")}
        text="Book"
        showText
        showIcon={false}
        statePrimaryMediumPosition="unset"
        statePrimaryMediumBackgroundColor="#202020"
        statePrimaryMediumMarginLeft="unset"
        statePrimaryMediumAlignSelf="unset"
        statePrimaryMediumMarginTop="unset"
        statePrimaryMediumWidth="unset"
        statePrimaryMediumHeight={40}
        statePrimaryMediumPaddingHorizontal="unset"
        statePrimaryMediumPaddingVertical="unset"
        statePrimaryMediumPadding="unset"
        buttonColor="#929c7e"
      />
      <StatePrimaryMedium
        iconEdit={require("../assets/iconedit.png")}
        text="Goods"
        showText
        showIcon={false}
        statePrimaryMediumPosition="unset"
        statePrimaryMediumBorderRadius={56}
        statePrimaryMediumBackgroundColor="#202020"
        statePrimaryMediumMarginLeft={8}
        statePrimaryMediumAlignSelf="unset"
        statePrimaryMediumMarginTop="unset"
        statePrimaryMediumWidth="unset"
        statePrimaryMediumHeight={40}
        statePrimaryMediumPaddingHorizontal="unset"
        statePrimaryMediumPaddingVertical="unset"
        statePrimaryMediumPadding="unset"
        buttonColor="#929c7e"
      />
      <StatePrimaryMedium
        iconEdit={require("../assets/iconedit.png")}
        text="Cosmetices"
        showText
        showIcon={false}
        statePrimaryMediumPosition="unset"
        statePrimaryMediumBorderRadius={56}
        statePrimaryMediumBackgroundColor="#202020"
        statePrimaryMediumMarginLeft={8}
        statePrimaryMediumAlignSelf="unset"
        statePrimaryMediumMarginTop="unset"
        statePrimaryMediumWidth="unset"
        statePrimaryMediumHeight={40}
        statePrimaryMediumPaddingHorizontal="unset"
        statePrimaryMediumPaddingVertical="unset"
        statePrimaryMediumPadding="unset"
        buttonColor="#929c7e"
      />
      <StatePrimaryMedium
        iconEdit={require("../assets/iconedit.png")}
        text="Electronic"
        showText
        showIcon={false}
        statePrimaryMediumPosition="unset"
        statePrimaryMediumBorderRadius={56}
        statePrimaryMediumBackgroundColor="#202020"
        statePrimaryMediumMarginLeft={8}
        statePrimaryMediumAlignSelf="unset"
        statePrimaryMediumMarginTop="unset"
        statePrimaryMediumWidth="unset"
        statePrimaryMediumHeight={40}
        statePrimaryMediumPaddingHorizontal="unset"
        statePrimaryMediumPaddingVertical="unset"
        statePrimaryMediumPadding="unset"
        buttonColor="#929c7e"
      />
      <StatePrimaryMedium
        iconEdit={require("../assets/iconedit.png")}
        text="Medicine"
        showText
        showIcon={false}
        statePrimaryMediumPosition="unset"
        statePrimaryMediumBorderRadius={56}
        statePrimaryMediumBackgroundColor="#202020"
        statePrimaryMediumMarginLeft={8}
        statePrimaryMediumAlignSelf="unset"
        statePrimaryMediumMarginTop="unset"
        statePrimaryMediumWidth="unset"
        statePrimaryMediumHeight={40}
        statePrimaryMediumPaddingHorizontal="unset"
        statePrimaryMediumPaddingVertical="unset"
        statePrimaryMediumPadding="unset"
        buttonColor="#929c7e"
      />
      <StatePrimaryMedium
        iconEdit={require("../assets/iconedit.png")}
        text="Computer"
        showText
        showIcon={false}
        statePrimaryMediumPosition="unset"
        statePrimaryMediumBorderRadius={56}
        statePrimaryMediumBackgroundColor="#202020"
        statePrimaryMediumMarginLeft={8}
        statePrimaryMediumAlignSelf="unset"
        statePrimaryMediumMarginTop="unset"
        statePrimaryMediumWidth="unset"
        statePrimaryMediumHeight={40}
        statePrimaryMediumPaddingHorizontal="unset"
        statePrimaryMediumPaddingVertical="unset"
        statePrimaryMediumPadding="unset"
        buttonColor="#929c7e"
      />
      <StatePrimaryMedium
        iconEdit={require("../assets/iconedit.png")}
        text="Computer"
        showText
        showIcon={false}
        statePrimaryMediumPosition="unset"
        statePrimaryMediumBorderRadius={56}
        statePrimaryMediumBackgroundColor="#202020"
        statePrimaryMediumMarginLeft={8}
        statePrimaryMediumAlignSelf="unset"
        statePrimaryMediumMarginTop="unset"
        statePrimaryMediumWidth="unset"
        statePrimaryMediumHeight={40}
        statePrimaryMediumPaddingHorizontal="unset"
        statePrimaryMediumPaddingVertical="unset"
        statePrimaryMediumPadding="unset"
        buttonColor="#929c7e"
      />
      <StatePrimaryMedium
        iconEdit={require("../assets/iconedit.png")}
        text="Computer"
        showText
        showIcon={false}
        statePrimaryMediumPosition="unset"
        statePrimaryMediumBorderRadius={56}
        statePrimaryMediumBackgroundColor="#202020"
        statePrimaryMediumMarginLeft={8}
        statePrimaryMediumAlignSelf="unset"
        statePrimaryMediumMarginTop="unset"
        statePrimaryMediumWidth="unset"
        statePrimaryMediumHeight={40}
        statePrimaryMediumPaddingHorizontal="unset"
        statePrimaryMediumPaddingVertical="unset"
        statePrimaryMediumPadding="unset"
        buttonColor="#929c7e"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  property1type: {
    width: 398,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Property1Type;
