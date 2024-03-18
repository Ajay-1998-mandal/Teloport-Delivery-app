import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

export type SteppersStepperComponentType = {
  iconsappleReminder?: ImageSourcePropType;
  sTEP1?: string;
  basicDetails?: string;

  /** Style props */
  steppersStepperComponentPosition?: string;
  steppersStepperComponentMarginLeft?: number | string;
  frameViewBackgroundColor?: string;
  iconsappleReminderOverflow?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SteppersStepperComponent = ({
  iconsappleReminder,
  sTEP1,
  basicDetails,
  steppersStepperComponentPosition,
  steppersStepperComponentMarginLeft,
  frameViewBackgroundColor,
  iconsappleReminderOverflow,
}: SteppersStepperComponentType) => {
  const steppersStepperComponentStyle = useMemo(() => {
    return {
      ...getStyleValue("position", steppersStepperComponentPosition),
      ...getStyleValue("marginLeft", steppersStepperComponentMarginLeft),
    };
  }, [steppersStepperComponentPosition, steppersStepperComponentMarginLeft]);

  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", frameViewBackgroundColor),
    };
  }, [frameViewBackgroundColor]);

  const iconsappleReminderStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", iconsappleReminderOverflow),
    };
  }, [iconsappleReminderOverflow]);

  return (
    <View
      style={[styles.steppersstepperComponent, steppersStepperComponentStyle]}
    >
      <View
        style={[
          styles.iconsappleReminderWrapper,
          styles.step1ParentFlexBox,
          frameView2Style,
        ]}
      >
        <Image
          style={[styles.iconsappleReminder, iconsappleReminderStyle]}
          contentFit="cover"
          source={iconsappleReminder}
        />
      </View>
      <View style={[styles.step1Parent, styles.step1ParentFlexBox]}>
        <Text style={styles.step1Typo}>{sTEP1}</Text>
        <Text style={[styles.basicDetails, styles.step1Typo]}>
          {basicDetails}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  step1ParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  step1Typo: {
    textAlign: "center",
    color: Color.iconIconGrey,
    fontFamily: FontFamily.interRegular10,
    lineHeight: 25,
    letterSpacing: -0.4,
    fontSize: FontSize.interBold12_size,
  },
  iconsappleReminder: {
    width: 24,
    height: 24,
  },
  iconsappleReminderWrapper: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.textTextLime,
    flexDirection: "row",
    padding: Padding.p_5xs,
  },
  basicDetails: {
    fontWeight: "500",
    marginTop: 8,
  },
  step1Parent: {
    marginTop: 8,
  },
  steppersstepperComponent: {
    alignItems: "center",
  },
});

export default SteppersStepperComponent;
