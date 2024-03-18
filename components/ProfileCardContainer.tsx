import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import IconsProfilePhoto from "./IconsProfilePhoto";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

export type ProfileCardContainerType = {
  iconCode?: ImageSourcePropType;
  dimensionCode?: ImageSourcePropType;
  itemCode?: ImageSourcePropType;
};

const ProfileCardContainer = ({
  iconCode,
  dimensionCode,
  itemCode,
}: ProfileCardContainerType) => {
  return (
    <View style={styles.cardsprofileAndName}>
      <IconsProfilePhoto
        iconsProfilePhotoIconsPro={require("../assets/iconsprofile-photo5.png")}
        iconsProfilePhotoWidth={62}
        iconsProfilePhotoHeight={62}
      />
      <View style={[styles.chuonRaksaParent, styles.parentSpaceBlock]}>
        <Text style={[styles.chuonRaksa, styles.phnomPenhTypo]}>
          Chuon Raksa
        </Text>
        <View style={[styles.iconspinParent, styles.parentSpaceBlock]}>
          <Image
            style={styles.iconspin}
            contentFit="cover"
            source={dimensionCode}
          />
          <Text style={[styles.phnomPenh, styles.phnomPenhTypo]}>
            phnom penh
          </Text>
          <Image style={styles.iconspin} contentFit="cover" source={itemCode} />
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
  cardsprofileAndName: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileCardContainer;
