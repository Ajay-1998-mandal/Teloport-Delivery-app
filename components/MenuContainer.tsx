import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import StateDefault5 from "./StateDefault5";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

const MenuContainer = () => {
  return (
    <View style={styles.blockMenus}>
      <View style={styles.blockText}>
        <Text style={styles.menus}>Menus</Text>
      </View>
      <StateDefault5
        iconsDelivery={require("../assets/iconsdelivery1.png")}
        iconsMyOrder={require("../assets/iconsmy-order1.png")}
        iconsSupport={require("../assets/iconssupport1.png")}
        iconsSetting={require("../assets/iconssetting1.png")}
        stateDefaultPosition="unset"
        stateDefaultBorderRadius={24}
        stateDefaultPadding={40}
        stateDefaultMarginTop={16}
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

export default MenuContainer;
