import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import ContainerPlan2DayAhead from "./ContainerPlan2DayAhead";
import { FontFamily, FontSize, Color, StyleVariable } from "../GlobalStyles";

export type StateScheduleType = {
  iconsCircle?: ImageSourcePropType;
  iconsDollarSign?: ImageSourcePropType;
  iconsClock?: ImageSourcePropType;

  /** Style props */
  stateSchedulePosition?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateSchedule = ({
  iconsCircle,
  iconsDollarSign,
  iconsClock,
  stateSchedulePosition,
}: StateScheduleType) => {
  const stateScheduleStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stateSchedulePosition),
    };
  }, [stateSchedulePosition]);

  return (
    <View style={[styles.stateschedule, stateScheduleStyle]}>
      <View style={styles.frameParent}>
        <View>
          <Text style={[styles.schedule, styles.scheduleTypo]}>Schedule</Text>
          <Text style={[styles.chooseAvailableTime, styles.scheduleTypo]}>
            Choose available time
          </Text>
        </View>
        <Image
          style={styles.iconscircle}
          contentFit="cover"
          source={iconsCircle}
        />
      </View>
      <ContainerPlan2DayAhead
        dimensionCode={require("../assets/iconsdollar-sign.png")}
        dimensionCodeText={require("../assets/iconsclock.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scheduleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular10,
    lineHeight: 25,
    letterSpacing: -0.4,
  },
  schedule: {
    fontSize: FontSize.interMedium14_size,
    fontWeight: "500",
    color: Color.textTextGreyLight,
  },
  chooseAvailableTime: {
    fontSize: FontSize.interBold12_size,
    color: Color.iconIconGrey,
    marginTop: 8,
  },
  iconscircle: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  frameParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  stateschedule: {
    borderRadius: StyleVariable.spacingSpacing16,
    backgroundColor: Color.containerContainerGreyDark,
    width: 190,
    height: 109,
    padding: StyleVariable.spacingSpacing16,
    justifyContent: "space-between",
  },
});

export default StateSchedule;
