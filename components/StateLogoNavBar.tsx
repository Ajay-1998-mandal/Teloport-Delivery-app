import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import IconsLogo from "./IconsLogo";

export type StateLogoNavBarType = {
  group?: ImageSourcePropType;
  iconsHelp?: ImageSourcePropType;
  iconsNotificationBel?: ImageSourcePropType;

  /** Style props */
  stateLogoNavBarPosition?: string;
  stateLogoNavBarMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateLogoNavBar = ({
  group,
  iconsHelp,
  iconsNotificationBel,
  stateLogoNavBarPosition,
  stateLogoNavBarMarginTop,
}: StateLogoNavBarType) => {
  const stateLogoNavBarStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stateLogoNavBarPosition),
      ...getStyleValue("marginTop", stateLogoNavBarMarginTop),
    };
  }, [stateLogoNavBarPosition, stateLogoNavBarMarginTop]);

  return (
    <View style={[styles.statelogoNavBar, stateLogoNavBarStyle]}>
      <View style={[styles.iconslogoWrapper, styles.iconshelpParentFlexBox]}>
        <IconsLogo group={require("../assets/group1.png")} />
      </View>
      <View style={[styles.iconshelpParent, styles.iconshelpParentFlexBox]}>
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
  iconshelpParentFlexBox: {
    flex: 1,
    flexDirection: "row",
  },
  iconshelpLayout: {
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  iconslogoWrapper: {
    alignItems: "center",
  },
  iconsnotificationBel: {
    marginLeft: 8,
  },
  iconshelpParent: {
    justifyContent: "flex-end",
  },
  statelogoNavBar: {
    width: 398,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default StateLogoNavBar;
