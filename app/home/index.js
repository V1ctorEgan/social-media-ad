import { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import MenuDrawer from '../../components/home/menuDrawer';

import FontText from '../../components/texts/fontText';
import NotificationButton from '../../components/home/notificationButton';
import MenuButton from '../../components/home/menuButton';
import { CreatePostActionBtn, TemplateActionBtn } from '../../components/buttons/actionButtons';
import colors from '../../styles/colors';



const Section = (props) =>{
    return(
        <View style={style.section}>
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

const Sample = () =>{
    return(
        <View style={{
            backgroundColor : colors.neutral50,
            width : "100%",
            borderRadius : 10,
            height : 110
        }}>

        </View>
    )
}
export default () =>{

    const [menuDrawn, setMenuDrawn] = useState(false);

    const toogleDrawer = () =>{
        setMenuDrawn(!menuDrawn);
    }

    return(
        <View style={style.main}>
            <MenuDrawer  isOpen={menuDrawn} onClose={toogleDrawer}/>
            <View style={style.header}> 
                <View style={{
                    flexDirection : 'row',
                    alignItems : 'center',
                    gap:15
                }}>
                    <View>
                        <MenuButton onPress={toogleDrawer}/>
                    </View>
                    <View style={{
                        flexDirection : 'row',
                        alignItems : 'flex-start',
                        gap : 10
                    }}>
                        <View>
                            <FontText style={{fontSize:13}}>Good morning</FontText>
                            <FontText style={{fontSize:17,fontFamily:'plusJakataSansBold'}}>John Doe</FontText>
                        </View>
                        <View>
                            <Image source={require('../../assets/images/sprites/morning.png')} />
                        </View>
                    </View>
                </View>
                <View>
                    <NotificationButton />
                </View>
            </View>

            <View style={style.body}> 
                <Section title="Quick actions">
                    <View style={{
                        flexDirection : 'row',
                        gap : 10
                    }}>
                        <CreatePostActionBtn text='Create post'/>
                        <TemplateActionBtn text='Templates'/>
                    </View>
                </Section>

                <Section title="Running Posts">
                    <Sample />
                    <View style={{
                        height : 20
                    }}>
                    </View>
                </Section>

                <Section title="News Preview">
                    <Sample />
                </Section>
            </View>

        </View>
    );
}

const style = StyleSheet.create({
    main : {
        flex : 1,
        padding : 15,
        gap : 40

    },
    header : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    body : {
        gap : 20
    },
    section : {
        width : '100%',
        gap : 15
    }
})