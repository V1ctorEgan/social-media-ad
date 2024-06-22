import User from '../config/user';

import WelcomeScreen from "../screens/welcome/welcomeScreen";
import Authenticate from '../screens/auth/authenticate';


export default function Page() {
    if(User.Authenticated){
        return(
            <Authenticate /> // I will change this later to quick login
        )
    }
    return <WelcomeScreen />;
}