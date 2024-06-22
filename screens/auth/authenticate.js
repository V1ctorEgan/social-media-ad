import { View, StyleSheet } from "react-native";

import Screen from "../../components/Screen";
import FontText from "../../components/texts/fontText";
import CustomPinInp from "../../components/Input/customPinInp";

const Authenticate = () =>{
    return(
        <Screen style={{
            paddingTop: 0,
        }}>
            <View style={style.container}>
                <FontText style={style.head}>Welcome back, John!</FontText>
                <CustomPinInp />
            </View>
            
        </Screen>
    )
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        paddingTop : 100
    },
    head : {
        fontSize : 22,
        marginVertical : 20,
        fontFamily : 'plusJakataSansSemiBold'
    }
})

export default Authenticate;