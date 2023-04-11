import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, SafeAreaView,StatusBar } from 'react-native';
import Header from '../lib/Layout/Header/Header';
import CreateButton from '../lib/Form/Button/Create/CreateButton';

export function CreatePage({navigation, navigationLink, WG}){
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const jsonData = require('../../public/guides.json');
      setData(jsonData);
    };

    const getInfo = () => {
        console.log('test');
    }

    return (
      <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header style={styles.header} loggedIn={true} navigation={navigation} navigationLink={"HomePage"}/>
      <ScrollView style={styles.scrollView}>
        <CreateButton navigation={navigation} navigationLink={navigationLink}/>
      </ScrollView>
    </SafeAreaView>
    )
}

/**
 *   <WriteIn getInfo={getInfo}/>
 */

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

/**
 */