import { useState } from "react";
import { Slot } from "expo-router";


import User from "../config/user";

import WelcomeScreen from "../screens/welcome/welcomeScreen";
export default () =>{
    const [openedBefore,set] = useState(User.openedBefore)
    return (
        <>
            {
                openedBefore?<Slot/>:<WelcomeScreen/>
            }
        </>
    )
}