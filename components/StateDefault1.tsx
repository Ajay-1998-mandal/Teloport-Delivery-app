import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, StyleVariable } from "../GlobalStyles";

export type StateDefault1Type = {
  option1?: string;
  value1?: string;
  option2?: string;
  value2?: string;
  option3?: string;
  value3?: string;
  option4?: string;
  value4?: string;
  showFrameView?: boolean;
  showOption5?: boolean;
  frameViewVisible?: boolean;
  frameViewVisible1?: boolean;
  frameViewVisible2?: boolean;
  frameViewVisible3?: boolean;

  /** Style props */
  stateDefaultPosition?: string;
  stateDefaultBorderRadius?: number;
  stateDefaultPadding?: number | string;
  stateDefaultWidth?: number | string;
  stateDefaultMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateDefault1 = ({
  option1,
  value1,
  option2,
  value2,
  option3,
  value3,
  option4,
  value4,
  showFrameView,
  showOption5,
  frameViewVisible,
  frameViewVisible1,
  frameViewVisible2,
  frameViewVisible3,
  stateDefaultPosition,
  stateDefaultBorderRadius,
  stateDefaultPadding,
  stateDefaultWidth,
  stateDefaultMarginTop,
}: StateDefault1Type) => {
  const stateDefault4Style = useMemo(() => {
    return {
      ...getStyleValue("position", stateDefaultPosition),
      ...getStyleValue("borderRadius", stateDefaultBorderRadius),
      ...getStyleValue("padding", stateDefaultPadding),
      ...getStyleValue("width", stateDefaultWidth),
      ...getStyleValue("marginTop", stateDefaultMarginTop),
    };
  }, [
    stateDefaultPosition,
    stateDefaultBorderRadius,
    stateDefaultPadding,
    stateDefaultWidth,
    stateDefaultMarginTop,
  ]);

  return (
    <View style={[styles.statedefault, stateDefault4Style]}>
      <View style={styles.parentFlexBox}>
        <Text style={[styles.option1, styles.value1Typo]}>{option1}</Text>
        <Text style={[styles.value1, styles.value1Typo]}>{value1}</Text>
      </View>
      <View style={[styles.option2Parent, styles.parentFlexBox]}>
        <Text style={[styles.option1, styles.value1Typo]}>{option2}</Text>
        <Text style={[styles.value1, styles.value1Typo]}>{value2}</Text>
      </View>
      <View style={[styles.option2Parent, styles.parentFlexBox]}>
        <Text style={[styles.option1, styles.value1Typo]}>{option3}</Text>
        <Text style={[styles.value1, styles.value1Typo]}>{value3}</Text>
      </View>
      <View style={[styles.option2Parent, styles.parentFlexBox]}>
        <Text style={[styles.option1, styles.value1Typo]}>{option4}</Text>
        <Text style={[styles.value1, styles.value1Typo]}>{value4}</Text>
      </View>
      {showFrameView && (
        <View style={[styles.option2Parent, styles.parentFlexBox]}>
          {showOption5 && (
            <Text style={[styles.option1, styles.value1Typo]}>Option 5</Text>
          )}
          <Text style={[styles.value1, styles.value1Typo]}>Value 5</Text>
        </View>
      )}
      {frameViewVisible && (
        <View style={[styles.option2Parent, styles.parentFlexBox]}>
          <Text style={[styles.option1, styles.value1Typo]}>Option 6</Text>
          <Text style={[styles.value1, styles.value1Typo]}>Value 6</Text>
        </View>
      )}
      {frameViewVisible1 && (
        <View style={[styles.option2Parent, styles.parentFlexBox]}>
          <Text style={[styles.option1, styles.value1Typo]}>Option 7</Text>
          <Text style={[styles.value1, styles.value1Typo]}>Value 7</Text>
        </View>
      )}
      {frameViewVisible2 && (
        <View style={[styles.option2Parent, styles.parentFlexBox]}>
          <Text style={[styles.option1, styles.value1Typo]}>Option 8</Text>
          <Text style={[styles.value1, styles.value1Typo]}>Value 8</Text>
        </View>
      )}
      {frameViewVisible3 && (
        <View style={[styles.option2Parent, styles.parentFlexBox]}>
          <Text style={[styles.option1, styles.value1Typo]}>Option 9</Text>
          <Text style={[styles.value1, styles.value1Typo]}>Value 9</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  value1Typo: {
    fontFamily: FontFamily.interRegular10,
    lineHeight: 25,
    letterSpacing: -0.4,
    fontSize: FontSize.interBold12_size,
  },
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  option1: {
    color: Color.iconIconGrey,
    textAlign: "left",
  },
  value1: {
    fontWeight: "600",
    color: Color.textTextGreyLight,
    textAlign: "right",
  },
  option2Parent: {
    marginTop: 16,
  },
  statedefault: {
    borderRadius: StyleVariable.spacingSpacing16,
    backgroundColor: Color.containerContainerGreyDark,
    width: 398,
    padding: StyleVariable.spacingSpacing16,
  },
});

export default StateDefault1;
