import React from 'react';
import { StyleSheet, View,  Text } from 'react-native';


export default function ProgressCard(props) {
    return (
        <View style={styles.container} key={props.id}>
             <Text style={styles.nameGuide}>Progress</Text>
             <View  style={styles.gradient}> 
                <View  style={styles.left}><Text> </Text></View>
                <Text></Text>
             </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CDD4FF',
        padding: '5%',
        borderRadius: 10,
    },

    nameGuide:{
        fontSize: 18,
    },

    gradient: {
        flex: 1,
        backgroundColor: 'rgba(233, 235, 255, 0.5)',
        borderRadius: 5,
        flexDirection: 'row',
        marginTop: '5%',
        width: '100%'
    },

    left:{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 5,
        width:'50%'
    },
})