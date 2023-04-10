import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function DificultyLevel(props) {
    const {dificulty} = props;
    return (
        <View style={styles.dificulty}>
                <Text style={styles.dificultyText}>{dificulty}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    dificulty:{
        flex:0,
        justifyContent: 'flex-start',
        width: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 10,
        margin: 10,

    },

    dificultyText:{
        alignSelf: 'center',
        margin: 5,
    }
})
