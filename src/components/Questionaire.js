import {
  Box,
  FormControl,
  NativeBaseProvider,
  ScrollView,
  Text,
  View,
} from "native-base";
import { Button, TouchableOpacity } from "react-native";
import { InputComp } from "../singleComponents/Input";
import { TextAreaComponent } from "../singleComponents/TextArea";
import { CheckboxComponent } from "../singleComponents/Checkbox";
import { InputContainer } from "../singleComponents/InputContainer";
import { ButtonComponent } from "../singleComponents/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { PickDate } from "../singleComponents/PickDate";
import useTranslation from "../TranslationHook/useTranslation";
import { BackNavigate } from "../singleComponents/BackNavigate";
import { ImageUploading } from "../singleComponents/ImageUploading";
import { VideoUploading } from "../singleComponents/VideoUploading";
import {
  QuestionaireValidationSchema,
  initialQuesValues,
} from "../ValidationSchema";
import { Formik } from "formik";
import { ErrorText } from "../singleComponents/ErrorText";
import { LanguageDropdownComponent } from "../singleComponents/LanguageDropDown";

export const Questionaire = ({ navigation, customStyle }) => {
  const { translate } = useTranslation();

  const [inputContainers, setInputContainers] = useState([1]);

  const handleAddStep = () => {
    setInputContainers((prevInputContainers) => [...prevInputContainers, 1]);
  };

  return (
    <SafeAreaView>
      <ScrollView style={customStyle}>
        <NativeBaseProvider>
          <Box
            flex={1}
            color="black"
            textTransform="uppercase"
            justifyContent="center"
            alignItems="center"
            p={4}
            backgroundColor="#eab308"
          >
           <Box flex={1} flexDir="row-reverse" justifyContent="space-between" alignItems="center" justifyItems="center" width="100%">
           <LanguageDropdownComponent />
            <BackNavigate onPress={() => navigation.goBack()} />
           </Box>

            <Formik
              initialValues={initialQuesValues}
              validationSchema={QuestionaireValidationSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ errors, values, handleChange, setFieldValue }) => (
                <>
                  <View>
                    <Box>
                      <Text
                        fontSize="xl"
                        fontWeight={700}
                        mb={4}
                        style={customStyle}
                      >
                        {translate("MegaTest")}
                      </Text>
                      <FormControl mb="5">
                        {/* Input Fields */}
                        <InputContainer>
                          <Text style={customStyle}>
                            {translate("InputField")}
                          </Text>
                          <InputComp
                            placeholder="..."
                            onChange={handleChange("input")}
                            value={values.input}
                          />
                          {errors.input && (
                            <ErrorText>{errors.input}</ErrorText>
                          )}
                        </InputContainer>
                        {/* TextArea Field */}
                        <InputContainer>
                          <Text style={customStyle}>
                            {translate("TextareaField")}
                          </Text>
                          <TextAreaComponent
                            onChange={handleChange("textarea")}
                            value={values.textarea}
                          />
                          {errors.textarea && (
                            <ErrorText>{errors.textarea}</ErrorText>
                          )}
                        </InputContainer>
                        {/* Radio Fields  */}
                        <InputContainer>
                          <Text style={customStyle}>
                            {translate("RadioField")}
                          </Text>
                          <Box>{/* <RadioComponent /> */}</Box>
                        </InputContainer>
                        {/* Checkboxes */}
                        <InputContainer>
                          <Text style={customStyle}>
                            {translate("CheckboxField")}
                          </Text>
                          <CheckboxComponent text={translate("Option1")} />
                          <CheckboxComponent text={translate("Option2")} />
                          <CheckboxComponent text={translate("Option3")} />
                        </InputContainer>

                        {/* Phone Number  */}
                        <InputContainer>
                          <Text style={customStyle}>
                            {translate("PhoneField")}
                          </Text>
                          <InputComp
                            placeholder="..."
                            onChange={handleChange("phone")}
                            value={values.phone}
                          />
                          {errors.phone && (
                            <ErrorText>{errors.phone}</ErrorText>
                          )}
                        </InputContainer>
                        {/* Date  */}
                        <InputContainer>
                          <Text style={customStyle}>
                            {translate("DateField")}
                          </Text>
                          <PickDate
                            date={values.date}
                            onDateSelect={(e) => {
                              setFieldValue("date", e);
                            }}
                          />
                          {errors.date && <ErrorText>{errors.date}</ErrorText>}
                        </InputContainer>
                        {/* Time */}
                        <InputContainer>
                          <Text style={customStyle}>
                            {translate("TimeField")}
                          </Text>
                          <InputComp
                            placeholder="..."
                            onChange={handleChange("time")}
                            value={values.time}
                          />
                          {errors.time && (
                            <ErrorText style={{ color: "red" }}>
                              {errors.time}
                            </ErrorText>
                          )}
                        </InputContainer>
                        {/* Number Input  */}
                        <InputContainer>
                          <Text style={customStyle}>
                            {translate("NumberInputField")}
                          </Text>
                          <InputComp
                            placeholder="..."
                            onChange={handleChange("number")}
                            value={values.number}
                          />
                          {errors.number && (
                            <ErrorText>{errors.number}</ErrorText>
                          )}
                        </InputContainer>
                        {/* File Fields */}
                        <InputContainer>
                          <Text style={customStyle}>
                            {translate("FileField")}
                          </Text>
                          <ImageUploading textStyle={12} />
                        </InputContainer>
                        {/* Video Recoding */}
                        <InputContainer>
                          <Text style={customStyle}>
                            {translate("VIDEORECORDFIELD")}
                          </Text>
                          <VideoUploading textStyle={12} />
                        </InputContainer>

                        {/* MultiColumn Field  */}
                        {inputContainers.map((index) => (
                          <InputContainer key={index}>
                            <Box
                              flexDirection="column"
                              backgroundColor="#ffcc01"
                              p={4}
                              mt={4}
                              style={{
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: 0.2,
                                shadowRadius: 2,
                                elevation: 2,
                              }}
                            >
                              <InputContainer>
                                <Text style={customStyle}>
                                  {translate("TextareaColumn")}
                                </Text>
                                <TextAreaComponent
                                  placeholder="...."
                                  onChange={handleChange("textcolumn")}
                                  value={values.textcolumn}
                                />
                                {errors.textcolumn && (
                                  <ErrorText>{errors.textcolumn}</ErrorText>
                                )}
                                <Text style={customStyle}>
                                  {translate("InputColumn")}
                                </Text>
                                <InputComp
                                  placeholder="..."
                                  onChange={handleChange("inputcolumn")}
                                  value={values.inputcolumn}
                                />
                                {errors.inputcolumn && (
                                  <ErrorText>{errors.inputcolumn}</ErrorText>
                                )}
                              </InputContainer>
                            </Box>
                          </InputContainer>
                        ))}
                        <ButtonComponent
                          buttonStyle={{
                            width: 100,
                            paddingVertical: 5,
                            alignItems: "center",
                            borderRadius: 5,
                            backgroundColor: "#0185FF",
                          }}
                          title={translate("AddStep")}
                          onPress={handleAddStep}
                        />
                      </FormControl>
                      <ButtonComponent
                        buttonStyle={{
                          width: "100%",
                          color: "red",
                          paddingVertical: 10,
                          alignItems: "center",
                          borderRadius: 10,
                          backgroundColor: "#0B1131",
                        }}
                        title={translate("Submit")}
                      />
                    </Box>
                  </View>
                </>
              )}
            </Formik>
          </Box>
        </NativeBaseProvider>
      </ScrollView>
    </SafeAreaView>
  );
};
