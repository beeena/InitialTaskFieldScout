import { Box, FormControl, NativeBaseProvider, Text } from "native-base";
import { InputContainer } from "../singleComponents/InputContainer";
import { InputComp } from "../singleComponents/Input";
import { ButtonComponent } from "../singleComponents/Button";
import useTranslation from "../TranslationHook/useTranslation";
import { BackNavigate } from "../singleComponents/BackNavigate";
import {
  PersonalInfoValidationSchema,
  initialPersonalInfoValues,
} from "../ValidationSchema";
import { Formik } from "formik";
import { ErrorText } from "../singleComponents/ErrorText";
import { LanguageDropdownComponent } from "../singleComponents/LanguageDropDown";

export const PersonalInfo = ({ navigation, customStyle }) => {
  const { translate } = useTranslation();

  const handleSubmit = () => {
    navigation.navigate("Questionaire");
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
          <Formik
            initialValues={initialPersonalInfoValues}
            validationSchema={PersonalInfoValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, values, handleChange, handleSubmit }) => (
              <>
                <Box width={"100%"}>
                  <InputContainer>
                    <Text style={customStyle}>{translate("First Name")}</Text>
                    <InputComp
                      onChange={handleChange("firstname")}
                      value={values.firstname}
                    />

                    {errors.firstname && (
                      <ErrorText>{errors.firstname}</ErrorText>
                    )}
                  </InputContainer>
                </Box>
                <Box width={"100%"}>
                  <InputContainer>
                    <Text style={customStyle}>{translate("Last Name")}</Text>
                    <InputComp
                      onChange={handleChange("lastname")}
                      value={values.lastname}
                    />

                    {errors.lastname && (
                      <ErrorText>{errors.lastname}</ErrorText>
                    )}
                  </InputContainer>
                </Box>
                <Box width={"100%"}>
                  <InputContainer>
                    <Text style={customStyle}>{translate("Phone Number")}</Text>
                    <InputComp
                      onChange={handleChange("phonenumber")}
                      value={values.phonenumber}
                    />

                    {errors.phonenumber && (
                      <ErrorText>{errors.phonenumber}</ErrorText>
                    )}
                  </InputContainer>
                </Box>
                <Box width={"100%"}>
                  <InputContainer>
                    <Text style={customStyle}>{translate("Company Name")}</Text>
                    <InputComp
                      onChange={handleChange("companyname")}
                      value={values.companyname}
                    />

                    {errors.companyname && (
                      <ErrorText>{errors.companyname}</ErrorText>
                    )}
                  </InputContainer>
                </Box>

                <ButtonComponent
                  buttonStyle={{
                    width: "100%",
                    paddingVertical: 10,
                    alignItems: "center",
                    borderRadius: 10,
                    backgroundColor: "#0B1131",
                  }}
                  title={translate("Submit")}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
        </FormControl>
      </Box>
    </NativeBaseProvider>
  );
};
