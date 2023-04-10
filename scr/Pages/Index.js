import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function Index() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Strength</Text>
      <Image 
        style={styles.img}
        resizeMode="cover" 
        source={require('strengthapp/assets/gym.png')}/>
    <Text style={styles.buttonText}>Login</Text>
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
    margin: 100,
    width: 40,
    height: 40,
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