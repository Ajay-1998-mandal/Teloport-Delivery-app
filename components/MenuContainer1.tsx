import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import StateOption3 from "./StateOption3";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

const MenuContainer1 = () => {
  return (
    <View style={styles.blockMenus}>
      <View style={styles.blockText}>
        <Text style={styles.menus}>Menus</Text>
      </View>
      <StateOption3
        iconsProfilePhoto={require("../assets/iconsprofile-photo4.png")}
        iconsDeliveryShape={require("../assets/iconsdelivery-shape3.png")}
        iconsSupportShape={require("../assets/iconssupport-shape4.png")}
        iconsMyOrderShap={require("../assets/iconsmy-order-shap2.png")}
        iconsSettingShape={require("../assets/iconssetting-shape3.png")}
        stateOption2Position="unset"
        stateOption2BorderRadius={24}
        stateOption2PaddingHorizontal="unset"
        stateOption2PaddingVertical="unset"
        stateOption2MarginTop={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menus: {
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
  blockMenus: {
    marginTop: 48,
  },
});

export default MenuContainer1;
