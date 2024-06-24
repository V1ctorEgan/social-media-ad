import { Image,View } from "react-native";
import Screen from "../Screen";
import colors from "../../styles/colors";

const Splash1 = ()=>{
    return(
        <Screen style={{
            paddingTop : 0,
        }} viewStyle={{
            alignItems : 'center',
            justifyContent : 'center',
            backgroundColor : colors.primary,
            flex : 1
        }}>
            <Image source={require("../../assets/images/splash/asm.png")}/>
        </Screen>
    )
}

export default Splash1;