import ChangeButtonCon from '../../components/home/changeButtonCon';
import FontText from '../../components/texts/fontText';
import { View, StyleSheet, FlatList } from 'react-native';

import { CreatePostActionBtn, TemplateActionBtn } from '../../components/buttons/actionButtons';
import AccountFunded from '../../components/home/accountFunded';
import ListItemSeparator from '../../components/home/listSeparator';
import colors from '../../styles/colors';

const menuItems = [
    {   id:1,
        title: "$+10.00",
        color:'red'
         
    },
    {   id:2,
        title: "$-10.00",
        color:'green'

         
    },
    {   id:3,
        title: "$+10.00",
        color:'green',
         
    },
    {   id:4,
        title: "$-10.00",
        color:'red'
         
    },
    
]
export default () =>{
   
    return(
         <View>
             <View style={{alignItems:'center'}}>
                <ChangeButtonCon firstText={'View balance'} secondText={'see schedule funds'} />
                <View style={styles.texty}>
                <FontText style={{fontSize:12}}>Available balance</FontText>
                <FontText style={{fontSize:45, fontWeight:'700'}}>$128.64</FontText>
                <View style={{
                        flexDirection : 'row',
                        gap : 10,
                        paddingHorizontal:10,
                        marginTop:40
                    }}>
                        <CreatePostActionBtn text='Payment methods'/>
                        <TemplateActionBtn text='Schedule funds'/>
                    </View>
                    <View style={{
                        justifyContent:'center',
                        alignItems:'center',
                    }}>

                    <View style={styles.history}><FontText style={styles.size}>History</FontText><FontText style={styles.see}>See all</FontText></View>

                    <View style={styles.lowerContainer}>
                        {menuItems.map((item)=>(
                            <AccountFunded key={item.id} title={item.title} color={item.color} />
                            ))}
                    </View>
                    </View>
                </View>
                
             </View>
         </View>
    )
}
const styles = StyleSheet.create({
    texty:{
        marginTop:120,
        alignItems:'center',
    },
    lowerContainer:{
        backgroundColor:colors.neutral50,
        marginTop:20,
        paddingVertical:16,
        paddingHorizontal:22,
        marginHorizontal:10,
        // borderWidth:1,
        width:'90%',
        borderRadius:10,
    },
    history:{
        justifyContent:'space-between',
        alignItems:'space-between',
        flexDirection:'row',
        width:'100%',
        paddingHorizontal:10,
        marginTop:40,
    },
    see:{
        borderWidth:1,
        padding:6,
        borderColor:colors.primary,
        borderRadius:4,
        color:colors.primary,
        fontSize:12,
        fontWeight:'650'
    },
    size:{
        fontSize:12,
        fontWeight:'650'

    }
})