import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

export type FrameComponentType = {
  from?: string;
  chamkamorPhnomPenh?: string;
  sender?: string;
  raksa?: string;

  /** Style props */
  frameViewPosition?: string;
  frameViewMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent = ({
  from,
  chamkamorPhnomPenh,
  sender,
  raksa,
  frameViewPosition,
  frameViewMarginTop,
}: FrameComponentType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("position", frameViewPosition),
      ...getStyleValue("marginTop", frameViewMarginTop),
    };
  }, [frameViewPosition, frameViewMarginTop]);

  return (
    <View>
      <View>
        <Text style={[styles.from, styles.fromTypo]}>{from}</Text>
        <Text style={[styles.chamkamorPhnomPenh, styles.raksaTypo]}>
          {chamkamorPhnomPenh}
        </Text>
      </View>
      <View style={styles.senderParent}>
        <Text style={styles.fromTypo}>{sender}</Text>
        <Text style={[styles.raksa, styles.raksaTypo]}>{raksa}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fromTypo: {
    textAlign: "left",
    color: Color.iconIconGrey,
    fontFamily: FontFamily.interRegular10,
    lineHeight: 25,
    letterSpacing: -0.4,
    fontSize: FontSize.interBold12_size,
  },
  raksaTypo: {
    color: Color.textTextGreyLight,
    textAlign: "left",
    fontFamily: FontFamily.interRegular10,
    lineHeight: 25,
    letterSpacing: -0.4,
    fontSize: FontSize.interBold12_size,
  },
  from: {
    fontWeight: "600",
  },
  chamkamorPhnomPenh: {
    marginTop: 8,
    fontWeight: "600",
  },
  raksa: {
    fontWeight: "500",
    marginLeft: 4,
  },
  senderParent: {
    flexDirection: "row",
    marginTop: 8,
  },
});

export default FrameComponent;
