import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import CardsTrackingProcess from "./CardsTrackingProcess";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

export type ParcelTrackingContainerType = {
  iconsLocation?: ImageSourcePropType;
  vector2?: ImageSourcePropType;
  iconsLocation1?: ImageSourcePropType;
  group63?: ImageSourcePropType;
};

const ParcelTrackingContainer = ({
  iconsLocation,
  vector2,
  iconsLocation1,
  group63,
}: ParcelTrackingContainerType) => {
  return (
    <View style={styles.blockTrackingParcel}>
      <View style={styles.blockText}>
        <Text style={styles.trackingParcel}>Tracking parcel</Text>
      </View>
      <CardsTrackingProcess
        iconsLocation={require("../assets/iconslocation2.png")}
        vector2={require("../assets/vector-23.png")}
        iconsLocation1={require("../assets/iconslocation2.png")}
        group63={require("../assets/group-632.png")}
        cardsTrackingProcessBorderRadius={24}
        cardsTrackingProcessPaddingLeft={40}
        cardsTrackingProcessMarginTop={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  trackingParcel: {
    fontSize: FontSize.interBold16_size,
    letterSpacing: -0.5,
    lineHeight: 25,
    fontWeight: "600",
    fontFamily: FontFamily.interRegular10,
    color: Color.iconIconGrey,
    textAlign: "left",
  },
  blockText: {
    flexDirection: "row",
    paddingHorizontal: StyleVariable.spacingSpacing16,
    paddingVertical: 0,
  },
  blockTrackingParcel: {
    marginTop: 48,
  },
});

export default ParcelTrackingContainer;
