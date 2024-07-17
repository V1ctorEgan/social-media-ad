import { View, TextInput } from 'react-native';
import FontText from '../texts/fontText';
import colors from '../../styles/colors';
import { useFormikContext } from "formik";
import ErrorMessage from './errorMessage';
import { useEffect } from 'react';


function Input1({title, placeholder, name, style}) {
    const { setFieldTouched, handleChange, errors, touched } =
		useFormikContext();
         
    return (
        <View style={[{
            gap : 5
        },style]} >
            { title && <FontText style={{
                color : colors.neutral900,
                fontSize : 12,
                fontWeight : '700'
            }}>
                { title}
            </FontText>}
            <TextInput placeholder={ placeholder} style={{
                borderRadius : 5,
                paddingVertical : 16,
                paddingHorizontal : 12,
                backgroundColor : colors.neutral50,
                fontSize : 14,
                color : colors.neutral900
            }} placeholderTextColor= {colors.neutral500}
            onBlur={() => setFieldTouched( name)}
				onChangeText={handleChange( name)}/>
            <ErrorMessage error={errors[ name]} visible={touched[ name]} />
        </View>
    );
}

export { Input1 };