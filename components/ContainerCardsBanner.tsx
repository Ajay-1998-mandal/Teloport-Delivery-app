import * as React from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

export type ContainerCardsBannerType = {
  uniqueIdentifier?: ImageSourcePropType;
  dimensionIdentifier?: ImageSourcePropType;
  itemIdentifier?: ImageSourcePropType;
  imageDimensions?: ImageSourcePropType;
  itemCode?: ImageSourcePropType;
};

const ContainerCardsBanner = ({
  uniqueIdentifier,
  dimensionIdentifier,
  itemIdentifier,
  imageDimensions,
  itemCode,
}: ContainerCardsBannerType) => {
  return (
    <View style={styles.cardsbanner}>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={styles.getReady}>Get ready</Text>
        <Text style={[styles.min, styles.minTypo]}>min</Text>
        <Text style={[styles.text, styles.textTypo]}>10</Text>
        <Text style={[styles.moveOn, styles.textTypo]}>Move on!</Text>
        <Text style={[styles.bookNow, styles.minTypo]}>Book now!</Text>
        <Image
          style={[styles.frameIcon, styles.iconLayout]}
          contentFit="cover"
          source={uniqueIdentifier}
        />
        <Image
          style={[styles.groupItem, styles.iconLayout]}
          contentFit="cover"
          source={dimensionIdentifier}
        />
        <Image
          style={[styles.groupItem, styles.iconLayout]}
          contentFit="cover"
          source={itemIdentifier}
        />
        <Image
          style={[styles.undrawOnTheWayReSwjt1Icon, styles.iconLayout]}
          contentFit="cover"
          source={imageDimensions}
        />
      </View>
      <Image
        style={[styles.cardsbannerChild, styles.iconLayout]}
        contentFit="cover"
        source={itemCode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  minTypo: {
    letterSpacing: -0.4,
    fontSize: FontSize.interBold12_size,
    textAlign: "left",
    fontFamily: FontFamily.interRegular10,
    lineHeight: 25,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.interRegular10,
    lineHeight: 25,
    letterSpacing: -0.6,
    fontSize: FontSize.interBold20_size,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupChild: {
    height: "100%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.containerContainerGreyDark,
    bottom: "0%",
  },
  getReady: {
    top: "10.56%",
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.interRegular10,
    lineHeight: 25,
    letterSpacing: -0.6,
    fontSize: FontSize.interBold20_size,
    color: Color.textTextWhite,
    left: "10.05%",
    position: "absolute",
  },
  min: {
    top: "61.67%",
    left: "21.11%",
    color: Color.iconIconGrey,
  },
  text: {
    top: "58.33%",
    left: "15.08%",
    color: Color.textTextWhite,
    fontWeight: "700",
  },
  moveOn: {
    top: "21.67%",
    color: Color.textTextLime,
    fontWeight: "700",
    left: "10.05%",
  },
  bookNow: {
    top: "81.67%",
    left: "79.9%",
    textDecoration: "underline",
    color: Color.containerContainerLimeDark,
  },
  frameIcon: {
    height: "13.33%",
    width: "6.03%",
    top: "74.44%",
    right: "25.38%",
    bottom: "12.22%",
    left: "68.59%",
  },
  groupItem: {
    height: "55%",
    width: "24.87%",
    top: "35.56%",
    right: "67.34%",
    bottom: "9.44%",
    left: "7.79%",
    borderRadius: Border.br_81xl,
  },
  undrawOnTheWayReSwjt1Icon: {
    height: "48.89%",
    width: "50.25%",
    top: "11.67%",
    right: "5.03%",
    bottom: "39.44%",
    left: "44.72%",
  },
  rectangleParent: {
    height: "92.78%",
    bottom: "7.22%",
  },
  cardsbannerChild: {
    height: "3.09%",
    width: "16.58%",
    top: "96.91%",
    right: "41.71%",
    left: "41.71%",
    bottom: "0%",
  },
  cardsbanner: {
    width: 398,
    height: 194,
    marginTop: 48,
  },
});

export default ContainerCardsBanner;
