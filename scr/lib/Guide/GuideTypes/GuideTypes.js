import { View, StyleSheet, Text } from "react-native";
import { GuideType } from "./GuideType/GuideType.js";


export default function GuideTypes({navigation}){
    return(
        <View style={style.container}>
            <Text style={style.title}>Types of guides</Text>
            <View style={style.types}>
                <View style={style.twoType}>
                    <GuideType style={style.col1} type="Strength" navigation={navigation}/>
                    <GuideType style={style.col1} type="Muscle Gain" navigation={navigation}/>
                </View>
                <View style={style.twoType}> 
                    <GuideType style={style.col1} type="Get Lean" navigation={navigation}/>
                    <GuideType style={style.col1} type="Weight Loss" navigation={navigation}/>
                </View>
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
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
    },

    twoType: {
        display: 'flex',
        flexDirection: 'row',
    },

    GuideType: {
        flexDirection: "row"
    },

    title: {
        alignSelf: 'flex-start',
        fontSize: 20,
        margin: '5%'
    },

    col1: {
        borderWidth:  1,
        flex:  1
    },

    col2: {
        borderWidth:  1,
        flex:  2
    }
})