import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import StateOption1 from "./StateOption1";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

const MenuContainer2 = () => {
  return (
    <View style={styles.blockMenus}>
      <View style={styles.blockText}>
        <Text style={styles.menus}>Menus</Text>
      </View>
      <StateOption1
        iconsProfilePhoto={require("../assets/iconsprofile-photo5.png")}
        iconsPin={require("../assets/iconspin2.png")}
        iconschevronDown={require("../assets/iconschevrondown2.png")}
        iconsDeliveryShape={require("../assets/iconsdelivery-shape4.png")}
        iconsMyOrderShap={require("../assets/iconsmy-order-shap3.png")}
        iconsSupportShape={require("../assets/iconssupport-shape5.png")}
        iconsDeliveryShape1={require("../assets/iconsdelivery-shape5.png")}
        stateOption3Position="unset"
        stateOption3BorderRadius={24}
        stateOption3PaddingHorizontal="unset"
        stateOption3MarginTop={16}
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

export default MenuContainer2;
