import React from "react";
import HomePage from "./src/components/HomePage";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PersonalInfo } from "./src/components/PersonalInfo";
import {PermitExtension} from "./src/components/PermitExtension";
import { Questionaire } from "./src/components/Questionaire";
import { LanguageProvider } from "./src/TranslationHook/LanguageContext";
// import { Questionaire } from "./src/components/Questionaire";

const Stack = createStackNavigator();

export default function App() {
  const customTextStyle = {
    color: "#313131",
    textTransform:"uppercase",
    fontFamily: "Robot",
    // fontSize: "14px",
    fontStyle: "norma",
    fontWeight: 700,
  };

  return (
    <NativeBaseProvider backgroundColor="#eab308">
      <LanguageProvider>
        <NavigationContainer style={{ paddingHorizontal: 4, }}  >
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={(props) => (
                <HomePage {...props} customStyle={customTextStyle} />
              )}
              options={{ headerShown: false }}
            />
            
            <Stack.Screen
              name="PermitExtension"
              component={(props) => (
                <PermitExtension {...props} customStyle={customTextStyle} />
              )}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalInfo"
              component={(props) => (
                <PersonalInfo {...props} customStyle={customTextStyle} />
              )}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Questionaire"
              component={(props) => (
                <Questionaire {...props} customStyle={customTextStyle} />
              )}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </LanguageProvider>
    </NativeBaseProvider>
  );
}
