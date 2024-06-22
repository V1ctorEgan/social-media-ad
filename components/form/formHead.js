import { Image, View } from "react-native";

const FormHead = (prop) =>{
    return(
        <View style={[
            {
                alignItems : 'center',
                justifyContent : 'center',
                flex : 1
            },
            prop.style
        ]} >
            <Image source={require('../../assets/images/icons/logo-blue.png')}/>
        </View>
    )
}

export default FormHead;
