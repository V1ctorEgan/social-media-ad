import { View } from 'react-native';
import FontText from '../../components/texts/fontText';

export default () =>{
    return(
        <View style={{
            flex: 1,
            justifyContent : 'center',
            alignItems : 'center',
        }}>
            <FontText style={{
                fontSize : 20
            }}>Coming Soon</FontText>
        </View>
    );
}