<<<<<<< Updated upstream
import FontText from '../components/texts/fontText';
import Screen from '../components/Screen';
=======
import react from 'react';
import { Text, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import Carousel from '../components/Carousel';
import WelcomeOneScreen from '../screens/WelcomeOneScreen';
// import Slide from '../components/Slide';
>>>>>>> Stashed changes


export default function Page() {
    return (
<<<<<<< Updated upstream
        <Screen>
            <FontText>Eze is here</FontText>
        </Screen>
    )
=======
         
            <WelcomeOneScreen />
         

    );
>>>>>>> Stashed changes
}
const styles = StyleSheet.create({
    text:{
        color:'black',
        fontSize:24,
        justifyContent:'center'

    }
})