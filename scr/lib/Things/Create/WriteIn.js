import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import ExerciseHeader from '../../Layout/Header/ExerciseHeader';

export function WriteIn({getInfo, WG}){
    const [name, setName] = useState('');
    const [weeks, setWeeks] = useState('');
    const [days, setDays] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');
    console.log('WG',WG)
    
    return (
      <View style={styles.container}>
        <View  style={styles.input}>
          <Text style={styles.header}>Name of the {WG}</Text>
          <TextInput 
                    style={styles.textinput}
                    value={name}
                    onChangeText={setName}
                    onSubmitEditing={getInfo}
                />
        </View>
        {WG === 'workout' ? 
        <>
          <Text style={styles.header}>Weeks & Days</Text>
          <View style={styles.WandD}>
            <View style={styles.WDinput}>
              <Text>Weeks</Text>
              <TextInput 
                    style={styles.textinputA}
                    value={weeks}
                    onChangeText={setWeeks}
                    onSubmitEditing={getInfo}
                />
            </View>
            <View style={styles.WDinput}>
              <Text style={styles.header}>Days</Text>
              <TextInput 
                    style={styles.textinputA}
                    value={days}
                    onChangeText={setDays}
                    onSubmitEditing={getInfo}
                />
            </View>
          </View>
        </>  
        :
        <>
          <View style={styles.input}>
              <Text style={styles.header}>Time</Text>
              <TextInput 
                    style={styles.textinputA}
                    value={time}
                    onChangeText={setTime}
                    onSubmitEditing={getInfo}
                />
            </View>
        </>
      }
        <View style={styles.input}>
          <Text style={styles.header}>Write description</Text>
          <TextInput 
                    style={styles.textdescription}
                    value={description}
                    onChangeText={setDescription}
                    onSubmitEditing={getInfo}
                />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignSelf: 'center',
      width: '90%'
    },

    header: {
      marginBottom: '2%',
      fontWeight: '500',
      fontSize: 15,
    },
  
    textinput:{
      borderColor: '#000',
      borderWidth: 1,
      borderRadius: 5,
      width: '100%'
    },

    textinputA:{
      borderColor: '#000',
      borderWidth: 1,
      borderRadius: 5,
      width: '70%',
      marginLeft: '2%'
    },

    input:{
      display: 'flex',
      flexDirection: 'column',
      marginVertical: '5%'
    },

    WDinput:{
      display: 'flex',
      flexDirection: 'row',
      width: '50%'
    },

    WandD:{
      display: 'flex',
      flexDirection: 'row',
    },

    textdescription: {
      borderColor: '#000',
      borderWidth: 1,
      borderRadius: 10,
      height: 50,
      width:'100%'
    }
});