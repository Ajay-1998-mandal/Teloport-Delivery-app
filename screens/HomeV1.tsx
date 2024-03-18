import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import SectionContainer from "../components/SectionContainer";
import SearchContainer from "../components/SearchContainer";
import ContainerCardsBanner from "../components/ContainerCardsBanner";
import MenuContainer2 from "../components/MenuContainer2";
import ParcelTrackingContainer from "../components/ParcelTrackingContainer";
import { Color } from "../GlobalStyles";

const HomeV1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homeV4}>
      <Pressable
        style={styles.pageContents}
        onPress={() => navigation.navigate("HomeV")}
      >
        <SectionContainer />
        <SearchContainer
          uniqueIdentifier={require("../assets/iconssearch2.png")}
        />
        <ContainerCardsBanner
          uniqueIdentifier={require("../assets/frame2.png")}
          dimensionIdentifier={require("../assets/ellipse-32.png")}
          itemIdentifier={require("../assets/ellipse-42.png")}
          imageDimensions={require("../assets/undraw-on-the-way-re-swjt-13.png")}
          itemCode={require("../assets/group-612.png")}
        />
        <MenuContainer2 />
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
  pageContents: {
    position: "absolute",
    top: 16,
    left: 0,
    alignItems: "center",
  },
  homeV4: {
    backgroundColor: Color.containerContainerBlack,
    flex: 1,
    width: "100%",
    height: 1131,
    overflow: "hidden",
  },
});

export default HomeV1;
