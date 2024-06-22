import React from 'react';
import { View, StyleSheet, Button, Text} from 'react-native';
import colors from '../config/colors';

function AccountQuestion(props) {
    return (
         <View style={styles.container}>
            <Text style={styles.accountQuestion}>Already have an account?<Text style={{color:'blue'}}>Login</Text></Text>
         </View>
    );
}
const styles = StyleSheet.create({
    accountQuestion:{
        color:colors.white
    },
    button:{
        backgroundColor:'transparent'
    },
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    }

})
export default AccountQuestion;