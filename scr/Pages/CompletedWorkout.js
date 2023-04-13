import React from 'react';
import { StyleSheet, ScrollView,View,  SafeAreaView, Text,StatusBar, Image, TouchableOpacity } from 'react-native';
import Header from '../lib/Layout/Header/Header.js';
import Footer from '../lib/Layout/Footer/Footer.js';

export default function CompleteWorkout({navigation, route}){
    const { workout } = route.params;
    console.log("Completed", workout);
    

    return (
        <SafeAreaView style={styles.container}>
            <Header style={styles.header} loggedIn={true} navigation={navigation} navigationLink={"HomePage"}/>
            <ScrollView style={styles.content}>
                <Image 
                style={{ width: 320, height: 320, alignSelf: 'center' , margin: '10%'}}
                resizeMode="cover" 
                source={require('strengthapp/assets/legday.png')}/>
                <Text style={styles.text}>{workout}</Text>
                <View style={styles.texts}>
                   <Text>Good Job!</Text>
                   <Text>It took you 65 min to finish the workout</Text>
                   <Text>You have finished 65% of the Guide</Text>
                </View>
                <TouchableOpacity  onPress={() => navigation.navigate('HomePage')}>
                    <View style={styles.button}>
                        <Text>Go back</Text>
                    </View>
                </TouchableOpacity>
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

    text:{
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },

    content: {
        marginHorizontal: '2.5%',
    },

    texts: {
        backgroundColor: '#E9EBFF',
        borderRadius: 10,
        margin: '10%',
        padding: '5%'
    },

    workouts: {
        flex:1,
        alignSelf: 'center',
    },

    button:{
        alignItems: 'center',
        alignSelf: 'flex-end',
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 2,
        marginHorizontal: '10%',
        padding: '2%',
        width: '20%',
    }
 });