import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Heading from '../../components/settings/heading'
import ProfilePic from '../../components/settings/profilePic'
import colors from "../../styles/colors";
import { Input1 } from "../../components/Input/input1";
import FormValidation from "../../components/form/formValidation";
import * as Yup from "yup";
import { router } from "expo-router";
import { PrgBtn1 } from '../../components/buttons/progressButtons';

const EditProfile = () => {
    const validationSchema = Yup.object().shape({
		email: Yup.string().required().email().label("Email"),
		phonenumber: Yup.number().required().label("phonenumber"),
	});
    return (
    
    <View>
       <Heading title={'Edit profile'} />
       <View style={styles.main}>

       <ProfilePic />
       <FormValidation
					initialValues={{ email: "", phonenumber: "" }}
					onSubmit={(values) => console.log(values)}
					validationSchema={validationSchema}
				>
          <View style={{  width:'100%', paddingHorizontal:13, marginTop:24}}>

					<Input1
						title={"Email"}
						name={"email"}
						placeholder={"johndoe@gmail.com"}
					/>
					<Input1
						title={"Phone number"}
						name={"phonenumber"}
						placeholder={"0800000000"}
            style={{marginTop:16}}
					/>
          <PrgBtn1 title={'Save'} />
          </View>
				</FormValidation>
       </View>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    main: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 100,
    width:'100%',
	},
})