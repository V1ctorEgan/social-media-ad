import { useState } from "react";

import { View, StyleSheet } from "react-native";

import Screen from "../../components/Screen";
import FormHead from "../../components/form/formHead";
import FontText from "../../components/texts/fontText";
import {Input1} from "../../components/Input/input1";
import { PrgBtn1 } from "../../components/buttons/progressButtons";

import colors from "../../styles/colors";
import { Link } from "expo-router";
import SSA from "../../components/form/ssa";

const Login = () =>{
    return(
        <Screen>
            <View style={[styles.container]}>
                <FormHead />
                <View style={styles.main}>
                    <FontText style={styles.headText}>Login to your Account</FontText>
                    <View style={styles.formCore}>
                        <Input1 title="Email" placeholder="Enter your email"/>
                        <Input1 title="Password" placeholder="Enter your password" />
                        <PrgBtn1 title="Login" />
                    </View>
                    <View style={styles.options}>
                        <Link href=""><FontText style={{
                            color : colors.primary
                        }}>Forgot password?</FontText></Link>
                        <FontText>Don't have an account?  <Link href="auth/signUp" style={{
                            color : colors.primary
                        }}>Sign up</Link></FontText>
                    </View>
                    <SSA />
                </View>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    main : {
        flex : 4.3,
        alignItems : 'center'
    },
    headText : {
        fontWeight : '600',
        fontSize : 22
    },
    formCore : {
        width : "100%",
        paddingHorizontal : 10,
        marginVertical : 10,
        gap: 10
    },
    options : {
        justifyContent : "center",
        alignItems : "center",
    }
})

export default Login;