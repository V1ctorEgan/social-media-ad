import { Slot } from "expo-router";
import Screen from "../../components/Screen";

export default () =>{
    return(
        <Screen>
            <Slot />
        </Screen>
    )
}