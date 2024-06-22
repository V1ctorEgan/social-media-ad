<<<<<<< Updated upstream
 
import Screen from '../components/Screen';
import WelcomeScreen from '../screens/welcome/welcomeScreen';
import react from 'react';
import { Text, StyleSheet } from 'react-native';
// import Screen from '../components/Screen';
import Carousel from '../components/Carousel';
 


export default function Page() {
    return (

     <WelcomeScreen />   
    )
=======
import User from '../config/user';

import WelcomeScreen from "../screens/welcome/welcomeScreen";
import Login from './auth/login';


export default function Page() {
    if(User.Authenticated){
        return(
            <Login /> // I will change this later to quick login
        )
    }
    return <WelcomeScreen />;
>>>>>>> Stashed changes
}