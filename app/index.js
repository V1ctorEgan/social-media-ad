import { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import Splash1 from '../components/splash/splash1';

import User from '../config/user';
import WelcomeScreen from "../screens/welcome/welcomeScreen";
import Authenticate from '../screens/auth/authenticate';
import SetUp from './auth/setUp';
import Enable from './auth/enable';


SplashScreen.preventAutoHideAsync();
export default function Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [authState,setAuthState] = useState(false);
    useEffect(()=>{
        const getUserAuthState = async () =>{
            // await SplashScreen.hideAsync();
            User.Authenticated().then((data)=>{
                if(data){
                    setAuthState(true);
                } else {
                    setAuthState(false);
                }
                setIsLoading(false);
                
            })
            await SplashScreen.hideAsync();
        }
        getUserAuthState();
    },[]);
    if(isLoading){
        return <Splash1 />;
    }

    if(authState){
        return(
            <Authenticate />
        )
    }
    return <WelcomeScreen />;
}