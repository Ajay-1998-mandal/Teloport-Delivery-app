import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import ContentContainer1 from "../components/ContentContainer1";
import SearchContainer from "../components/SearchContainer";
import ContainerCardsBanner from "../components/ContainerCardsBanner";
import StateOption from "../components/StateOption";
import ParcelTrackingContainer from "../components/ParcelTrackingContainer";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

const HomeV3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homeV2}>
      <Pressable
        style={styles.pageContents}
        onPress={() => navigation.navigate("HomeV2")}
      >
        <ContentContainer1 />
        <SearchContainer
          uniqueIdentifier={require("../assets/iconssearch1.png")}
        />
        <ContainerCardsBanner
          uniqueIdentifier={require("../assets/frame1.png")}
          dimensionIdentifier={require("../assets/ellipse-31.png")}
          itemIdentifier={require("../assets/ellipse-41.png")}
          imageDimensions={require("../assets/undraw-on-the-way-re-swjt-15.png")}
          itemCode={require("../assets/group-611.png")}
        />
        <View style={styles.blockMenus}>
          <View style={styles.blockText}>
            <Text style={styles.menus}>Menus</Text>
          </View>
          <StateOption
            iconsProfilePhoto={require("../assets/iconsprofile-photo4.png")}
            iconsDeliveryShape={require("../assets/iconsdelivery-shape.png")}
            iconsMyOrderShap={require("../assets/iconsmy-order-shap.png")}
            iconsSupportShape={require("../assets/iconssupport-shape2.png")}
            iconsSettingShape={require("../assets/iconssetting-shape1.png")}
            stateOption1Position="unset"
            stateOption1BorderRadius={24}
            stateOption1PaddingHorizontal="unset"
            stateOption1PaddingVertical="unset"
            stateOption1MarginTop={16}
          />
        </View>
        <ParcelTrackingContainer
          iconsLocation={require("../assets/iconslocation1.png")}
          vector2={require("../assets/vector-22.png")}
          iconsLocation1={require("../assets/iconslocation1.png")}
          group63={require("../assets/group-631.png")}
        />
      </Pressable>
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
  pageContents: {
    position: "absolute",
    top: 16,
    left: 0,
    alignItems: "center",
  },
  homeV2: {
    backgroundColor: Color.containerContainerBlack,
    flex: 1,
    width: "100%",
    height: 1103,
    overflow: "hidden",
  },
});

export default HomeV3;
