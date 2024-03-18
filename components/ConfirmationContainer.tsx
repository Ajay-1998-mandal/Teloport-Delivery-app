import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import SteppersStepperComponent from "./SteppersStepperComponent";
import { Color } from "../GlobalStyles";

export type ConfirmationContainerType = {
  productCode?: ImageSourcePropType;
  itemCode?: ImageSourcePropType;

  /** Style props */
  sTEP1BackgroundColor?: string;
  basicDetailsOverflow?: string;
  propBackgroundColor?: string;
  propOverflow?: string;
  propBorderColor?: string;
  propBorderColor1?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ConfirmationContainer = ({
  productCode,
  itemCode,
  sTEP1BackgroundColor,
  basicDetailsOverflow,
  propBackgroundColor,
  propOverflow,
  propBorderColor,
  propBorderColor1,
}: ConfirmationContainerType) => {
  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", sTEP1BackgroundColor),
    };
  }, [sTEP1BackgroundColor]);

  const iconsappleReminderStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", basicDetailsOverflow),
    };
  }, [basicDetailsOverflow]);

  const frameView2Style1 = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const iconsappleReminderStyle1 = useMemo(() => {
    return {
      ...getStyleValue("overflow", propOverflow),
    };
  }, [propOverflow]);

  const lineView2Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", propBorderColor),
    };
  }, [propBorderColor]);

  const lineView3Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", propBorderColor1),
    };
  }, [propBorderColor1]);

  return (
    <View style={styles.steppersstepper}>
      <SteppersStepperComponent
        iconsappleReminder={require("../assets/iconscheck.png")}
        sTEP1="STEP 1"
        basicDetails="Basic Details"
        steppersStepperComponentPosition="unset"
        steppersStepperComponentMarginLeft="unset"
        frameViewBackgroundColor="#9bfe03"
        iconsappleReminderOverflow="hidden"
      />
      <SteppersStepperComponent
        iconsappleReminder={require("../assets/iconscheck1.png")}
        sTEP1="STEP 2"
        basicDetails="Information"
        steppersStepperComponentPosition="unset"
        steppersStepperComponentMarginLeft={78}
        frameViewBackgroundColor="#9bfe03"
        iconsappleReminderOverflow="hidden"
      />
      <SteppersStepperComponent
        iconsappleReminder={require("../assets/iconsaudit.png")}
        sTEP1="STEP 3"
        basicDetails="Confirmation"
        steppersStepperComponentPosition="unset"
        steppersStepperComponentMarginLeft={78}
        frameViewBackgroundColor="#eee"
        iconsappleReminderOverflow="unset"
      />
      <View
        style={[
          styles.steppersstepperChild,
          styles.steppersstepperPosition,
          lineView2Style,
        ]}
      />
      <View
        style={[
          styles.steppersstepperItem,
          styles.steppersstepperPosition,
          lineView3Style,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  steppersstepperPosition: {
    height: 2,
    width: 87,
    borderTopWidth: 2,
    borderColor: Color.textTextLime,
    borderStyle: "solid",
    top: "50%",
    marginTop: -17,
    position: "absolute",
  },
  steppersstepperChild: {
    marginLeft: -116.5,
    left: "50%",
    zIndex: 3,
  },
  steppersstepperItem: {
    right: 65,
    zIndex: 4,
  },
  steppersstepper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 363,
  },
});

export default ConfirmationContainer;
