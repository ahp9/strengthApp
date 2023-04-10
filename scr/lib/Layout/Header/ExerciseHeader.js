import {  StyleSheet, SafeAreaView,TouchableOpacity ,Image, View} from 'react-native';
import React, { useState } from 'react';

export default function ExerciseHeader(props) {
  const {navigation, backLink, name, guide} = props

  const [backgroundColor, setBackgroundColor] = useState('#CDD4FF');

  const handlePress = () => {
    setBackgroundColor(backgroundColor === '#CDD4FF' ? 'rgba(255,255,255,0.5)' : '#CDD4FF');
  };
    return (
      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate(backLink, {name, guide})}>
          <Image 
            style={styles.logo}
            source={require('strengthapp/assets/back.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
            <View style={[styles.fav, { backgroundColor }]}>
              <Image 
                style={styles.logo}
                source={require('strengthapp/assets/heart.png')}/>
            </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
}


const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: "#CDD4FF",
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: '100%',
  },

  logo: {
    margin: 15,
    padding: 2
  },

  fav: {
    alignItems: 'center',
    borderRadius: 50, 
    borderColor: '#000' , 
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    marginHorizontal: 15,
    width: 40,
  }
})