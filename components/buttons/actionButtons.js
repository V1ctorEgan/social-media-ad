import { TouchableOpacity } from "react-native";

import FontText from "../texts/fontText";
import colors from "../../styles/colors";
import { ActiionPlusIcon, DocumentIcon } from "../svg/svgIcons";
import { router } from "expo-router";

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

const CreatePostActionBtn = ({text, onPress}) =>{
    return(
        <Btn bg={colors.primary50} onPress={(onPress)}>
            <ActiionPlusIcon />
            <FontText style={{color:colors.primary, fontSize : 13,fontFamily : 'plusJakataSansBold'}}>{text}</FontText>
        </Btn>
    )
}

const TemplateActionBtn = ({text, onPress}) =>{
    return(
        <Btn bg={colors.primary} onPress={()=>router.navigate('../home/templates')}>
            <DocumentIcon />
            <FontText style={{color:colors.surfaceLight, fontSize : 13,fontFamily : 'plusJakataSansBold'}}>{text}</FontText>
        </Btn>
    )
}

export {
    CreatePostActionBtn,
    TemplateActionBtn
}