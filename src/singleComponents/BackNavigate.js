import { ChevronLeftIcon, View } from "native-base";
import { TouchableOpacity } from "react-native";

export const BackNavigate = ({onPress}) => {
    return(
      <View
        alignItems="center"
        alignSelf="center"
        justifyContent="center"
          style={{
            borderRadius: 50,
            borderWidth: 1.5,
            borderColor: "#898989",
            paddingRight: 6,
            padding:5,
          }}
        >
          <TouchableOpacity onPress={onPress}>
            <ChevronLeftIcon/>
          </TouchableOpacity>
        </View>
    )
};
