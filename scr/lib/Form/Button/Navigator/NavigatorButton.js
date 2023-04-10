import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'

export function NavigatorButton({navigateBackToExercise, navigateToNextExercise, workout,current, length, guide}){
    return(
        <View style={styles.navigator}>
        <TouchableOpacity onPress={() => navigateBackToExercise(workout, guide)} >
            <View style={styles.background}>
                <Image 
                    style={styles.back}
                    resizeMode="cover"  
                    source={require('strengthapp/assets/Vector.png')} />
            </View>
        </TouchableOpacity>
        <Image style={styles.line} source={require('strengthapp/assets/Line.png')}/>
        <TouchableOpacity onPress={() => navigateToNextExercise(workout)} >
            <View>
                {current+1 < length ? <Image style={styles.front} source={require('strengthapp/assets/Vector.png')} /> : 
                <Image style={styles.front} source={require('strengthapp/assets/completed.png')} />}
            </View>
        </TouchableOpacity>
    </View>
    )
}


const styles = StyleSheet.create({
    navigator:{
        alignSelf:'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#E9EBFF",
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        height: 40,
        width: '30%'
    },

    background:{
        backgroundColor: "#E9EBFF",
    },

    back:{
        width: 27, 
        height: 20, 
        alignSelf: 'center',
        transform: [{ rotate: '180deg' }],
    },

    front: {
        width: 27, 
        height: 20, 
    },

    line: {
        transform: [{ rotate: '90deg' }],
        width: '25%'
    },
}
)