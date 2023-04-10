import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import { ExerciseAlert } from './ExerciseAlert.js';
import { WarmUpAlert } from './WarmUpAlert.js';

const TrackAlert = ({ isVisible, onClose, type }) => {
    const [reps, setReps] = useState('');
    const [weights, setWeights] = useState('');
    const [time, setTime] = useState('');

    const handleUpdatePress = () => {
      if(type === 'Exercise'){
        onClose(reps, weights, null);
        setReps('');
        setWeights('');
      } else {
        onClose(null, null, time);
        setTime('');
      }
    };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.modal}>
      <View style={styles.container}>
        {type==='Exercise' ?  <ExerciseAlert setReps={setReps} setWeights={setWeights} onClose={onClose} reps={reps} weights={weights}/> :
         <WarmUpAlert setTime={setTime} onClose={onClose} time={time}/>
        }
        <TouchableOpacity style={styles.button} onPress={handleUpdatePress}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#CDD4FF',
    padding: '2.5%',
    borderRadius: 5,
    marginVertical: '3%',
    width: '90%'
  },
  buttonText: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 16,
  },

  inputs:{
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
    width: '48%'
  }
});

export default TrackAlert;