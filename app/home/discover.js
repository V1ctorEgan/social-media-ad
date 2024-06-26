import { View } from 'react-native';
import FontText from '../../components/texts/fontText';

export default () =>{
    return(
        <View style={{
            flex: 1,
            justifyContent : 'center',
            alignContent : 'center',
            backgroundColor : 'red'
        }}>
            <FontText></FontText>
        </View>
    );
}