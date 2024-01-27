import Icon from "react-native-vector-icons/Feather";
import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";


export const PickDate = ({onDateSelect}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [inputValue, setInputValue] = useState(""); 

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
   
    setInputValue(formatSelectedDate(date)); // Update the input field value
    onDateSelect(date)
    hideDatePicker();
    
  };

  const formatSelectedDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <View
   
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#585d68",
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "#c4c5c9",
        height: 43,
      }}
    >
      <TextInput
        style={{
          width: "85%",
          height: 45,
          fontWeight: "bold",
          textTransform: "none",
          paddingLeft: 8,
        }}
        placeholder="Select a date"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)} // Remove borderColor from here
      />
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 45,
          width: 50, 
        }}
        onPress={showDatePicker}
        activeOpacity={1}
      >
        <Icon
          name="calendar"
          size={20}
          color="#313131"
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
