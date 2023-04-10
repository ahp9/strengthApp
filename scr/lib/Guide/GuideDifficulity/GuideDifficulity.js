import {  View , StyleSheet, Text} from "react-native";
import { Type } from "../../Form/Type/Type.js";


export default function GuideDifficulty({navigation}){
    return(
        <View style={style.container}>
            <Text style={style.title}>Difficult Levels</Text>
            <View style={style.types}>
                <Type name="Beginner" navigation={navigation} WG={'Guides'} things={'difficult_level'}/>
                <Type name="Intermedian" navigation={navigation} WG={'Guides'} things={'difficult_level'}/>
                <Type name="Advanced" navigation={navigation} WG={'Guides'} things={'difficult_level'}/>
                <Type name="All" navigation={navigation} WG={'Guides'} things={'difficult_level'}/>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        margin: '5%',
    },

    types: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: "100%"
    },

    title: {
        alignSelf: 'flex-start',
        fontSize: 20,
        margin: '5%'
    },
})