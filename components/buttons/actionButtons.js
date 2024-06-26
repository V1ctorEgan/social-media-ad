import { TouchableOpacity } from "react-native";

import FontText from "../texts/fontText";
import colors from "../../styles/colors";
import { ActiionPlusIcon, DocumentIcon } from "../svg/svgIcons";

const Btn = (props) =>{
    return(
        <TouchableOpacity onPress={props.onPress} style={{
            flexDirection: 'row',
            justifyContent : 'flex-start',
            alignItems : 'center',
            alignContent : 'center',
            gap : 12,
            borderRadius : 5,
            backgroundColor : props.bg,
            paddingVertical : 16,
            paddingHorizontal : 12,
            flex : 1
        }} activeOpacity={.6}>
            {props.children}
        </TouchableOpacity>
    )
}

const CreatePostActionBtn = () =>{
    return(
        <Btn bg={colors.primary50}>
            <ActiionPlusIcon />
            <FontText style={{color:colors.primary, fontSize : 13,fontFamily : 'plusJakataSansBold'}}>Create post</FontText>
        </Btn>
    )
}

const TemplateActionBtn = () =>{
    return(
        <Btn bg={colors.primary}>
            <DocumentIcon />
            <FontText style={{color:colors.surfaceLight, fontSize : 13,fontFamily : 'plusJakataSansBold'}}>Templates</FontText>
        </Btn>
    )
}

export {
    CreatePostActionBtn,
    TemplateActionBtn
}