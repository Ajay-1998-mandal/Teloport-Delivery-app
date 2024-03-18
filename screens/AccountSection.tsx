import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const AccountSection = () => {
  return (
    <View style={styles.accountSection}>
      <View style={styles.accountSectionChild} />
      <Text style={styles.account}>Account</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  accountSectionChild: {
    top: 116,
    left: -5,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderTopWidth: 10,
    width: 3714,
    height: 10,
    position: "absolute",
  },
  account: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_81xl,
    fontWeight: "700",
    fontFamily: FontFamily.helveticaNeue,
    color: Color.colorGray_200,
    textAlign: "left",
    position: "absolute",
  },
  accountSection: {
    flex: 1,
    width: "100%",
    height: 121,
  },
});

export default AccountSection;
