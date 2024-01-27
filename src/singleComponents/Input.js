import { TextInput } from "react-native"

export const InputComp = ({placeholder, type,onChange,value,multiLine=false,numberOfLines,style})=>{
    return(
        <TextInput
        style={[{paddingLeft:10,borderWidth:2,  backgroundColor:"#c4c5c9",  borderColor: "#6b7280", height:40, fontWeight:"bold", borderRadius:7 ,textTransform:"none", fontSize:12},style]}
        placeholder={placeholder || ""}
        underlineColorAndroid={"transparent"}
        onChangeText={onChange}
        value={value}
        keyboardType={type}
        multiline={multiLine}
      />
    )
}