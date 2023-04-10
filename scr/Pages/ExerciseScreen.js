// ExerciseScreen.js

import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, SafeAreaView, Text, StatusBar, Image } from 'react-native';
import ExerciseHeader from '../lib/Layout/Header/ExerciseHeader.js';
import {ExerciseOverview}  from '../lib/Exercise/Overview/ExerciseOverview.js';
import { Sets}  from '../lib/Things/Sets/Sets.js';
import { CompletedExercise } from '../lib/Form/Button/Completed/CompletedExercise.js';
import { NavigatorButton } from '../lib/Form/Button/Navigator/NavigatorButton.js';

const ExerciseScreen = ({ route }) => {
  const { exercises, currentExerciseIndex, navigation, workout ,guide} = route.params;
  const [currentIndex, setCurrentIndex] = useState(currentExerciseIndex);
  const currentExercise = exercises[currentIndex];

  const navigateToNextExercise = () => {
    if(currentIndex + 1 === exercises.length){
        doneWithWorkout(workout) 
    } else {
      const nextExerciseIndex = currentIndex + 1;
      setCurrentIndex(nextExerciseIndex);
    }
    
  };

  const navigateBackToExercise = (workout, guide) => {
    if(currentIndex - 1 < 0){
        goBack(workout, guide) 
    }
    const nextExerciseIndex = currentIndex - 1;
    
    setCurrentIndex(nextExerciseIndex);
  };

  const goBack = (workout, guide) =>{
    navigation.navigate('WorkoutHome', {name:workout, guide});
  }

  const doneWithWorkout = (workout) => {
    navigation.navigate('CompleteWorkout', {workout})
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ExerciseHeader navigation={navigation} backLink="WorkoutHome" name={workout} guide={guide}/>
      <ScrollView style={styles.scrollView}>
        <View style={styles.hero}>
            <Image 
                style={{ width: 320, height: 320, alignSelf: 'center' }}
                resizeMode="cover" 
                source={require('../../assets/exercises/barbell-bench-press.png')} />
            <View style={styles.header}>
                <Text style={styles.name}>{currentExercise.name}</Text>
                <View style={styles.status}>
                    <Text style={styles.statusText} >Exercise {currentIndex+1}/{exercises.length}</Text>
                </View>
            </View>
        </View>
        <View>
          <NavigatorButton navigateBackToExercise={navigateBackToExercise} navigateToNextExercise={navigateToNextExercise} current={currentIndex} workout={workout} length={exercises.length} guide={guide}/>
        </View>
        <View style={styles.exerciseBackground}>
            <ExerciseOverview  exercise={exercises[currentIndex]}/>
            <Sets exercise={exercises[currentIndex]}/>
            <CompletedExercise nextExercise={navigateToNextExercise}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  
    scrollView: {
      backgroundColor: '#fff',
      marginHorizontal: '5%'
    },

    hero:{
        display: 'flex',
        flexDirection: 'column',
    },

    header:{
        display:'flex',
        flexDirection:'row',
        marginVertical: '5%',
        justifyContent: 'space-between',
    },

    name:{
        fontSize: 24,
        fontWeight: 'bold',
        flex:1, 
        flexWrap: 'wrap'
    },
  
    status:{
      backgroundColor:'#E9EBFF',
      borderRadius: 10,
      height: 30,
      width: 90
    },

    statusText:{
      alignSelf: 'center', 
      justifyContent: 'center',
      marginTop: '5%'
    },

    exerciseBackground:{
        backgroundColor: "#CDD4FF",
        borderRadius: 10,
        marginVertical: '5%'
    }

});

export default ExerciseScreen;