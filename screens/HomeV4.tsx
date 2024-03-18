import * as React from "react";
import { StyleSheet, View, Pressable, ImageBackground } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import ContentContainer from "../components/ContentContainer";
import SearchContainer from "../components/SearchContainer";
import ContainerCardsBanner from "../components/ContainerCardsBanner";
import MenuContainer from "../components/MenuContainer";
import ParcelTrackingContainer from "../components/ParcelTrackingContainer";

const HomeV4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      style={styles.homeV1Icon}
      resizeMode="cover"
      source={require("../assets/homev1.png")}
    >
      <Pressable
        style={styles.pageContents}
        onPress={() => navigation.navigate("HomeV3")}
      >
        <ContentContainer />
        <SearchContainer
          uniqueIdentifier={require("../assets/iconssearch1.png")}
        />
        <ContainerCardsBanner
          uniqueIdentifier={require("../assets/frame1.png")}
          dimensionIdentifier={require("../assets/ellipse-31.png")}
          itemIdentifier={require("../assets/ellipse-41.png")}
          imageDimensions={require("../assets/undraw-on-the-way-re-swjt-11.png")}
          itemCode={require("../assets/group-611.png")}
        />
        <MenuContainer />
        <ParcelTrackingContainer
          iconsLocation={require("../assets/iconslocation1.png")}
          vector2={require("../assets/vector-22.png")}
          iconsLocation1={require("../assets/iconslocation1.png")}
          group63={require("../assets/group-631.png")}
        />
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  pageContents: {
    position: "absolute",
    top: 16,
    left: 0,
    alignItems: "center",
  },
  homeV1Icon: {
    flex: 1,
    width: "100%",
    height: 1069,
    overflow: "hidden",
  },
});

export default HomeV4;
