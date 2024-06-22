import { Text, StyleSheet } from "react-native";


const FontText = (props) =>{
    return(
        <Text style={[{
            fontFamily : 'plusJakataSans'
        },props.style]}>{props.children}</Text>
    )
}


export default FontText;