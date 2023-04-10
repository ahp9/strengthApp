
import React, { useState, useEffect , useCallback} from 'react';
import { StyleSheet, StatusBar, Text, ScrollView, SafeAreaView } from 'react-native';
import Header from '../lib/Layout/Header/Header.js';
import YourGuide from '../lib/Guide/YourGuide/YourGuide.js';
import Footer from '../lib/Layout/Footer/Footer.js';
/**
 * import * as SQLite from 'expo-sqlite';
import { FileSystem } from 'expo';
import { openDatabase } from 'react-native-sqlite-storage';
import { Asset } from 'expo-asset';
 */

export default function HomePage({ navigation }) {
  const [data, setData] = useState([]);
  /*
  const db = SQLite.openDatabase('strength/database/database.db');
  db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users',
        [],
        (_, { rows }) => {
          // Handle the query results
          console.log(rows);
        },
        (_, error) => {
          // Handle the query error
          console.error(error);
          console.log("faild");
        }
      );
    });
  */
  const fetchData = useCallback(async () => {
      
    const jsonData = require('../../public/guides.json');
    setData(jsonData);
  });

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header loggedIn = {true} navigation={navigation} navigationLink={"HomePage"}/>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Your Guide</Text>
        <YourGuide data={data} navigation={navigation}/>
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scrollView: {
    backgroundColor: '#fff',
  },

  header: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 28,
    marginTop: '5%',
  },
  
});