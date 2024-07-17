import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Heading from '../../components/settings/heading'
import { MenuBtn, New, Section } from '../../components/settings/un'
import FormValidation from "../../components/form/formValidation";
import * as Yup from "yup";
import { Input1 } from '../../components/Input/input1';
import colors from '../../styles/colors';
import FontText from '../../components/texts/fontText';
import { PrgBtn1 } from '../../components/buttons/progressButtons';
import { router } from 'expo-router';



const Pay = () => {
    const [prg, setPrg] = useState(true)
    const validationSchema = Yup.object().shape({
		cardnumber: Yup.number().required().min(8).label("phonenumber"),
	});
    const Payment = () => {
        return(
            <View style={styles.main}>
                <Heading title={'Payment methods'} />
                <Section>
                    <MenuBtn title={'4053*********75'}/>
                    <MenuBtn title={'4053*********75'}/>
                    <MenuBtn title={'4053*********75'}/>
                    <New title={'New payment method'} onPress={()=> setPrg(false)}/> 

                </Section>
            </View>
        )
    }
    const AddCard = () => {
        return(
            <View style={styles.main}>
                <Heading title={'Add Card'} />
                <FormValidation initialValues={{  cardnumber: "" }}
					onSubmit={(values) => console.log(values)}
					validationSchema={validationSchema}>
                        <Input1 title={'Card Number'} placeholder={'00000000000'} name='cardnumber' />
                        <View style={styles.half}>
                            <View style={styles.input_container}>
                            <FontText style={styles.text}>CVV/CVC</FontText>
                            <TextInput style={styles.inp}  placeholderTextColor={colors.neutral500} placeholder='000'></TextInput>
                            </View>

                            <View style={[styles.input_container, {paddingLeft:10, marginRight:5}]}>
                                <FontText style={styles.text}> Expiry date </FontText>
                            <TextInput style={[styles.inp, {marginRight:5}]} placeholder='MM/YY' placeholderTextColor={colors.neutral500}></TextInput>
                            </View>
                        </View>
                        <PrgBtn1 title={'Save'} onPress={()=> router.navigate('./support')}/>
                </FormValidation >
            </View>
        )
    }
  return (
    <>
      {prg ? <Payment /> : <AddCard />}
    </>
  )
}

export default Pay

const styles = StyleSheet.create({
    main: {
		flex: 1,
		padding: 10,
		// gap : 40,
		width: "100%",
		paddingTop: 80,
	},
    half:{
        width:'100%',
        flexDirection:'row',
        // gap:8,
        // borderWidth:2,
        height:79,
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:10

    },
    input_container:{
        width:'50%',
        borderColor:'blue',
        justifyContent:'center',
        alignItems:'flex-start',
        paddingVertical:14,
        marginTop:17,

    },
    inp:{
        backgroundColor:colors.neutral50,
        width:'100%',
        height:53,
        paddingLeft:12,
        borderRadius:5,
        marginTop:9
    },
    text:{
        textAlign:'left',
        marginTop:9,
        // marginVertical:30
        
    }
})