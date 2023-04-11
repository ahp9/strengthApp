import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function CreateButton({navigation, navigationLink}) {
  
    const onPressed = () =>{
    navigation.navigate(navigationLink);
  }

  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={() => onPressed()}>
        <View>
            <Text style={styles.text}>Create</Text>
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