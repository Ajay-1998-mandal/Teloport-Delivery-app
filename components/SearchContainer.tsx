import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import StageTextFieldSearchIconL from "./StageTextFieldSearchIconL";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

export type SearchContainerType = {
  uniqueIdentifier?: ImageSourcePropType;
};

const SearchContainer = ({ uniqueIdentifier }: SearchContainerType) => {
  return (
    <View style={styles.blockSearch}>
      <View style={styles.blockText}>
        <Text style={styles.searchParcel}>Search parcel</Text>
      </View>
      <StageTextFieldSearchIconL
        iconsSearch={require("../assets/iconssearch2.png")}
        searchByTransactionID="Your parcel code.."
        stageTextFieldSearchIconLPosition="unset"
        stageTextFieldSearchIconLBackgroundColor="#202020"
        stageTextFieldSearchIconLMarginTop={16}
        searchByTransactionColor="#909090"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchParcel: {
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
  blockSearch: {
    marginTop: 48,
  },
});

export default SearchContainer;
