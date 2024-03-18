const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import StateDefault5 from "./components/StateDefault5";
import StateOption3 from "./components/StateOption3";
import StateDefault4 from "./components/StateDefault4";
import StateOption2 from "./components/StateOption2";
import StateOption1 from "./components/StateOption1";
import FrameComponent from "./components/FrameComponent";
import CardsTrackingProcess from "./components/CardsTrackingProcess";
import StateType from "./components/StateType";
import CardsMenuTypeComponent from "./components/CardsMenuTypeComponent";
import IconsProfilePhoto from "./components/IconsProfilePhoto";
import StateOption from "./components/StateOption";
import CardsBanner from "./components/CardsBanner";
import StageTextFieldSearchIconL from "./components/StageTextFieldSearchIconL";
import IconsLogo from "./components/IconsLogo";
import StateLogoNavBar from "./components/StateLogoNavBar";
import Property1Dimension from "./components/Property1Dimension";
import StateDefault3 from "./components/StateDefault3";
import StateDefault2 from "./components/StateDefault2";
import StateSchedule from "./components/StateSchedule";
import StateExpressSelect from "./components/StateExpressSelect";
import Property1Type from "./components/Property1Type";
import StageTextFieldRadius from "./components/StageTextFieldRadius";
import FormsFormTextField from "./components/FormsFormTextField";
import CardsBottonTotalPrice from "./components/CardsBottonTotalPrice";
import StateDefault1 from "./components/StateDefault1";
import Property1PaymentComponent from "./components/Property1PaymentComponent";
import CardsPayment from "./components/CardsPayment";
import StatePrimaryMedium from "./components/StatePrimaryMedium";
import Property1Default1 from "./components/Property1Default1";
import StepDefault from "./components/StepDefault";
import SteppersStepperComponent from "./components/SteppersStepperComponent";
import StepStep from "./components/StepStep";
import Property1Default from "./components/Property1Default";
import StateListIcon from "./components/StateListIcon";
import Property1Insights from "./components/Property1Insights";
import StateDefault from "./components/StateDefault";
import NavigationsStatusBar from "./components/NavigationsStatusBar";
import HomeV4 from "./screens/HomeV4";
import HomeV2 from "./screens/HomeV2";
import HomeV1 from "./screens/HomeV1";
import DeliveryStep2 from "./screens/DeliveryStep2";
import DeliveryStep1 from "./screens/DeliveryStep1";
import DeliveryStep from "./screens/DeliveryStep";
import Account from "./screens/Account";
import HomeV from "./screens/HomeV";
import HomeSection from "./screens/HomeSection";
import HomeV3 from "./screens/HomeV3";
import DeliveriesSection from "./screens/DeliveriesSection";
import AccountSection from "./screens/AccountSection";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomeV4"
              component={HomeV4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeV2"
              component={HomeV2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeV1"
              component={HomeV1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeliveryStep2"
              component={DeliveryStep2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeliveryStep1"
              component={DeliveryStep1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeliveryStep"
              component={DeliveryStep}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Account"
              component={Account}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeV"
              component={HomeV}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeSection"
              component={HomeSection}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeV3"
              component={HomeV3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeliveriesSection"
              component={DeliveriesSection}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountSection"
              component={AccountSection}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
