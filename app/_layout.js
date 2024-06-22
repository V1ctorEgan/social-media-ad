import { useState } from "react";
import { Slot } from "expo-router";


import User from "../config/user";

export default () =>{
    const [openedBefore,set] = useState(User.openedBefore)
    return (
        <Slot />
    )
}