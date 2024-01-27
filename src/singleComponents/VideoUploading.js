import { Box, CheckIcon, Text, View } from "native-base";
import { ButtonComponent } from "./Button";
import { useState } from "react";
import useTranslation from "../TranslationHook/useTranslation";
import * as DocumentPicker from "expo-document-picker";

export const VideoUploading = ({ textStyle }) => {
  const [video, setVideo] = useState(null);

  const { translate } = useTranslation();

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});

    if (!result.canceled) {
      setVideo(result.assets[0].uri);
    }
  };

  return (
    <Box
      fontWeight="bold"
      style={{
        flex: 1,
        flexDirection:"row",
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
          marginHorizontal:2,
          paddingLeft: 12,
          backgroundColor: "#0B1131",
          borderRadius: 10,
          fontWeight: 100,
        }}
        fontsize={textStyle}
        title={translate("RecordFile")}
        onPress={pickDocument}
      />
      {video ? (
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
