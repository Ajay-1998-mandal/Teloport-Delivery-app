import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import ContentContainer2 from "../components/ContentContainer2";
import Property1Insights from "../components/Property1Insights";
import ContainerCards from "../components/ContainerCards";
import {
  FontFamily,
  Color,
  FontSize,
  Border,
  StyleVariable,
} from "../GlobalStyles";

const Account = () => {
  return (
    <View style={styles.account}>
      <View style={[styles.pageContents, styles.pageContentsPosition]}>
        <ContentContainer2 />
        <View style={styles.blockBody}>
          <View style={styles.blockOverviewsProfile}>
            <View style={styles.blockProfile}>
              <View style={styles.profile}>
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/icon.png")}
                />
                <Text style={[styles.chuonRaksa, styles.phnomPenhTypo]}>
                  CHUON Raksa
                </Text>
                <View
                  style={[
                    styles.locationUndefinedGlyphParent,
                    styles.locationLayout,
                  ]}
                >
                  <Image
                    style={[
                      styles.locationUndefinedGlyph,
                      styles.locationLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/location--undefined--glyph-undefined2.png")}
                  />
                  <Text style={[styles.phnomPenh, styles.phnomPenhTypo]}>
                    phnom penh
                  </Text>
                  <Image
                    style={styles.chevronDownUndefinedGly}
                    contentFit="cover"
                    source={require("../assets/chevron-down--undefined--glyph-undefined.png")}
                  />
                </View>
              </View>
              <View style={styles.boxs}>
                <Property1Insights
                  title="0 Progress"
                  caption="delivery"
                  property1InsightsPosition="unset"
                  property1InsightsWidth={118}
                  property1InsightsHeight={75}
                  property1InsightsBackgroundColor="#e9fac8"
                  property1InsightsPadding="~S_DT_~StyleVariable.spacingSpacing24"
                  property1InsightsMarginLeft="unset"
                  titleColor="#202020"
                  captionColor="#909090"
                />
                <Property1Insights
                  title="12 Parcels"
                  caption="send"
                  property1InsightsPosition="unset"
                  property1InsightsWidth={118}
                  property1InsightsHeight={75}
                  property1InsightsBorderRadius={16}
                  property1InsightsBackgroundColor="#3b3f34"
                  property1InsightsPadding={24}
                  property1InsightsMarginLeft={8}
                  titleColor="#e9fac8"
                  captionColor="#e9fac8"
                />
                <Property1Insights
                  title="30 Parcels"
                  caption="completed"
                  property1InsightsPosition="unset"
                  property1InsightsWidth={118}
                  property1InsightsHeight={75}
                  property1InsightsBorderRadius={16}
                  property1InsightsBackgroundColor="#202020"
                  property1InsightsPadding={24}
                  property1InsightsMarginLeft={8}
                  titleColor="#e9fac8"
                  captionColor="#e9fac8"
                />
              </View>
              <Image
                style={styles.editIcon}
                contentFit="cover"
                source={require("../assets/edit-icon.png")}
              />
            </View>
            <View style={styles.blockOverview}>
              <View>
                <View style={styles.blockTitle}>
                  <Text style={styles.overviews}>Overviews</Text>
                </View>
                <ContainerCards
                  iconId={require("../assets/iconsusers.png")}
                  menuItemText="Account"
                  iconIdentifier={require("../assets/iconspin3.png")}
                  menuOptionIdentifier="Address"
                  menuItemIconId={require("../assets/iconsheadphones.png")}
                  menuItemLabel="Contact Us"
                  menuItemCode={require("../assets/iconshelp4.png")}
                  sectionTitle="About Us"
                  iconIdentifierText={require("../assets/iconssettings.png")}
                  menuItemIdentifier="Setting"
                  showFrameView
                  frameViewVisible
                  frameViewVisible1
                  frameViewVisible2
                />
              </View>
              <ContainerCards
                iconId={require("../assets/iconslogout.png")}
                menuItemText="Logout"
                iconIdentifier={require("../assets/iconsvoucher1.png")}
                menuOptionIdentifier="Option 2"
                menuItemIconId={require("../assets/iconsvoucher1.png")}
                menuItemLabel="Option 3"
                menuItemCode={require("../assets/iconsvoucher1.png")}
                sectionTitle="Option 4"
                iconIdentifierText={require("../assets/iconsvoucher1.png")}
                menuItemIdentifier="Option 5"
                showFrameView={false}
                frameViewVisible={false}
                frameViewVisible1={false}
                frameViewVisible2={false}
                propPadding="unset"
                propPaddingHorizontal="unset"
                propPaddingVertical="unset"
              />
            </View>
          </View>
          <View style={styles.blockAppVersion}>
            <Text style={[styles.appVersion100, styles.appVersion100Typo]}>
              App version 1.0.0
            </Text>
            <Text
              style={[styles.parcelDeliveryExpress, styles.appVersion100Typo]}
            >
              Parcel delivery express
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContentsPosition: {
    left: 0,
    top: 0,
  },
  phnomPenhTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular10,
    position: "absolute",
  },
  locationLayout: {
    height: 16,
    position: "absolute",
  },
  appVersion100Typo: {
    textAlign: "center",
    lineHeight: 25,
    fontFamily: FontFamily.interRegular10,
  },
  icon: {
    left: 24,
    width: 64,
    height: 64,
    top: 0,
    position: "absolute",
  },
  chuonRaksa: {
    top: 77,
    color: Color.textTextGreyLight,
    fontWeight: "600",
    fontSize: FontSize.interBold16_size,
    fontFamily: FontFamily.interRegular10,
    left: 0,
  },
  locationUndefinedGlyph: {
    width: 14,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  phnomPenh: {
    top: 3,
    left: 17,
    color: "rgba(173, 181, 189, 0.5)",
    fontSize: FontSize.interBold12_size,
  },
  chevronDownUndefinedGly: {
    top: 5,
    left: 91,
    width: 10,
    height: 6,
    position: "absolute",
    overflow: "hidden",
  },
  locationUndefinedGlyphParent: {
    top: 97,
    left: 5,
    width: 101,
  },
  profile: {
    width: 111,
    height: 113,
    zIndex: 0,
  },
  boxs: {
    zIndex: 1,
    flexDirection: "row",
    marginTop: 48,
  },
  editIcon: {
    top: 39,
    left: 192,
    borderRadius: Border.br_81xl,
    width: 24,
    height: 24,
    zIndex: 2,
    position: "absolute",
  },
  blockProfile: {
    alignItems: "center",
  },
  overviews: {
    letterSpacing: -0.5,
    color: Color.iconIconGrey,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: FontFamily.interRegular10,
    fontWeight: "600",
    fontSize: FontSize.interBold16_size,
  },
  blockTitle: {
    paddingHorizontal: StyleVariable.spacingSpacing16,
    paddingVertical: 0,
    flexDirection: "row",
  },
  blockOverview: {
    marginTop: 40,
  },
  blockOverviewsProfile: {
    alignItems: "center",
  },
  appVersion100: {
    letterSpacing: -0.4,
    fontWeight: "500",
    color: Color.iconIconGrey,
    fontSize: FontSize.interBold12_size,
  },
  parcelDeliveryExpress: {
    fontSize: FontSize.interRegular10_size,
    color: Color.containerContainerLimeDark,
    marginTop: 4,
  },
  blockAppVersion: {
    marginTop: 64,
    alignItems: "center",
  },
  blockBody: {
    marginTop: 48,
    alignItems: "center",
  },
  pageContents: {
    alignItems: "center",
    position: "absolute",
  },
  account: {
    backgroundColor: Color.containerContainerBlack,
    flex: 1,
    width: "100%",
    height: 947,
    overflow: "hidden",
  },
});

export default Account;
