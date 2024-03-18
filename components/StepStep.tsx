import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import SteppersStepperComponent from "./SteppersStepperComponent";
import { Color } from "../GlobalStyles";

export type StepStepType = {
  iconscheck?: ImageSourcePropType;
  iconscheck1?: ImageSourcePropType;

  /** Style props */
  frameViewBackgroundColor?: string;
  iconscheckOverflow?: string;
  frameViewBackgroundColor1?: string;
  iconscheckOverflow1?: string;
  lineViewBorderColor?: string;
  lineViewBorderColor1?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StepStep = ({
  iconscheck,
  iconscheck1,
  frameViewBackgroundColor,
  iconscheckOverflow,
  frameViewBackgroundColor1,
  iconscheckOverflow1,
  lineViewBorderColor,
  lineViewBorderColor1,
}: StepStepType) => {
  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", frameViewBackgroundColor),
    };
  }, [frameViewBackgroundColor]);

  const iconsappleReminderStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", iconscheckOverflow),
    };
  }, [iconscheckOverflow]);

  const frameView2Style1 = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", frameViewBackgroundColor1),
    };
  }, [frameViewBackgroundColor1]);

  const iconsappleReminderStyle1 = useMemo(() => {
    return {
      ...getStyleValue("overflow", iconscheckOverflow1),
    };
  }, [iconscheckOverflow1]);

  const lineViewStyle = useMemo(() => {
    return {
      ...getStyleValue("borderColor", lineViewBorderColor),
    };
  }, [lineViewBorderColor]);

  const lineView1Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", lineViewBorderColor1),
    };
  }, [lineViewBorderColor1]);

  return (
    <View style={styles.stepstep2}>
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
        style={[styles.stepstep2Child, styles.stepstep2Position, lineViewStyle]}
      />
      <View
        style={[styles.stepstep2Item, styles.stepstep2Position, lineView1Style]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  stepstep2Position: {
    height: 2,
    width: 87,
    borderTopWidth: 2,
    borderColor: Color.textTextLime,
    borderStyle: "solid",
    top: "50%",
    marginTop: -17,
    position: "absolute",
  },
  stepstep2Child: {
    marginLeft: -116.5,
    left: "50%",
    zIndex: 3,
  },
  stepstep2Item: {
    right: 65,
    zIndex: 4,
  },
  stepstep2: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 363,
  },
});

export default StepStep;
