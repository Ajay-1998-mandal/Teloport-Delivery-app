import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import StageTextFieldRadius from "./StageTextFieldRadius";
import { StyleVariable, Color } from "../GlobalStyles";

export type FormsFormTextFieldType = {
  textfield?: string;
  textfield1?: string;
  textfield2?: string;
  showFormsTextField?: boolean;
  formsTextFieldVisible?: boolean;
  formsTextFieldVisible1?: boolean;

  /** Style props */
  formsFormTextFieldPosition?: string;
  formsFormTextFieldBorderRadius?: number;
  formsFormTextFieldPadding?: number | string;
  formsFormTextFieldWidth?: number | string;
  formsFormTextFieldMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormsFormTextField = ({
  textfield,
  textfield1,
  textfield2,
  showFormsTextField,
  formsTextFieldVisible,
  formsTextFieldVisible1,
  formsFormTextFieldPosition,
  formsFormTextFieldBorderRadius,
  formsFormTextFieldPadding,
  formsFormTextFieldWidth,
  formsFormTextFieldMarginTop,
}: FormsFormTextFieldType) => {
  const formsFormTextFieldStyle = useMemo(() => {
    return {
      ...getStyleValue("position", formsFormTextFieldPosition),
      ...getStyleValue("borderRadius", formsFormTextFieldBorderRadius),
      ...getStyleValue("padding", formsFormTextFieldPadding),
      ...getStyleValue("width", formsFormTextFieldWidth),
      ...getStyleValue("marginTop", formsFormTextFieldMarginTop),
    };
  }, [
    formsFormTextFieldPosition,
    formsFormTextFieldBorderRadius,
    formsFormTextFieldPadding,
    formsFormTextFieldWidth,
    formsFormTextFieldMarginTop,
  ]);

  return (
    <View style={[styles.formsformTextField, formsFormTextFieldStyle]}>
      <StageTextFieldRadius
        textfield="Textfield 1"
        stageTextFieldRadiusPosition="unset"
        stageTextFieldRadiusBackgroundColor="#3b3f34"
        stageTextFieldRadiusAlignSelf="stretch"
        stageTextFieldRadiusMarginTop="unset"
        stageTextFieldRadiusHeight={48}
        stageTextFieldRadiusPaddingVertical="unset"
        textfieldColor="#eee"
      />
      <StageTextFieldRadius
        textfield="Textfield 2"
        stageTextFieldRadiusPosition="unset"
        stageTextFieldRadiusBorderRadius={16}
        stageTextFieldRadiusBackgroundColor="#3b3f34"
        stageTextFieldRadiusAlignSelf="stretch"
        stageTextFieldRadiusMarginTop={16}
        stageTextFieldRadiusHeight={48}
        stageTextFieldRadiusPaddingVertical="unset"
        textfieldColor="#eee"
      />
      <StageTextFieldRadius
        textfield="Textfield 3"
        stageTextFieldRadiusPosition="unset"
        stageTextFieldRadiusBorderRadius={16}
        stageTextFieldRadiusBackgroundColor="#3b3f34"
        stageTextFieldRadiusAlignSelf="stretch"
        stageTextFieldRadiusMarginTop={16}
        stageTextFieldRadiusHeight={48}
        stageTextFieldRadiusPaddingVertical="unset"
        textfieldColor="#eee"
      />
      <StageTextFieldRadius
        textfield="Textfield 4"
        stageTextFieldRadiusPosition="unset"
        stageTextFieldRadiusBorderRadius={16}
        stageTextFieldRadiusBackgroundColor="#3b3f34"
        stageTextFieldRadiusAlignSelf="stretch"
        stageTextFieldRadiusMarginTop={16}
        stageTextFieldRadiusHeight={48}
        stageTextFieldRadiusPaddingVertical="unset"
        textfieldColor="#eee"
      />
      <StageTextFieldRadius
        textfield="Textfield 5"
        stageTextFieldRadiusPosition="unset"
        stageTextFieldRadiusBorderRadius={16}
        stageTextFieldRadiusBackgroundColor="#3b3f34"
        stageTextFieldRadiusAlignSelf="stretch"
        stageTextFieldRadiusMarginTop={16}
        stageTextFieldRadiusHeight={48}
        stageTextFieldRadiusPaddingVertical="unset"
        textfieldColor="#eee"
      />
      <StageTextFieldRadius
        textfield="Textfield 6"
        stageTextFieldRadiusPosition="unset"
        stageTextFieldRadiusBorderRadius={16}
        stageTextFieldRadiusBackgroundColor="#3b3f34"
        stageTextFieldRadiusAlignSelf="stretch"
        stageTextFieldRadiusMarginTop={16}
        stageTextFieldRadiusHeight={96}
        stageTextFieldRadiusPaddingVertical="unset"
        textfieldColor="#eee"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formsformTextField: {
    borderRadius: StyleVariable.spacingSpacing24,
    backgroundColor: Color.containerContainerGreyDark,
    width: 398,
    padding: StyleVariable.spacingSpacing16,
  },
});

export default FormsFormTextField;
