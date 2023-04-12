import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, SafeAreaView,StatusBar } from 'react-native';
import Header from '../lib/Layout/Header/Header';
import CreateButton from '../lib/Form/Button/Create/CreateButton';
import { WriteIn } from '../lib/Things/Create/WriteIn';

export function CreatePage({navigation,route}){
    const{ navigationLink, WG} = route.params;
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const jsonData = require('../../public/guides.json');
      setData(jsonData);
    };

    const getInfo = (name, weeks, days, description) => {
        console.log(name);
    }

    return (
      <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header style={styles.header} loggedIn={true} navigation={navigation} navigationLink={"HomePage"}/>
      <ScrollView style={styles.scrollView}>
        <CreateButton navigation={navigation} navigationLink={navigationLink}/>
        <WriteIn getInfo={getInfo} WG={WG}/>
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