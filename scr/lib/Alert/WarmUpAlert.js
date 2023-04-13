import { StyleSheet, Text, View,  TextInput } from 'react-native';

export function WarmUpAlert({setTime, onClose, time}){
    return(
        <View>
            <Text style={styles.title}>Track Time</Text>
            <Text style={styles.message}>Enter your time below</Text>
             <View style={styles.inputs}>
                <TextInput 
                    style={styles.input}
                    keyboardType="numeric"
                    value={time}
                    onChangeText={setTime}
                    onSubmitEditing={onClose}
                    placeholder="time" 
                    placeholderTextColor="#999"
                />
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
      alignSelf: 'center',
      borderRadius: 10,
      padding: 10,
      borderColor : "#000",
      borderWidth: 1,
      width: '80%'
    }
});