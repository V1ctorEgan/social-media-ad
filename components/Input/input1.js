import { View, TextInput } from 'react-native';
import FontText from '../texts/fontText';
import colors from '../../styles/colors';

function Input1(props) {
    return (
        <View style={{
            gap : 5
        }} >
            {props.title && <FontText style={{
                color : colors.neutral900,
                fontSize : 12,
                fontWeight : '700'
            }}>
                {props.title}
            </FontText>}
            <TextInput placeholder={props.placeholder} style={{
                borderRadius : 5,
                paddingVertical : 16,
                paddingHorizontal : 12,
                backgroundColor : colors.neutral50,
                fontSize : 14,
                color : colors.neutral900
            }} placeholderTextColor= {colors.neutral500}/>
        </View>
    );
}

export { Input1 };