import AsyncStorage from '@react-native-async-storage/async-storage';
const User = {
    Authenticated : async () =>{
        return (await AsyncStorage.getItem('user_authenticated'))
    }
}

export default User;