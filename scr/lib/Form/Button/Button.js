import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function Button({text, navigation, navigationLink, exercises, workout, guide}) {
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  useEffect(() => {
    setBackgroundColor('#E9EBFF')
  });
  const onPressed = () =>{
    console.log('workouts', workout)
    navigation.navigate(navigationLink, { exercises: exercises, currentExerciseIndex: 0 , navigation, workout, guide});
  }

  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={() => onPressed()}>
        <View>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  touchableOpacity: {
    backgroundColor:'#E9EBFF',
    alignSelf: 'center',
    borderRadius: 10,
    padding: '2.5%',
    marginVertical: '2.5%',
    width: '80%'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});