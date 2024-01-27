import { Box, CheckIcon, Text, View } from "native-base";
import { Button, Image } from "react-native";
import { ButtonComponent } from "./Button";
import { useState } from "react";
import useTranslation from "../TranslationHook/useTranslation";
import * as ImagePicker from "expo-image-picker";

export const ImageUploading = ({ textStyle }) => {
  const { translate } = useTranslation();
  // const [photo, setPhoto] = useState(null);

  // const options = {
  //   mediaType: 'photo',
  //   includeBase64: false,
  //   maxHeight: 2000,
  //   maxWidth: 2000,
  // };

  // const handleChoosePhoto = () => {
  //   launchImageLibrary(options, (response) => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('Image picker error: ', response.error);
  //     } else {
  //       let imageUri = response.uri;
  //       setPhoto(imageUri);
  //     }
  //   });
  // };
  const [image, setImage] = useState(null);

  const handleChoosePhoto = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("RESULT", result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Box
      fontWeight="bold"
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        borderColor: "#585d68",
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "#c4c5c9",
        height: 43,
      }}
    >
      <ButtonComponent
        buttonStyle={{
          width: 110,
          paddingVertical: 7,
          marginHorizontal: 2,
          paddingLeft: 12,
          backgroundColor: "#0B1131",
          borderRadius: 10,
          // flex:1,
          // justifyContent:"center",
          // alignItems:"center",
          fontWeight: 100,
        }}
        fontsize={textStyle}
        title={translate("ChooseFile")}
        onPress={handleChoosePhoto}
      />
      {image ? (
        <View
          flex={1}
          justifyContent="center"
          alignItems="start"
          style={{ flexDirection: "row" }}
        >
          <CheckIcon size="5" mt="0.5" color="emerald.500" />
          <Text color="emerald.500" fontSize="md">
            Uploaded
          </Text>
        </View>
      ):(
        <Text style={textStyle} fontWeight={700} paddingLeft={2}>
            No File Choosen
          </Text>
      )}
    </Box>
  );
};
