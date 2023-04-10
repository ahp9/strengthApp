import { StyleSheet, Text, View, TextInput } from 'react-native';

export function ExerciseAlert({setReps, setWeights, onClose, reps, weights}){
    return(
        <View>
            <Text style={styles.title}>Track Reps & Weights</Text>
            <Text style={styles.message}>Enter your reps and weights below</Text>
             <View style={styles.inputs}>
                <TextInput 
                    style={styles.input}
                    keyboardType="numeric"
                    value={reps}
                    onChangeText={setReps}
                    onSubmitEditing={onClose}
                    placeholder="reps" 
                    placeholderTextColor="#999"
                />
                <TextInput 
                    value={weights}
                    onChangeText={setWeights}
                    keyboardType="numeric"
                    placeholder="weights"
                    onSubmitEditing={onClose}
                    style={styles.input}
                    placeholderTextColor="#999"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },

    message: {
        alignSelf: 'center',
      fontSize: 18,
      marginBottom: 20,
    },

    inputs:{
        alignSelf: 'center',
      display: 'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      width: '90%'
    },
  
    input:{
      borderRadius: 10,
      padding: 10,
      borderColor : "#000",
      borderWidth: 1,
      width: '48%'
    }
});