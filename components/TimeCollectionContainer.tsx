import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import StateExpressSelect from "./StateExpressSelect";
import StateSchedule from "./StateSchedule";
import { FontSize, FontFamily, Color, StyleVariable } from "../GlobalStyles";

const TimeCollectionContainer = () => {
  return (
    <View style={styles.blockCollectTime}>
      <View style={styles.blockTitle}>
        <Text style={styles.collectTime}>Collect time</Text>
      </View>
      <View style={styles.blockTimeOptions}>
        <StateExpressSelect
          iconsSuccess={require("../assets/iconssuccess3.png")}
          stateExpressSelectPosition="unset"
        />
        <StateSchedule
          iconsCircle={require("../assets/iconscircle3.png")}
          iconsDollarSign={require("../assets/iconsdollar-sign1.png")}
          iconsClock={require("../assets/iconsclock3.png")}
          stateSchedulePosition="unset"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  collectTime: {
    fontSize: FontSize.interBold16_size,
    letterSpacing: -0.5,
    lineHeight: 25,
    fontWeight: "600",
    fontFamily: FontFamily.interRegular10,
    color: Color.iconIconGrey,
    textAlign: "left",
  },
  blockTitle: {
    paddingHorizontal: StyleVariable.spacingSpacing16,
    paddingVertical: 0,
    flexDirection: "row",
  },
  blockTimeOptions: {
    width: 398,
    justifyContent: "space-between",
    marginTop: 16,
    flexDirection: "row",
  },
  blockCollectTime: {
    marginTop: 48,
  },
});

export default TimeCollectionContainer;
