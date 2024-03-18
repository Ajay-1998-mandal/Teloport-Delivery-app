import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import {
  FontSize,
  FontFamily,
  Color,
  StyleVariable,
  Padding,
} from "../GlobalStyles";

export type StageTextFieldSearchIconLType = {
  iconsSearch?: ImageSourcePropType;
  searchByTransactionID?: string;

  /** Style props */
  stageTextFieldSearchIconLPosition?: string;
  stageTextFieldSearchIconLBackgroundColor?: string;
  stageTextFieldSearchIconLMarginTop?: number | string;
  searchByTransactionColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StageTextFieldSearchIconL = ({
  iconsSearch,
  searchByTransactionID,
  stageTextFieldSearchIconLPosition,
  stageTextFieldSearchIconLBackgroundColor,
  stageTextFieldSearchIconLMarginTop,
  searchByTransactionColor,
}: StageTextFieldSearchIconLType) => {
  const stageTextFieldSearchIconLStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stageTextFieldSearchIconLPosition),
      ...getStyleValue(
        "backgroundColor",
        stageTextFieldSearchIconLBackgroundColor
      ),
      ...getStyleValue("marginTop", stageTextFieldSearchIconLMarginTop),
    };
  }, [
    stageTextFieldSearchIconLPosition,
    stageTextFieldSearchIconLBackgroundColor,
    stageTextFieldSearchIconLMarginTop,
  ]);

  const searchByTransactionStyle = useMemo(() => {
    return {
      ...getStyleValue("color", searchByTransactionColor),
    };
  }, [searchByTransactionColor]);

  return (
    <View
      style={[
        styles.stagetextFieldSearchIconL,
        styles.iconssearchParentFlexBox,
        stageTextFieldSearchIconLStyle,
      ]}
    >
      <View style={[styles.iconssearchParent, styles.iconssearchParentFlexBox]}>
        <Image
          style={styles.iconssearch}
          contentFit="cover"
          source={iconsSearch}
        />
        <Text style={[styles.searchByTransaction, searchByTransactionStyle]}>
          {searchByTransactionID}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconssearchParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconssearch: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  searchByTransaction: {
    fontSize: FontSize.interBold12_size,
    fontFamily: FontFamily.openSans12,
    color: Color.textTextGrey,
    textAlign: "left",
    marginLeft: 4,
  },
  iconssearchParent: {
    width: 258,
  },
  stagetextFieldSearchIconL: {
    borderRadius: StyleVariable.radiusRadius56,
    backgroundColor: Color.textfieldTextfieldGrey,
    width: 396,
    height: 48,
    paddingHorizontal: StyleVariable.spacingSpacing161,
    paddingVertical: Padding.p_3xs,
  },
});

export default StageTextFieldSearchIconL;
