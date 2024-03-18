import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Property1Dimension from "./Property1Dimension";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const DimensionContainer = () => {
  return (
    <View style={styles.blockDimension}>
      <Text style={styles.dimension}>Dimension</Text>
      <Property1Dimension
        iconEdit={require("../assets/iconedit2.png")}
        iconEdit1={require("../assets/iconedit2.png")}
        iconEdit2={require("../assets/iconedit2.png")}
        iconEdit3={require("../assets/iconedit2.png")}
        iconEdit4={require("../assets/iconedit2.png")}
        property1DimensionPosition="unset"
        property1DimensionMarginTop={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dimension: {
    fontSize: FontSize.interBold12_size,
    letterSpacing: -0.4,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: FontFamily.interRegular10,
    color: Color.iconIconGrey,
    textAlign: "left",
  },
  blockDimension: {
    marginTop: 48,
  },
});

export default DimensionContainer;
