import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import ContentContainer2 from "../components/ContentContainer2";
import ConfirmationContainer from "../components/ConfirmationContainer";
import StepDefault from "../components/StepDefault";
import PaymentMethodContainer from "../components/PaymentMethodContainer";
import StateDefault1 from "../components/StateDefault1";
import TotalPriceContainer from "../components/TotalPriceContainer";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

const DeliveryStep = () => {
  return (
    <View style={styles.deliveryStep3}>
      <View style={styles.pageContents}>
        <ContentContainer2 />
        <View style={styles.blockBody}>
          <ConfirmationContainer
            productCode={require("../assets/iconscheck.png")}
            itemCode={require("../assets/iconscheck1.png")}
          />
          <View style={styles.blockAddressDetails}>
            <View style={styles.blockTitle}>
              <Text style={styles.addressDetails}>Address details</Text>
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
          <PaymentMethodContainer />
          <View style={styles.blockAddressDetails}>
            <View style={styles.blockTitle}>
              <Text style={styles.addressDetails}>Order summary</Text>
            </View>
            <StateDefault1
              option1="Size"
              value1="20 cm"
              option2="Type"
              value2="Cosmetic"
              option3="Collect time"
              value3="Express"
              option4="Delivery"
              value4="$2.00"
              showFrameView={false}
              showOption5={false}
              frameViewVisible={false}
              frameViewVisible1={false}
              frameViewVisible2={false}
              frameViewVisible3={false}
              stateDefaultPosition="unset"
              stateDefaultBorderRadius={16}
              stateDefaultPadding={16}
              stateDefaultWidth={398}
              stateDefaultMarginTop={16}
            />
          </View>
          <TotalPriceContainer
            uniqueIdText={require("../assets/iconedit1.png")}
            buttonText="Submit"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addressDetails: {
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
  blockAddressDetails: {
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
  deliveryStep3: {
    backgroundColor: Color.containerContainerBlack,
    flex: 1,
    width: "100%",
    height: 1138,
    overflow: "hidden",
  },
});

export default DeliveryStep;
