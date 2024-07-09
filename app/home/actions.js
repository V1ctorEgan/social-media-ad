import { CreatePostActionBtn, TemplateActionBtn } from '../../components/buttons/actionButtons';
import { ActiionPlusIcon } from '../../components/svg/svgIcons';
import FontText from '../../components/texts/fontText';
import { View, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import { router } from 'expo-router';

const Section = (props) =>{
    return(
        <View style={styles.section}>
            <FontText style={{
                fontSize : 14,
                fontFamily : 'plusJakataSansBold'
            }}>{props.title}</FontText>
            <View>
                {props.children}
            </View>
        </View>
    )
}

export default () =>{
    return(
         <View  style={{paddingHorizontal:10, marginTop:70}}>
            <Section title="Actions"   >
                <View style={{flexDirection : 'row', gap : 10,   }}>
                    <CreatePostActionBtn text={'Create post'} />
                    <TemplateActionBtn text={'Templates'} />
                </View>
                <View style={{flexDirection : 'row', gap : 10,   paddingTop:10 }}>
                    <TemplateActionBtn text={'View'} onPress={()=>{
                        router.navigate('./templates')
                        console.log('working')
                    }
                        
                        }/>
                    <CreatePostActionBtn text={'Import'} />
                </View>
                <View style={{
                    width:'100%',
                    justifyContent:'center',
                    alignItems:'center',
                    gap:10,
                    backgroundColor:colors.neutral50,
                    flexDirection:'row',
                    height:62,
                    borderRadius:5,
                    marginTop:10,
                }}>
                    <ActiionPlusIcon /> 
                    <FontText style={{
                        color:colors.primary
                    }}>Manage posts</FontText>
                </View>


            </Section>
         </View>
    );
}
const styles = StyleSheet.create({
    section : {
        width : '100%',
        gap : 15
    }
})