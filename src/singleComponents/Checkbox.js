import { Box, Checkbox, FormControl, Text } from "native-base";

export const CheckboxComponent = ({ text }) => {
  const customTextStyle = {
    color: "#313131",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
  };
  return (
    <Box
      flexDirection="row" 
      alignItems="center"
    >
      <Checkbox
        checked={true}
        color="#0e7490"
        area-aria-label="what"
        borderColor="#D2D2D2" 
        borderWidth="1px"
      />
      <Text style={customTextStyle} ml={3}>
        {text}
      </Text>
    </Box>
  );
};
