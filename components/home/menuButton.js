import { TouchableOpacity } from "react-native";

import { MenuOpenIcon } from "../svg/svgIcons";

const MenuButton = (props) =>{
    return(
        <TouchableOpacity activeOpacity={.9} onPress={props.onPress} style={{
            padding: 5
        }}>
            <MenuOpenIcon />
        </TouchableOpacity>
    )
}
export default MenuButton;