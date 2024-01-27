import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useLanguage } from "../TranslationHook/LanguageContext";

const languages = [
  { label: "En", value: "en" },
  { label: "Sp", value: "sp" },
];

export const LanguageDropdownComponent = () => {
  const [isFocus, setIsFocus] = useState(false);
  const { currentLanguage, changeLanguage } = useLanguage("en");

  return (
    <View style={styles.container}>
      <DropDownPicker
        items={languages}
        containerStyle={[styles.dropdown]}
        style={styles.picker}
        labelStyle={{backgroundColor:"transparent"}}
        placeholder="Select a language"
        value={currentLanguage}
        open={isFocus}
        setOpen={setIsFocus}
        setValue={(value) => {
          changeLanguage(value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  dropdown: {
    height:50,
    width: 80,
    borderRadius: 8,
    borderColor: "red",
  },
  picker: {
    backgroundColor: "transparent",
    borderWidth: 2,
    

  },
  labelStyle: {
    fontSize: 16,
    backgroundColor: "transparent",

    color: "gray",
  },
});
