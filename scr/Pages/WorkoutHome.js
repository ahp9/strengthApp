import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, SafeAreaView, Text, StatusBar } from 'react-native';
import Footer from '../lib/Layout/Footer/Footer.js';
import Button from '../lib/Form/Button/Button.js';
import ExerciseHeader from '../lib/Layout/Header/ExerciseHeader.js';
import { WorkoutOverview } from '../lib/Workout/Overview/WorkoutOverview.js';
import { ExerciseFlip } from '../lib/Exercise/ExerciseFlip/ExerciseFlip.js';

export default function WorkoutHome({ navigation, route }) {
  const [workout, setWorkout] = useState([]);
  const [exercises, setExercises] = useState([]);

  const { name, guide } = route.params;
  console.log('guide', guide);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const jsonData = require('../../public/workouts.json');
    const workout = jsonData.find(item => item.name === name);
    setWorkout(workout);

    if(workout){
        if (Array.isArray(workout.exersise)) {
            const exercise = workout.exersise.map(exercise => exercise);
            setExercises(exercise);
        } else {
            console.error("Exercise is not an array");
        }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ExerciseHeader navigation={navigation} backLink="GuideHome" name={guide}/>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>{name}</Text>
        <Button text='Start workout' navigation={navigation} navigationLink="ExerciseScreen" exercises={exercises} workout={name} guide={guide}/>
        <WorkoutOverview workout={workout}/>
        <Text style={styles.header}>Exercises</Text>
        {console.log('name', name)}
        <View style={styles.content}>
            {exercises ? (
                <ExerciseFlip exercises={exercises} navigation={navigation} workout={name} guide={guide}/>
            ) : (
                <View style={styles.content}>
                    <Text>No workout found</Text>
                </View>
            )}
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

// <ExerciseFlip name="Warm Up" undertext="Times: 5-10 min" completed={false}/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scrollView: {
    backgroundColor: '#fff',
  },

  content: {
    paddingVertical: 32,
    paddingHorizontal: 24,
  },

  header:{
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: '5%',
    width: '80%'
  },

  sectionTitle: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  exerciseName: {
    fontSize: 18,
    marginBottom: 8,
  },
});