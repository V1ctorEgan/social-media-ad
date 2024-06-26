import { TouchableOpacity } from "react-native";

import { NotificationBell } from "../svg/svgIcons";

const NotificationButton = () =>{
    return(
        <TouchableOpacity activeOpacity={.9} >
            <NotificationBell />
        </TouchableOpacity>
    )
}
export default NotificationButton;