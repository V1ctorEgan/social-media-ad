import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ChangeButtonCon from "../../components/home/changeButtonCon";
import MenuButton from "../../components/home/menuButton";
import FontText from "../../components/texts/fontText";
import colors from "../../styles/colors";
import { router } from "expo-router";

const Online = () => {
	const windowWidth = Dimensions.get("window").width;
	manu = [
		{
			id: 1,
			name: "Template 1",
      color:'green'
		},
		{
			id: 2,
			name: "Template 2",
      color:'pink'

		},
		{
			id: 3,
			name: "Template 3",
      color:'purple'

		},
		{
			id: 4,
			name: "Template 4",
      color:'#ff0000'

		},
		{
			id: 5,
			name: "Template 5",
      color:'#ff0000'

		},
		{
			id: 6,
			name: "Template 6",
      color:'green'

		},
	];

	return (
		<View
			style={{
				// borderWidth: 1,
				// backgroundColor: "black",
				borderColor: "yellow",
				width: windowWidth,
				marginHorizontal: 10,
				flex: 1,
        padding:7,
        bottom:20,
        flexDirection:'row'
			}}
		>
			{/* {manu.map((item) => (
				<View style={styles.firstBox} key={item.id}>
					<View
						style={{
							backgroundColor: "red",
							width: "100%",
							height: 213,
						}}
					></View>
					<FontText >{item.name}</FontText>
				</View>
			))} */}
      <FlatList
      data={manu}
      renderItem={({item})=>
      <>
      <View style={styles.firstBox} key={item.id}>
      <View
        style={{
          backgroundColor: item.color,
          width: "100%",
          height: 213,
          marginBottom:8
        }}
      ></View>
      <FontText style={{
        marginBottom:8
      }}>{item.name}</FontText>
    </View>
    </>
  }
      
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      columnGap={10}
    />
  </View>
	 
	);
};
const Local = () => {
	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
        // flexDirection:'row',
        position:'relative'

			}}
		>
			<FontText>You have no local template. Click on the ‘+’ </FontText>
			<FontText>icon to add a template</FontText>
      <View style={{
        backgroundColor:colors.primary,
        width:48,
        height:48,
        borderRadius:24,
        position:'absolute',
        top:350,
        left:250,
        justifyContent:'center',
        alignItems:'center'
      }}>
        <TouchableOpacity onPress={()=> router.navigate('./managePost')}>
            <Text style={{color:'white', fontSize:24}}>+</Text>
        </TouchableOpacity>
      </View>
		</View>
	);
};
const Templates = () => {
	// const [color, setColor] = useState('blue');
	const [change, setChange] = useState(true);
	return (
		<View style={styles.container}>
			<ChangeButtonCon
				firstText={"Online"}
				secondText={"Local"}
				setChange={setChange}
        change={change}
			/>
			<View
				style={{
					position: "relative",
					top: 120,
				}}
			>
				{change ? <Online /> : <Local />}
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
    // backgroundColor:'black'
	},
	firstBox: {
		height: 242,
		width: 169,
		flexDirection: "column",
		// gap: 8,
		// borderWidth: 2,
		alignItems: "flex-start",
		justifyContent: "space-between",
    marginLeft:5
	},
});
export default Templates;
