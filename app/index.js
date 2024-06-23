import User from '../config/user';

import WelcomeScreen from "../screens/welcome/welcomeScreen";
import Authenticate from '../screens/auth/authenticate';
import SetUp from './auth/setUp';
import Enable from './auth/enable';


export default function Page() {
    if(User.Authenticated){
        return(
            <Enable /> // I will change this later to quick login
        )
    }
    return <WelcomeScreen />;
}