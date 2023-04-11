import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function LogOutButton({navigation}) {
  const onPressed = () =>{
    console.log('test', navigation);
    navigation.navigate("Index");
  }

  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={() => onPressed()}>
        <View>
            <Text style={styles.text}>Logout</Text>
        </View>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  touchableOpacity: {
    backgroundColor:'#E9EBFF',
    alignSelf: 'center',
    borderRadius: 10,
    padding: '2.5%',
    marginVertical: '2.5%',
    width: '80%'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});