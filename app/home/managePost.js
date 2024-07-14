import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ChangeButtonCon from '../../components/home/changeButtonCon';
import Heading from '../../components/home/heading';

function ManagePost(props) {
    const [change, setChange] = useState(true);
    return (
        <View style={styles.container}>
        <Heading title={'Manage Posts'} />

            <ChangeButtonCon
                firstText={"Active"}
				secondText={"Pending"}
                setChange={setChange}
                change={change}
            />
                
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
		flex: 1,
		alignItems: "center",
    // backgroundColor:'black'
	},
})
export default ManagePost;