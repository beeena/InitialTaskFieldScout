import { TextArea } from "native-base"

export const TextAreaComponent = ({placeholder, onChange})=>{
    return(
        <TextArea placeholder={placeholder} onChangeText={onChange} type="string"borderWidth="2px" backgroundColor="#c4c5c9"  borderColor= "#6b7280" height="40px" fontWeight="bold" borderRadius={7} textTransform="none" fontSize="12px" on />
    )
}