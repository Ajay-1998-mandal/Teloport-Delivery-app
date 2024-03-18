import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

export type IconsProfilePhotoType = {
  iconsProfilePhotoIconsPro?: ImageSourcePropType;

  /** Style props */
  iconsProfilePhotoWidth?: number | string;
  iconsProfilePhotoHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const IconsProfilePhoto = ({
  iconsProfilePhotoIconsPro,
  iconsProfilePhotoWidth,
  iconsProfilePhotoHeight,
}: IconsProfilePhotoType) => {
  const iconsProfilePhotoStyle = useMemo(() => {
    return {
      ...getStyleValue("width", iconsProfilePhotoWidth),
      ...getStyleValue("height", iconsProfilePhotoHeight),
    };
  }, [iconsProfilePhotoWidth, iconsProfilePhotoHeight]);

  return (
    <Image
      style={[styles.iconsprofilePhoto, iconsProfilePhotoStyle]}
      contentFit="cover"
      source={iconsProfilePhotoIconsPro}
    />
  );
};

const styles = StyleSheet.create({
  iconsprofilePhoto: {
    width: 48,
    height: 48,
  },
});

export default IconsProfilePhoto;
