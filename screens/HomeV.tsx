import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import SectionContainer from "../components/SectionContainer";
import SearchContainer from "../components/SearchContainer";
import ContainerCardsBanner from "../components/ContainerCardsBanner";
import StateOption from "../components/StateOption";
import ParcelTrackingContainer from "../components/ParcelTrackingContainer";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

const HomeV = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homeV5}>
      <Pressable
        style={styles.pageContents}
        onPress={() => navigation.navigate("DeliveryStep2")}
      >
        <SectionContainer />
        <SearchContainer
          uniqueIdentifier={require("../assets/iconssearch2.png")}
        />
        <ContainerCardsBanner
          uniqueIdentifier={require("../assets/frame2.png")}
          dimensionIdentifier={require("../assets/ellipse-32.png")}
          itemIdentifier={require("../assets/ellipse-42.png")}
          imageDimensions={require("../assets/undraw-on-the-way-re-swjt-14.png")}
          itemCode={require("../assets/group-612.png")}
        />
        <View style={styles.blockMenus}>
          <View style={styles.blockText}>
            <Text style={styles.menus}>Menus</Text>
          </View>
          <StateOption
            iconsProfilePhoto={require("../assets/iconsprofile-photo6.png")}
            iconsDeliveryShape={require("../assets/iconsdelivery-shape6.png")}
            iconsMyOrderShap={require("../assets/iconsmy-order-shap4.png")}
            iconsSupportShape={require("../assets/iconssupport-shape6.png")}
            iconsSettingShape={require("../assets/iconssetting-shape4.png")}
            stateOption1Position="unset"
            stateOption1BorderRadius={24}
            stateOption1PaddingHorizontal="unset"
            stateOption1PaddingVertical="unset"
            stateOption1MarginTop={16}
          />
        </View>
        <ParcelTrackingContainer
          iconsLocation={require("../assets/iconslocation2.png")}
          vector2={require("../assets/vector-23.png")}
          iconsLocation1={require("../assets/iconslocation2.png")}
          group63={require("../assets/group-632.png")}
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
  homeV5: {
    backgroundColor: Color.containerContainerBlack,
    flex: 1,
    width: "100%",
    height: 1086,
    overflow: "hidden",
  },
});

export default HomeV;
