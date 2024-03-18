import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import ContentContainer2 from "../components/ContentContainer2";
import ConfirmationContainer from "../components/ConfirmationContainer";
import StepDefault from "../components/StepDefault";
import TimeCollectionContainer from "../components/TimeCollectionContainer";
import PackageTypeSelectorContainer from "../components/PackageTypeSelectorContainer";
import DimensionContainer from "../components/DimensionContainer";
import TotalPriceContainer from "../components/TotalPriceContainer";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

const DeliveryStep2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.deliveryStep1}
      onPress={() => navigation.navigate("DeliveryStep1")}
    >
      <View style={styles.pageContents}>
        <ContentContainer2 />
        <View style={styles.blockBody}>
          <ConfirmationContainer
            productCode={require("../assets/iconsapplereminder1.png")}
            itemCode={require("../assets/iconsaddcirclehalfdot1.png")}
            sTEP1BackgroundColor="#eee"
            basicDetailsOverflow="unset"
            propBackgroundColor="#eee"
            propOverflow="unset"
            propBorderColor="#eee"
            propBorderColor1="#eee"
          />
          <View style={styles.blockSelectLocation}>
            <View style={styles.blockTitle}>
              <Text style={styles.selectLocation}>Select location</Text>
            </View>
            <StepDefault
              iconsEdit={require("../assets/iconsedit1.png")}
              iconsEdit1={require("../assets/iconsedit1.png")}
              iconsClock={require("../assets/iconsclock2.png")}
              locationUndefinedGlyphUnd={require("../assets/location--undefined--glyph-undefined1.png")}
              vector2={require("../assets/vector-24.png")}
              locationUndefinedGlyphUnd1={require("../assets/location--undefined--glyph-undefined1.png")}
              stepDefaultBorderRadius={24}
              stepDefaultPaddingVertical="unset"
              stepDefaultMarginTop={16}
            />
          </View>
          <TimeCollectionContainer />
          <PackageTypeSelectorContainer />
          <DimensionContainer />
          <TotalPriceContainer
            uniqueIdText={require("../assets/iconedit3.png")}
            buttonText="Process Next"
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  selectLocation: {
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
  blockSelectLocation: {
    marginTop: 48,
  },
  blockBody: {
    alignItems: "center",
    marginTop: 32,
  },
  pageContents: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  deliveryStep1: {
    backgroundColor: Color.containerContainerBlack,
    flex: 1,
    width: "100%",
    height: 1156,
    overflow: "hidden",
  },
});

export default DeliveryStep2;
