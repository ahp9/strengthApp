import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function Index({ navigation }) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Strength</Text>
      <Image 
        style={styles.img}
        resizeMode="cover" 
        source={require('strengthapp/assets/logo.png')}/>
    <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Login')}> 
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDD4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    color: '#000',
    fontSize: 28
  },

  img: {
    margin: '5%',
    width: 300,
    height: 300,
  },

  buttons: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },

  buttonText:{
    fontSize: 20,
  }
});