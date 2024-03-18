import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import StateType from "./StateType";
import { StyleVariable, Color } from "../GlobalStyles";

export type SettingCardsContainerType = {
  iconId?: ImageSourcePropType;
  uniqueIdentifierText?: ImageSourcePropType;
};

const SettingCardsContainer = ({
  iconId,
  uniqueIdentifierText,
}: SettingCardsContainerType) => {
  return (
    <View style={styles.cardsmenuTypeComponent}>
      <StateType
        iconsSettingShape={require("../assets/iconssupport-shape6.png")}
        deliveries="Support"
        stateType2Position="unset"
        stateType2FlexDirection="row"
        stateType2MarginLeft="unset"
        stateType2MarginTop="unset"
        stateType2BackgroundColor="unset"
        stateType2Width="unset"
        stateType2Padding="unset"
        iconsSettingShapeWidth={24}
        iconsSettingShapeHeight={24}
        iconsSettingShapeOverflow="hidden"
        deliveriesMarginLeft={8}
        deliveriesMarginTop="unset"
        deliveriesColor="#909090"
      />
      <StateType
        iconsSettingShape={require("../assets/iconssetting-shape4.png")}
        deliveries="Setting"
        stateType2Position="unset"
        stateType2FlexDirection="row"
        stateType2MarginLeft="unset"
        stateType2MarginTop={16}
        stateType2BackgroundColor="unset"
        stateType2Width="unset"
        stateType2Padding="unset"
        iconsSettingShapeWidth={24}
        iconsSettingShapeHeight={24}
        iconsSettingShapeOverflow="hidden"
        deliveriesMarginLeft={8}
        deliveriesMarginTop="unset"
        deliveriesColor="#909090"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardsmenuTypeComponent: {
    borderRadius: StyleVariable.spacingSpacing16,
    backgroundColor: Color.containerContainerLimeDark,
    paddingHorizontal: StyleVariable.spacingSpacing24,
    paddingVertical: StyleVariable.spacingSpacing16,
    marginLeft: 8,
  },
});

export default SettingCardsContainer;
