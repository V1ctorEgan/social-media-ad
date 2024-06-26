import { Slot } from "expo-router";
import Screen from "../../components/Screen";
import NavPane from "../../components/home/navPane";

export default () =>{
    return(
        <Screen>
            <Slot/>
            <NavPane />
        </Screen>
    )
}