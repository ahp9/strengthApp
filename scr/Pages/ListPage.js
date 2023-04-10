import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, StatusBar, View, ScrollView } from 'react-native';
import Header from '../lib/Layout/Header/Header.js';
import Footer from '../lib/Layout/Footer/Footer.js';
import ListCard from '../lib/Things/List/ListCard.js';


export default function ListPage({ route }) {
    const { navigation, things, word, WG } = route.params;
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, [things, word, WG]);
    
    const fetchData = async () => {
      let filteredData = []
        if(WG === 'Guides'){
            const jsonData = require('../../public/guides.json');
            if(things === 'type'){
                filteredData = jsonData.filter(guide => word === guide.type);
            } else {
                if(word !== 'All'){
                  filteredData = jsonData.filter(guide => word === guide.difficult_level);
                } else {
                  filteredData = jsonData
                }
            }
            setData(filteredData);
        } else {
            const jsonData = require('../../public/workouts.json');
            if(word !== 'All'){
              filteredData = jsonData.filter(workout => word===workout.type);
            } else {
              filteredData = jsonData;
            }
            setData(filteredData);
        }
    };
    

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header loggedIn = {true} navigation={navigation} navigationLink={"HomePage"}/>
      <View style={styles.scrollView}>
        <Text style={styles.header}>{WG}</Text>
        <ListCard style={styles.list} data={data} WG={WG} navigation={navigation}/> 
      </View>
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
      marginHorizontal: '5%'
    },

    list:{
        backgroundColor: '#000'
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