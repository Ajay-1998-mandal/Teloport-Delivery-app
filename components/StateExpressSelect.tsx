import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, StyleVariable } from "../GlobalStyles";

export type StateExpressSelectType = {
  iconsSuccess?: ImageSourcePropType;

  /** Style props */
  stateExpressSelectPosition?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateExpressSelect = ({
  iconsSuccess,
  stateExpressSelectPosition,
}: StateExpressSelectType) => {
  const stateExpressSelectStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stateExpressSelectPosition),
    };
  }, [stateExpressSelectPosition]);

  return (
    <View style={[styles.stateexpressSelect, stateExpressSelectStyle]}>
      <View style={styles.frameParent}>
        <View>
          <Text style={styles.express}>Express</Text>
          <Text style={styles.hoursTypo}>Collect time 10-20 min</Text>
        </View>
        <Image
          style={styles.iconssuccess}
          contentFit="cover"
          source={iconsSuccess}
        />
      </View>
      <View style={styles.deliveryToReceiverParent}>
        <Text style={styles.deliveryToReceiver}>Delivery to receiver</Text>
        <Text style={[styles.hours, styles.hoursTypo]}>1-2 hours</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hoursTypo: {
    marginTop: 8,
    color: Color.iconIconGrey,
    fontSize: FontSize.interBold12_size,
    textAlign: "left",
    fontFamily: FontFamily.interRegular10,
    lineHeight: 25,
    letterSpacing: -0.4,
  },
  express: {
    fontSize: FontSize.interMedium14_size,
    fontWeight: "500",
    color: Color.textTextGreyLight,
    textAlign: "left",
    fontFamily: FontFamily.interRegular10,
    lineHeight: 25,
    letterSpacing: -0.4,
  },
  iconssuccess: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  frameParent: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  deliveryToReceiver: {
    color: Color.iconIconGrey,
    fontSize: FontSize.interBold12_size,
    textAlign: "left",
    fontFamily: FontFamily.interRegular10,
    lineHeight: 25,
    letterSpacing: -0.4,
  },
  hours: {
    fontWeight: "700",
  },
  deliveryToReceiverParent: {
    alignSelf: "stretch",
  },
  stateexpressSelect: {
    borderRadius: StyleVariable.spacingSpacing16,
    backgroundColor: Color.containerContainerGreyDark,
    borderStyle: "solid",
    borderColor: Color.borderBorderLimeLight,
    borderWidth: 1,
    width: 190,
    height: 109,
    padding: StyleVariable.spacingSpacing16,
    justifyContent: "space-between",
  },
});

export default StateExpressSelect;
