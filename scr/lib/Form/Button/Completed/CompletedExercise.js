import { Text,StyleSheet, TouchableOpacity, View } from "react-native";

export function CompletedExercise({nextExercise}){
    return(
        <TouchableOpacity onPress={() => nextExercise(true)}>
                <View  style={styles.setTracker}>
                    <Text style={styles.setNumber}>Complete Exercise</Text>
                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    
    alert:{
        width: '90%'
    },

    setTracker:{
        alignSelf: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        marginVertical: '5%',
        justifyContent: 'space-evenly'
    },

    setNumber:{
        fontSize: 20,
        padding: '2.5%',
    },

    repsAndWeights:{
        fontSize: 18,
        alignSelf: 'center',
    }  
});