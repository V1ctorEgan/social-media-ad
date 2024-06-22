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
}