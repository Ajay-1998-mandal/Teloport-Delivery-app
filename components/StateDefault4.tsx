import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

export type StateDefault4Type = {
  iconsProfilePhoto?: ImageSourcePropType;
  iconsPin?: ImageSourcePropType;
  iconschevronDown?: ImageSourcePropType;
  iconsHelp?: ImageSourcePropType;
  iconsNotificationBel?: ImageSourcePropType;

  /** Style props */
  stateDefaultPosition?: string;
  stateDefaultMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateDefault4 = ({
  iconsProfilePhoto,
  iconsPin,
  iconschevronDown,
  iconsHelp,
  iconsNotificationBel,
  stateDefaultPosition,
  stateDefaultMarginTop,
}: StateDefault4Type) => {
  const stateDefault1Style = useMemo(() => {
    return {
      ...getStyleValue("position", stateDefaultPosition),
      ...getStyleValue("marginTop", stateDefaultMarginTop),
    };
  }, [stateDefaultPosition, stateDefaultMarginTop]);

  return (
    <View
      style={[
        styles.statedefault,
        styles.statedefaultFlexBox,
        stateDefault1Style,
      ]}
    >
      <View style={[styles.iconsprofilePhotoParent, styles.parentFlexBox]}>
        <Image
          style={styles.iconsprofilePhoto}
          contentFit="cover"
          source={iconsProfilePhoto}
        />
        <View style={styles.chuonRaksaParent}>
          <Text style={[styles.chuonRaksa, styles.chuonRaksaTypo]}>
            Chuon Raksa
          </Text>
          <View style={[styles.iconspinParent, styles.statedefaultFlexBox]}>
            <Image
              style={styles.iconspin}
              contentFit="cover"
              source={iconsPin}
            />
            <Text style={[styles.phnomPenhCambodia, styles.chuonRaksaTypo]}>
              phnom penh, Cambodia
            </Text>
            <Image
              style={styles.iconspin}
              contentFit="cover"
              source={iconschevronDown}
            />
          </View>
        </View>
      </View>
      <View style={[styles.iconshelpParent, styles.parentFlexBox]}>
        <Image
          style={styles.iconshelpLayout}
          contentFit="cover"
          source={iconsHelp}
        />
        <Image
          style={[styles.iconsnotificationBel, styles.iconshelpLayout]}
          contentFit="cover"
          source={iconsNotificationBel}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statedefaultFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  parentFlexBox: {
    flex: 1,
    flexDirection: "row",
  },
  chuonRaksaTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular10,
  },
  iconshelpLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  iconsprofilePhoto: {
    width: 48,
    height: 48,
  },
  chuonRaksa: {
    fontSize: FontSize.interBold16_size,
    fontWeight: "600",
    color: Color.textTextGreyLight,
  },
  iconspin: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  phnomPenhCambodia: {
    fontSize: FontSize.interBold12_size,
    color: Color.iconIconGrey,
  },
  iconspinParent: {
    marginTop: 8,
    alignItems: "center",
  },
  chuonRaksaParent: {
    marginLeft: 8,
  },
  iconsprofilePhotoParent: {
    alignItems: "center",
  },
  iconsnotificationBel: {
    marginLeft: 8,
  },
  iconshelpParent: {
    justifyContent: "flex-end",
  },
  statedefault: {
    width: 398,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default StateDefault4;
