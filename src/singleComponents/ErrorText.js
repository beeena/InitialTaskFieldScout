import { Text } from "native-base"

export const ErrorText =({children})=>{
    return(
        <Text style={{color:"#e93f37", fontSize:12, paddingLeft:8}}>{children}</Text>
    )
}