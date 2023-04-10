import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import Header from '../lib/Layout/Header/Header.js';
import UnderlineText from '../lib/Form/UnderlineText/UnderlineText.js';
import Input from '../lib/Form/Input/Input.js'

export default function Register({ navigation }) {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [state, setState] = useState('');

    const handlePost = () => {
        if(!name || !username || !password){
            setState('error');
        } else {
            setState('state');
            console.log(`Username: ${username}`);
            console.log(`Password: ${password}`);
            console.log(`Password: ${name}`);
            setUsername('');
            setPassword('');
            setName('');
            navigation.navigate('HomePage');
        }
        // Handle posting the text here
    };

    return (
      <View style={styles.container}>
        <Header loggedIn = {false} navigation={navigation} navigationLink={"Index"}/>
        <Text style={styles.login}>Create Account</Text>

        <View>
            <Input 
                text="Name"
                value={name}
                onChangeText={setName}
                onSubmitEditing={handlePost}
                placeholder="Input name"
                returnKeyType="send" />
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
        {state === 'error' ? <Text style={styles.error}>Error, invalid name, username or password</Text>: null}
        <TouchableOpacity style={styles.buttons} onPress={handlePost}> 
            <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
        <Image 
        style={styles.img}
        source={require('strengthapp/assets/Line.png')}/>
        <UnderlineText
            sentance = "Do you already have an account? If so login "
            navigation = {navigation}
            navigate = 'Login'
            word = 'here'
        />
      </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      width: '100%'
    },
    
    register: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
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

    input: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        borderColor : "#000",
        borderWidth: 1,
        width: '80%'
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