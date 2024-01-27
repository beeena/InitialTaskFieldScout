import { Box, FormControl, NativeBaseProvider, Text } from "native-base";
import useTranslation from "../TranslationHook/useTranslation";
import { BackNavigate } from "../singleComponents/BackNavigate";
import { InputContainer } from "../singleComponents/InputContainer";
import { ButtonComponent } from "../singleComponents/Button";
import { Formik } from "formik";
import {
  PermitExtensionValidationSchema,
  initialPermitValues,
} from "../ValidationSchema";
import { PickDate } from "../singleComponents/PickDate";
import { InputComp } from "../singleComponents/Input";
import { ErrorText } from "../singleComponents/ErrorText";
import { LanguageDropdownComponent } from "../singleComponents/LanguageDropDown";

export const PermitExtension = ({ navigation, customStyle }) => {
  const { translate } = useTranslation();

  const handleSubmit = (values) => {
    console.log("Form values:", values);
    navigation.navigate("PersonalInfo");
  };

  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        p={4}
        backgroundColor="#eab308"
      >
        <Box
          flex={1}
          flexDir="row-reverse"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          maxHeight={100}
        >
          <LanguageDropdownComponent />
          <BackNavigate onPress={() => navigation.goBack()} />
        </Box>
        <FormControl>
          <Box>
            <Text style={customStyle} bold fontSize="xl" mb={4}>
              {translate("MegaTest")}
            </Text>
          </Box>
        </FormControl>
        <Formik
          initialValues={initialPermitValues}
          validationSchema={PermitExtensionValidationSchema}
          onSubmit={handleSubmit}
        >
          {({
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            isValid,
            dirty,
          }) => (
            <>
              <InputContainer>
                <Text style={customStyle}>
                  {translate("WhatDateIsThisPermitFor")}
                </Text>
                <PickDate
                  date={values.date}
                  onDateSelect={(e) => {
                    setFieldValue("date", e);
                  }}
                />

                {errors.date && <ErrorText>Error: {errors.date}</ErrorText>}
              </InputContainer>

              <Box width={"100%"}>
                <InputContainer>
                  <Text style={customStyle}>
                    {translate("EquipmentNumber")}
                  </Text>
                  <InputComp
                    onChange={handleChange("equipmentNumber")}
                    value={values.equipmentNumber}
                  />
                  {errors.equipmentNumber && (
                    <ErrorText>{errors.equipmentNumber}</ErrorText>
                  )}
                </InputContainer>
              </Box>
              <ButtonComponent
                title={translate("Submit")}
                buttonStyle={{
                  width: "100%",
                  paddingVertical: 10,
                  alignItems: "center",
                  borerWidt: 0,
                  borderRadius: 10,
                  backgroundColor: "#0B1131",
                }}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </Box>
    </NativeBaseProvider>
  );
};
