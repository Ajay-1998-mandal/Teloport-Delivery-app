import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type IconsLogoType = {
  group?: ImageSourcePropType;
};

const IconsLogo = ({ group }: IconsLogoType) => {
  return (
    <View style={styles.iconslogo}>
      <Text style={styles.doek}>Doek</Text>
      <Image style={styles.groupIcon} contentFit="cover" source={group} />
    </View>
  );
};

const styles = StyleSheet.create({
  doek: {
    top: "46.07%",
    left: "61.39%",
    fontSize: FontSize.interBold16_size,
    fontWeight: "300",
    fontFamily: FontFamily.interRegular10,
    color: Color.textTextLime,
    textAlign: "left",
    position: "absolute",
  },
  groupIcon: {
    height: "100%",
    width: "57.43%",
    top: "0%",
    right: "42.57%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  iconslogo: {
    width: 101,
    height: 37,
  },
});

export default IconsLogo;
