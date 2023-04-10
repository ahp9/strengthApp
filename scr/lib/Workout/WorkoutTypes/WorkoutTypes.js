import { View, Text, StyleSheet } from 'react-native';
import {Type} from '../../Form/Type/Type.js'


export default function ExerciseTypes({navigation}){
    return(
        <View style={style.content}> 
            <Text style={style.title}>Workouts</Text>
            <View style={style.types}>
                <Type name="Lower body" navigation={navigation} WG={'Workouts'} things={'type'} />
                <Type name="Upper body" navigation={navigation} WG={'Workouts'} things={'type'}/>
                <Type name="Full body" navigation={navigation} WG={'Workouts'} things={'type'}/>
                <Type name="Cardio" navigation={navigation} WG={'Workouts'} things={'type'}/>
                <Type name="Abs" navigation={navigation} WG={'Workouts'} things={'type'}/>
                <Type name="All" navigation={navigation}WG={'Workouts'} things={'type'}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    content:{
        flex:1
    },
    
    types: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: 24,
        margin: '5%',
        alignSelf: 'center',
    }
})