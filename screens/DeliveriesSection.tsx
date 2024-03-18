import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const DeliveriesSection = () => {
  return (
    <View style={styles.deliveriesSection}>
      <View style={styles.deliveriesSectionChild} />
      <View style={styles.deliveriesWrapper}>
        <Text style={styles.deliveries}>Deliveries</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  deliveriesSectionChild: {
    top: 126,
    left: 5,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderTopWidth: 10,
    width: 3714,
    height: 10,
    position: "absolute",
  },
  deliveries: {
    fontSize: FontSize.size_81xl,
    fontWeight: "700",
    fontFamily: FontFamily.helveticaNeue,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  deliveriesWrapper: {
    top: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
    position: "absolute",
  },
  deliveriesSection: {
    flex: 1,
    width: "100%",
    height: 131,
  },
});

export default DeliveriesSection;
