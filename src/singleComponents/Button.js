import { Text } from "native-base";
import { TouchableOpacity } from "react-native";

export const ButtonComponent = ({ title, buttonStyle, onPress, fontsize }) => {
    return (
      <TouchableOpacity
        style={buttonStyle}
        onPress={onPress}
      >
        <Text
          style={{
            textTransform: "uppercase",
            fontWeight: "700",
            fontSize: fontsize,
            color: "white",
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  };
  