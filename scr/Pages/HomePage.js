
import React, { useState, useEffect , useCallback} from 'react';
import { StyleSheet, StatusBar, Text, ScrollView, SafeAreaView } from 'react-native';
import Header from '../lib/Layout/Header/Header.js';
import YourGuide from '../lib/Guide/YourGuide/YourGuide.js';
import Footer from '../lib/Layout/Footer/Footer.js';

export default function HomePage({ navigation }) {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
      
    const jsonData = require('../../public/guides.json');
    const guide = jsonData.filter(item => item.ongoing === true);
    setData(guide);
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