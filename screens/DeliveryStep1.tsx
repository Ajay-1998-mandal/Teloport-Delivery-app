import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import ContentContainer2 from "../components/ContentContainer2";
import ConfirmationContainer from "../components/ConfirmationContainer";
import FormsFormTextField from "../components/FormsFormTextField";
import TypeSelectorContainer from "../components/TypeSelectorContainer";
import TotalPriceContainer from "../components/TotalPriceContainer";
import { Color, FontFamily, StyleVariable, FontSize } from "../GlobalStyles";

const DeliveryStep1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.deliveryStep2}
      onPress={() => navigation.navigate("DeliveryStep")}
    >
      <View style={styles.pageContents}>
        <ContentContainer2 />
        <View style={styles.blockBody}>
          <ConfirmationContainer
            productCode={require("../assets/iconscheck.png")}
            itemCode={require("../assets/iconsaddcirclehalfdot1.png")}
            sTEP1BackgroundColor="#9bfe03"
            basicDetailsOverflow="hidden"
            propBackgroundColor="#eee"
            propOverflow="unset"
            propBorderColor="#9bfe03"
            propBorderColor1="#eee"
          />
          <View style={styles.blockSendDetail}>
            <View style={styles.blockSpaceBlock}>
              <Text style={[styles.senderDetails, styles.saveForLaterClr]}>
                Sender details
              </Text>
            </View>
            <FormsFormTextField
              textfield="Enter sender name"
              textfield1="Enter sender phone"
              textfield2="Sender remarks"
              showFormsTextField={false}
              formsTextFieldVisible={false}
              formsTextFieldVisible1={false}
              formsFormTextFieldPosition="unset"
              formsFormTextFieldBorderRadius={24}
              formsFormTextFieldPadding={16}
              formsFormTextFieldWidth={398}
              formsFormTextFieldMarginTop={16}
            />
          </View>
          <View style={styles.blockSendDetail}>
            <View style={[styles.blockTitle1, styles.blockSpaceBlock]}>
              <View style={styles.receiverDetailsWrapper}>
                <Text style={[styles.senderDetails, styles.saveForLaterClr]}>
                  Receiver details
                </Text>
              </View>
              <Text style={[styles.saveForLater, styles.saveForLaterClr]}>
                Save for later
              </Text>
            </View>
            <FormsFormTextField
              textfield="Enter receiver name"
              textfield1="Enter receiver phone"
              textfield2="Sender remarks"
              showFormsTextField={false}
              formsTextFieldVisible={false}
              formsTextFieldVisible1={false}
              formsFormTextFieldPosition="unset"
              formsFormTextFieldBorderRadius={24}
              formsFormTextFieldPadding={16}
              formsFormTextFieldWidth={398}
              formsFormTextFieldMarginTop={16}
            />
          </View>
          <TypeSelectorContainer />
          <TotalPriceContainer
            uniqueIdText={require("../assets/iconedit1.png")}
            buttonText="Process Next"
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  saveForLaterClr: {
    color: Color.iconIconGrey,
    fontFamily: FontFamily.interRegular10,
    lineHeight: 25,
  },
  blockSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: StyleVariable.spacingSpacing16,
    flexDirection: "row",
  },
  senderDetails: {
    fontSize: FontSize.interBold16_size,
    letterSpacing: -0.5,
    fontWeight: "600",
    textAlign: "left",
  },
  blockSendDetail: {
    marginTop: 48,
  },
  receiverDetailsWrapper: {
    flexDirection: "row",
  },
  saveForLater: {
    fontSize: FontSize.interBold12_size,
    letterSpacing: -0.4,
    textAlign: "right",
  },
  blockTitle1: {
    alignSelf: "stretch",
    justifyContent: "space-between",
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
  deliveryStep2: {
    backgroundColor: Color.containerContainerBlack,
    flex: 1,
    width: "100%",
    height: 1160,
    overflow: "hidden",
  },
});

export default DeliveryStep1;
