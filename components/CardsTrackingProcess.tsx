import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import FrameComponent from "./FrameComponent";
import { FontFamily, FontSize, Color, StyleVariable } from "../GlobalStyles";

export type CardsTrackingProcessType = {
  iconsLocation?: ImageSourcePropType;
  vector2?: ImageSourcePropType;
  iconsLocation1?: ImageSourcePropType;
  group63?: ImageSourcePropType;

  /** Style props */
  cardsTrackingProcessBorderRadius?: number;
  cardsTrackingProcessPaddingLeft?: number | string;
  cardsTrackingProcessMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardsTrackingProcess = ({
  iconsLocation,
  vector2,
  iconsLocation1,
  group63,
  cardsTrackingProcessBorderRadius,
  cardsTrackingProcessPaddingLeft,
  cardsTrackingProcessMarginTop,
}: CardsTrackingProcessType) => {
  const cardsTrackingProcessStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", cardsTrackingProcessBorderRadius),
      ...getStyleValue("paddingLeft", cardsTrackingProcessPaddingLeft),
      ...getStyleValue("marginTop", cardsTrackingProcessMarginTop),
    };
  }, [
    cardsTrackingProcessBorderRadius,
    cardsTrackingProcessPaddingLeft,
    cardsTrackingProcessMarginTop,
  ]);

  return (
    <View style={[styles.cardstrackingProcess, cardsTrackingProcessStyle]}>
      <View style={styles.frameParent}>
        <View>
          <Text style={[styles.trackingId, styles.trackingIdTypo]}>
            Tracking ID
          </Text>
          <Text style={[styles.dserc76618717, styles.trackingIdTypo]}>
            #DSERC-76618-717
          </Text>
        </View>
        <View style={styles.instanceParent}>
          <FrameComponent
            from="From"
            chamkamorPhnomPenh="Chamkamor, Phnom Penh"
            sender="Sender"
            raksa="Raksa"
            frameViewPosition="unset"
            frameViewMarginTop="unset"
          />
          <FrameComponent
            from="Delivery to"
            chamkamorPhnomPenh="Russey Keo, Phnom Penh"
            sender="Receiver"
            raksa="Channa"
            frameViewPosition="unset"
            frameViewMarginTop={40}
          />
        </View>
      </View>
      <View style={styles.iconslocationParent}>
        <Image
          style={styles.iconslocationLayout}
          contentFit="cover"
          source={iconsLocation}
        />
        <Image style={styles.frameChild} contentFit="cover" source={vector2} />
        <Image
          style={[styles.iconslocation1, styles.iconslocationLayout]}
          contentFit="cover"
          source={iconsLocation1}
        />
      </View>
      <Image
        style={styles.cardstrackingProcessChild}
        contentFit="cover"
        source={group63}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  trackingIdTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular10,
    lineHeight: 25,
    letterSpacing: -0.4,
    fontSize: FontSize.interBold12_size,
  },
  iconslocationLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  trackingId: {
    color: Color.iconIconGrey,
  },
  dserc76618717: {
    color: Color.textTextGreyLight,
    marginTop: 8,
  },
  instanceParent: {
    marginTop: 24,
  },
  frameParent: {
    zIndex: 0,
  },
  frameChild: {
    width: 0,
    height: 50,
    marginTop: 4,
  },
  iconslocation1: {
    marginTop: 4,
  },
  iconslocationParent: {
    position: "absolute",
    top: 89,
    left: 12,
    justifyContent: "center",
    zIndex: 1,
    alignItems: "center",
  },
  cardstrackingProcessChild: {
    width: 196,
    height: 259,
    zIndex: 2,
    marginLeft: 20,
  },
  cardstrackingProcess: {
    borderRadius: StyleVariable.spacingSpacing24,
    backgroundColor: Color.containerContainerGreyDark,
    width: 398,
    height: 232,
    flexDirection: "row",
    paddingLeft: StyleVariable.spacingSpacing40,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default CardsTrackingProcess;
