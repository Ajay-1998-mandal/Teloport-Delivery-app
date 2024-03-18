import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import StateDefault3 from "./StateDefault3";

export type StateDefault2Type = {
  iconsSuccess?: ImageSourcePropType;

  /** Style props */
  stateDefaultPosition?: string;
  stateDefaultMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateDefault2 = ({
  iconsSuccess,
  stateDefaultPosition,
  stateDefaultMarginTop,
}: StateDefault2Type) => {
  const stateDefault3Style = useMemo(() => {
    return {
      ...getStyleValue("position", stateDefaultPosition),
      ...getStyleValue("marginTop", stateDefaultMarginTop),
    };
  }, [stateDefaultPosition, stateDefaultMarginTop]);

  return (
    <View style={[styles.statedefault, stateDefault3Style]}>
      <StateDefault3
        isolatedCardboardBoxTrans={require("../assets/isolated-cardboard-boxtransformed-1.png")}
        iconsCircle={require("../assets/iconscircle.png")}
        stateDefaultPosition="unset"
        stateDefaultBackgroundColor="#202020"
        stateDefaultWidth={126}
        stateDefaultPadding="~S_DT_~StyleVariable.spacingSpacing24"
        stateDefaultMarginLeft="unset"
        frameViewPosition="relative"
        iconsCircleTop={-15}
        iconsCircleLeft={60}
      />
      <StateDefault3
        isolatedCardboardBoxTrans={require("../assets/isolated-cardboard-boxtransformed-11.png")}
        iconsCircle={require("../assets/iconssuccess.png")}
        stateDefaultPosition="relative"
        stateDefaultBorderRadius={16}
        stateDefaultBackgroundColor="#3b3f34"
        stateDefaultWidth={121}
        stateDefaultPadding={24}
        stateDefaultMarginLeft={12}
        frameViewPosition="unset"
        iconsCircleTop={10}
        iconsCircleLeft={95}
      />
      <StateDefault3
        isolatedCardboardBoxTrans={require("../assets/isolated-cardboard-boxtransformed-12.png")}
        iconsCircle={require("../assets/iconscircle.png")}
        stateDefaultPosition="unset"
        stateDefaultBorderRadius={16}
        stateDefaultBackgroundColor="#202020"
        stateDefaultWidth={126}
        stateDefaultPadding={24}
        stateDefaultMarginLeft={12}
        frameViewPosition="relative"
        iconsCircleTop={-15}
        iconsCircleLeft={60}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statedefault: {
    flexDirection: "row",
  },
});

export default StateDefault2;
