import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, SafeAreaView, Image, View } from 'react-native';
import Header from '../lib/Layout/Header/Header.js';
import UnderlineText from '../lib/Form/UnderlineText/UnderlineText.js';
import Input from '../lib/Form/Input/Input.js'

export default function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [state, setState] = useState('');

    const handlePost = () => {
        // Handle posting the text here
        if(!username || !password){
            setState('error');
            setError('username or password ');
        } else {
            setState('state');
            console.log(`Password: ${password}`);
            console.log(`Username: ${username}`);
            setUsername('');
            setPassword('');
            navigation.navigate('HomePage')
        }
    };

    return (
      <SafeAreaView style={styles.container}>
        <Header loggedIn = {false} navigation={navigation} navigationLink={"Index"}/>
        <Text style={styles.login}>Login</Text>
        <View>
            <Input 
                text="Username"
                value={username}
                onChangeText={setUsername}
                onSubmitEditing={handlePost}
                placeholder="Input username"
                returnKeyType="send" />
            <Input 
                text="Password"
                value={password}
                onChangeText={setPassword}
                onSubmitEditing={handlePost}
                placeholder="Input password"
                returnKeyType="send" />
        </View>
        {state === 'error' ? <Text style={styles.error}>Error, invalid {error}</Text>: null}
        <TouchableOpacity style={styles.buttons} onPress={handlePost}> 
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Image 
        style={styles.img}
        source={require('strengthapp/assets/Line.png')}/>
        <UnderlineText
            sentance = "Don't have an account, register"
            navigation = {navigation}
            navigate = 'Register'
            word = 'here'
        />
      </SafeAreaView>
    );
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    
    login:{
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 50,
    },

    texts:{
        fontSize: 16,
        margin: 20,
        alignSelf: 'flex-start',
        marginLeft: 50,
    },

    buttons: {
        flex: 0,
        backgroundColor: '#CDD4FF',
        borderRadius: 10,
        padding: 10,
        alignSelf: 'flex-end',
        width: '30%',
        marginRight: 40,
        marginTop: 20,
    },

    buttonText: {
        textAlign: 'center'
    },

    img:{
        margin: 50,
        width: '80%'
    },

    error:{
        fontSize: 12,
        alignSelf: 'center',
        margin: '5%'
    }
});