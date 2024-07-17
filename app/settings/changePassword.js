import { StyleSheet, Text, View } from 'react-native'
import * as Yup from "yup";

import React from 'react'
import Heading from '../../components/settings/heading'
import { Input1 } from '../../components/Input/input1'
import FormValidation from '../../components/form/formValidation';
import { PrgBtn1 } from '../../components/buttons/progressButtons';

const changePassword = () => {
    const passwordSchema = Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, 'Password must contain one lowercase, one uppercase, one number, and one special character')
    .required('Password is required');
  
  const confirmPasswordSchema = Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required');
  
      const validationSchema = Yup.object().shape({
          password: Yup.string().min(8).required() ,
          newPassword: passwordSchema,
          confirmPassword: confirmPasswordSchema,
      });
  return (
    <View style={styles.main}>
       <Heading title={'Change password'} />
       <FormValidation
					initialValues={{ password: "", newPassword: "", confirmPassword:""}}
					onSubmit={(values) => console.log(values)}
					validationSchema={validationSchema}
					>
        <View style={styles.form}>

       <Input1 title='Current password' name='password' placeholder={'Enter your password'} />
       <Input1 title='New password' name='newPassword' placeholder={'Enter new password'} />
       <Input1 title='Confirm password' name='confirmPassword' placeholder={'Confirm password'} />
       <PrgBtn1 title={'Save'} />
       
        </View>
                    </FormValidation>
    </View>
  )
}

export default changePassword

const styles = StyleSheet.create({
    main:{
        flex : 1,
        padding : 10,
        // gap : 40,
        width:'100%',
        paddingTop:60
      },
	form: {
		width: "100%",
		paddingHorizontal: 10,
		marginVertical: 25,
		gap: 10,
		justifyContent: "center",
	},
})