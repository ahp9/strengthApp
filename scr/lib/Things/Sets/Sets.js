import React, { useState } from 'react';
import { StyleSheet,  View,  Text,   Image, TouchableOpacity } from 'react-native';
import TrackAlert from '../../Alert/TrackAlert.js';

export function Sets({exercise}){
    const { sets } = exercise;
    const [showAlert, setShowAlert] = useState(false);
    const [type, setType] = useState('');

    const handleAlertClose = (reps, weights, time) => {
        if(time === null){
            console.log('How manu reps', reps);
            console.log('How many weights', weights);
        } else {
            console.log('What time ', time);
        }
        setShowAlert(false);
    };

    const renderSetTracker = () => {
      const setTrackers = [];
  
      for (let i = 1; i <= sets; i++) {
        setTrackers.push(
            <TouchableOpacity key={i} onPress={() => setAlert('Exercise')}>
                <View  style={styles.setTracker}>
                    <Text style={styles.setNumber}>Set {i}</Text>
                    <Text style={styles.repsAndWeights}>Track Reps & Weights</Text>
                </View>
            </TouchableOpacity>

        );
      }
      return setTrackers;
    };

    const setAlert = (type) => {
        setShowAlert(true);
        setType(type)
    }

    const renderWorkoutTracker = () => {
        const setTrackers = [];
        set = 1;
        for (let i = 1; i <= set; i++) {
          setTrackers.push(
              <TouchableOpacity key={i} onPress={() => setAlert('WarmpUp')}>
                  <View  style={styles.setTracker}>
                      <Text style={styles.setNumber}>Set {i}</Text>
                      <Text style={styles.repsAndWeights}> Time  </Text>
                      <View>
                        {exercise.completed ? <Image source={require('strengthapp/assets/completed.png')}/>: null}
                      </View>
                  </View>
              </TouchableOpacity>  
          );
        }
        return setTrackers;
    };
    
    return(
        <View style={styles.container}>
            {exercise.warmUp ? renderWorkoutTracker() : renderSetTracker()}
            <TrackAlert style={styles.alert} isVisible={showAlert} onClose={handleAlertClose} type={type}/>
        </View>
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
        backgroundColor: 'rgba(233, 235, 255, 0.5)',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        marginVertical: '5%',
        justifyContent: 'space-evenly'
    },

    setNumber:{
        fontSize: 20,
        fontWeight: 'bold',
        padding: '2.5%',
    },

    repsAndWeights:{
        fontSize: 18,
        alignSelf: 'center',
    }  
});