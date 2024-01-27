import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet } from "react-native";
import {
  NativeBaseProvider,
  Box,
  FormControl,
  Select,
  CheckIcon,
  Text,
} from "native-base";
import useTranslation from "../TranslationHook/useTranslation";
import { useLanguage } from "../TranslationHook/LanguageContext"; // Import the useLanguage hook
import { LanguageDropdownComponent } from "../singleComponents/LanguageDropDown";
import { ButtonComponent } from "../singleComponents/Button";

export default function HomePage({ navigation, customStyle }) {


  const { translate } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage("en"); // Use the useLanguage hook correctly

  const handleNextScreen = () => {
    navigation.navigate("PermitExtension");
  };

  return (
    <NativeBaseProvider style={customStyle}>
      <Box
        flex={1}
        // justifyItems="center"
        justifyContent="center"
        alignItems="center"
        // alignContent="end"
        // mt={4}
        backgroundColor="#eab308"
      >
        <FormControl justifyContent="center" alignItems="center">
          <Text style={customStyle}>{translate("GoEnterTheForm")}</Text>
          <ButtonComponent
            buttonStyle={{
              width: 150,
              paddingVertical: 10,
              alignItems: "center",
              borderRadius: 5,
              backgroundColor: "#0B1131",
            }}
            title={translate("Submit")}
            onPress={handleNextScreen}
          />
        </FormControl>
        <LanguageDropdownComponent />
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "",
    alignItems: "center",
    justifyContent: "center",
  },
});
