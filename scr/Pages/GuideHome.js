import React , { useState, useEffect } from 'react';
import { StyleSheet, ScrollView,View,  SafeAreaView, StatusBar } from 'react-native';
import Header from '../lib/Layout/Header/Header.js';
import Footer from '../lib/Layout/Footer/Footer.js';
import { WorkoutFlip } from '../lib/Workout/WorkoutFlip/WorkoutFlip.js';
import { GuideHeader } from '../lib/Guide/GuideHeader/GuideHeader.js';

export default function GuideHome({navigation, route}){
    const [workouts, setWorkouts] = useState([]);
    const [data, setData] = useState([]);
    const { name } = route.params;
    
    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const jsonData = require('../../public/guides.json');
        const filteredData = jsonData.filter(guide => name===guide.name);
        setData(filteredData);
    };
    
    const fetchWorkouts = async (ids) => {
        const jsonData = require('../../public/workouts.json');

        const filteredWorkouts = jsonData.filter(workout => ids.includes(workout.id));
        setWorkouts(filteredWorkouts);
    };
    
    useEffect(() => {
        if (data.length > 0) {
            const guide = data.find(item => item.name === name);
            const workoutIds = guide.workouts.map(workout => workout.id);
            fetchWorkouts(workoutIds);
        }
    }, [data, name]);


    return (
        <SafeAreaView style={styles.container}>
            <Header style={styles.header} loggedIn={true} navigation={navigation} navigationLink={"HomePage"}/>
            <ScrollView style={styles.content}>
                <GuideHeader guide={data}/>
                <View style={styles.workouts}>
                    <WorkoutFlip style={styles.flip} navigation={navigation} workouts={workouts} guide={name}/>
                </View>
            </ScrollView>
            <Footer style={styles.footer} navigation={navigation} />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },

    content: {
        marginHorizontal: '2.5%',
    },

    workoutname: {
        fontSize: '18px'
    },

    workouts: {
        flex:1,
        alignSelf: 'center',
    }
 });