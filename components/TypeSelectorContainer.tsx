import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Property1Type from "./Property1Type";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

const TypeSelectorContainer = () => {
  return (
    <View style={styles.blockChooseType}>
      <View style={styles.blockTitle}>
        <Text style={styles.chooseType}>Choose type</Text>
      </View>
      <Property1Type
        iconEdit={require("../assets/iconedit4.png")}
        iconEdit1={require("../assets/iconedit4.png")}
        iconEdit2={require("../assets/iconedit4.png")}
        iconEdit3={require("../assets/iconedit4.png")}
        iconEdit4={require("../assets/iconedit4.png")}
        iconEdit5={require("../assets/iconedit4.png")}
        iconEdit6={require("../assets/iconedit4.png")}
        iconEdit7={require("../assets/iconedit4.png")}
        showButton={false}
        property1TypePosition="unset"
        property1TypeWidth={398}
        property1TypePaddingHorizontal="unset"
        property1TypePaddingVertical="unset"
        property1TypeMarginTop={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chooseType: {
    fontSize: FontSize.interBold16_size,
    letterSpacing: -0.5,
    lineHeight: 25,
    fontWeight: "600",
    fontFamily: FontFamily.interRegular10,
    color: Color.iconIconGrey,
    textAlign: "left",
  },
  blockTitle: {
    flexDirection: "row",
    paddingHorizontal: StyleVariable.spacingSpacing16,
    paddingVertical: 0,
  },
  blockChooseType: {
    marginTop: 48,
  },
});

export default TypeSelectorContainer;
