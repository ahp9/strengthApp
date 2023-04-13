import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, SafeAreaView,StatusBar } from 'react-native';
import Header from '../lib/Layout/Header/Header.js';
import Footer from '../lib/Layout/Footer/Footer.js';
import WorkoutTypes from '../lib/Workout/WorkoutTypes/WorkoutTypes.js'
import FavoriteType from '../lib/Things/Favorite/FavoriteType/FavoriteType.js';

export default function WorkoutPage({navigation}){
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const jsonData = require('../../public/guides.json');
      setData(jsonData);
    };
    return (
      <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header loggedIn = {true} navigation={navigation} navigationLink={"HomePage"}/>
      <ScrollView style={styles.scrollView}>
        <FavoriteType  navigation={navigation} navigationLink={'WorkoutHome'} string={require('../../public/workouts.json')}/>
        <WorkoutTypes style={styles.types} navigation={navigation} />
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
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