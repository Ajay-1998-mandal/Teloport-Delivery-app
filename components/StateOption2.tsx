import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import IconsProfilePhoto from "./IconsProfilePhoto";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

export type StateOption2Type = {
  iconsProfilePhoto?: ImageSourcePropType;
  iconsPin?: ImageSourcePropType;
  iconschevronDown?: ImageSourcePropType;

  /** Style props */
  stateOption2Position?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateOption2 = ({
  iconsProfilePhoto,
  iconsPin,
  iconschevronDown,
  stateOption2Position,
}: StateOption2Type) => {
  const stateOption21Style = useMemo(() => {
    return {
      ...getStyleValue("position", stateOption2Position),
    };
  }, [stateOption2Position]);

  return (
    <View style={[styles.stateoption2, stateOption21Style]}>
      <IconsProfilePhoto
        iconsProfilePhotoIconsPro={require("../assets/iconsprofile-photo2.png")}
        iconsProfilePhotoWidth={62}
        iconsProfilePhotoHeight={62}
      />
      <View style={[styles.chuonRaksaParent, styles.parentSpaceBlock]}>
        <Text style={[styles.chuonRaksa, styles.phnomPenhTypo]}>
          Chuon Raksa
        </Text>
        <View style={[styles.iconspinParent, styles.parentSpaceBlock]}>
          <Image style={styles.iconspin} contentFit="cover" source={iconsPin} />
          <Text style={[styles.phnomPenh, styles.phnomPenhTypo]}>
            phnom penh
          </Text>
          <Image
            style={styles.iconspin}
            contentFit="cover"
            source={iconschevronDown}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentSpaceBlock: {
    marginTop: 8,
    alignItems: "center",
  },
  phnomPenhTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular10,
  },
  chuonRaksa: {
    fontSize: FontSize.interMedium14_size,
    letterSpacing: -0.4,
    lineHeight: 25,
    fontWeight: "500",
    color: Color.textTextGreyLight,
  },
  iconspin: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  phnomPenh: {
    fontSize: FontSize.interBold12_size,
    color: Color.iconIconGrey,
  },
  iconspinParent: {
    flexDirection: "row",
  },
  chuonRaksaParent: {
    justifyContent: "center",
  },
  stateoption2: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StateOption2;
