import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, SafeAreaView,StatusBar, TextInput } from 'react-native';
import ExerciseHeader from '../../Layout/Header/ExerciseHeader';

export function WriteIn({getInfo}){
    const [name, setName] = useState('');
    const [weeks, setWeeks] = useState(0);
    const [days, setDays] = useState(0);
    const [description, setDescription] = useState('');

    
    return (
      <View>
        <View>
          <Text>Name of the Guide</Text>
          <TextInput 
                    style={styles.textinput}
                    value={name}
                    onChangeText={setName}
                    onSubmitEditing={getInfo}
                />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  
    scrollView: {
      backgroundColor: '#fff',
      marginHorizontal: '5%'
    },
});