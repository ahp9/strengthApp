import React from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions, Image, FlatList, Text, ScrollView } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const halfScreenWidth = (screenWidth / 2)*0.85;

export default function ListCard({data, WG, navigation}){
    const handleCardPress = (name) => {
        if(WG==='Guides'){
            navigation.navigate('GuideHome', {name});
        } else {
            navigation.navigate('WorkoutHome', {name});
        }
    }
  
    return (
        <View contentContainerStyle={styles.content}>
          {data.length !== 0 ? (
            <FlatList
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleCardPress(item.name)}>
                    <View style={styles.card}>
                        <Image 
                        style={{ width: halfScreenWidth, height: halfScreenWidth, alignSelf: 'center' }}
                        resizeMode="cover" 
                        source={require('strengthapp/assets/workout.png')}/>
                        <Text style={styles.name}
                        numberOfLines={3} ellipsizeMode='tail'
                        >{item.name}</Text>
                    </View>
                </TouchableOpacity>
              )}
              numColumns={2}
              keyExtractor={(index) => index}
            />
          ): <Text style={styles.warning}>No {WG}</Text>}
      </View>
      );
  }

/**
 * 
 */


const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#000',
    },

    item: {
        height: 160,
        margin: 1,
    },
    
    list: {
        paddingHorizontal:'5%'
    },

    card:{
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        borderRadius: 10,
        marginLeft: '2.5%',
        width: halfScreenWidth,
        padding: '5%',
        marginVertical:'5%'
    },

    name:{
        flexWrap: 'wrap',
        fontSize: 16,
        justifyContent: 'center',
        alignSelf: 'center',
    },

    warning:{
        fontSize: 20,
        margin: '5%',
        alignSelf: 'center',
    }
})