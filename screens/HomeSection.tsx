import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const HomeSection = () => {
  return (
    <View style={styles.homeSection}>
      <View style={styles.homeSectionChild} />
      <Text style={styles.home}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeSectionChild: {
    top: 116,
    left: -5,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderTopWidth: 10,
    width: 3714,
    height: 10,
    position: "absolute",
  },
  home: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_81xl,
    fontWeight: "700",
    fontFamily: FontFamily.helveticaNeue,
    color: Color.colorGray_200,
    textAlign: "left",
    position: "absolute",
  },
  homeSection: {
    flex: 1,
    width: "100%",
    height: 121,
  },
});

export default HomeSection;
