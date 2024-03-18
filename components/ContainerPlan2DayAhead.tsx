import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type ContainerPlan2DayAheadType = {
  dimensionCode?: ImageSourcePropType;
  dimensionCodeText?: ImageSourcePropType;
};

const ContainerPlan2DayAhead = ({
  dimensionCode,
  dimensionCodeText,
}: ContainerPlan2DayAheadType) => {
  return (
    <View style={styles.cardsselectTimeInner}>
      <View>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.iconsdollarSign}
            contentFit="cover"
            source={dimensionCode}
          />
          <Text style={styles.flexiblePrice}>Flexible price</Text>
        </View>
        <View style={[styles.iconsclockParent, styles.parentFlexBox]}>
          <Image
            style={styles.iconsdollarSign}
            contentFit="cover"
            source={dimensionCodeText}
          />
          <Text style={styles.flexiblePrice}>Plan 2 day ahead</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconsdollarSign: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  flexiblePrice: {
    fontSize: FontSize.interRegular10_size,
    lineHeight: 25,
    fontFamily: FontFamily.interRegular10,
    color: Color.iconIconGrey,
    textAlign: "left",
    marginLeft: 4,
  },
  iconsclockParent: {
    marginTop: 4,
  },
  cardsselectTimeInner: {
    alignSelf: "stretch",
  },
});

export default ContainerPlan2DayAhead;
