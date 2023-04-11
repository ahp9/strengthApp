import React, {useState, useEffect} from 'react';
import { StyleSheet, ScrollView,View,  SafeAreaView, Text,StatusBar, TouchableOpacity } from 'react-native';
import Header from '../lib/Layout/Header/Header.js';
import Footer from '../lib/Layout/Footer/Footer.js';
import ChangeAlert from '../lib/Alert/User/ChangeAlert.js';

export default function User({navigation}){
    const [user, setUser] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
 
    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const jsonData = require('../../public/user.json');
        setUser(jsonData);
    };

    
    const handleAlertClose = (change, name, username, password) => {
       console.log(name);
       console.log(username);
       console.log(password);
        setShowAlert(false);
    };

    console.log('user', user);
    return (
        <SafeAreaView style={styles.container}>
            <Header style={styles.header} loggedIn={false} navigation={navigation}/>
            <ScrollView style={styles.content}>
                <Text style={styles.h2}>User</Text>
                <View style={styles.information}>
                    <View style={styles.info}>
                        <Text style={styles.h3}>Name:</Text>
                        <Text style={{fontSize: 20}}>{user.length >0 ? user[0].name: ''}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.h3}>Username:</Text>
                        <Text style={{fontSize: 20}}>{user.length >0 ? user[0].username: ''}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.h3}>Password:</Text>
                        <Text style={{fontSize: 20}}>{user.length >0 ? user[0].password.replace(/./g, '*'): ''}</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => setShowAlert(true)}>
                        <View style={styles.change}>
                            <Text style={{fontWeight: '500'}}>Change</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ChangeAlert isVisible={showAlert} onClose={handleAlertClose}/>
            </ScrollView>
            <Footer style={styles.footer} navigation={navigation} user={user[0]} />
        </SafeAreaView>

    )
}

/*
{user[0].password.replace(/./g, '*')}
*/

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },

    content: {
        marginTop: '20%',
        marginHorizontal: '10%',
    },

    h2:{
        fontSize: 22,
        fontWeight: 'bold',
    },

    h3:{
        fontSize: 18, 
        marginRight: '10%', 
        fontWeight: '600',
    },


    information:{
        display: 'flex',
        flexDirection: 'column',
        marginVertical: '10%',
        width: '70%'
    },

    info:{
        display: 'flex',
        flexDirection: 'row', 
        marginVertical: '5%',
    },

    change:{
        alignItems: 'center',
        alignSelf: 'flex-end',
        borderRadius: 10,
        borderWidth: 1, 
        borderColor: '#000',
        padding: '2%',
        width: '30%'
    }
 });