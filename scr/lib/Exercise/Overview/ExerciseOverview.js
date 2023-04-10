import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export function ExerciseOverview({exercise}){
    const [data, setData] = useState("");
    useEffect(() => {
        fetchData();
    }, [exercise]);
    
    const fetchData = async () => {
        const jsonData = require('../../../../public/exersices.json');
        const filteredData = jsonData.filter(e => e.name===exercise.name);
        console.log(filteredData);
        setData(filteredData[0].description);
    };


    const setsAndReps = (exersise) => {
        return (
            <View style={styles.undertext}>
                <View style={styles.reps}> 
                    <Text style={{fontWeight:"bold"}}>Sets </Text>
                    <Text> {exersise.sets} </Text>
                </View>
                <View style={styles.reps}>
                    <Image source={require('strengthapp/assets/dots.png')}/>
                    <Text style={{fontWeight:"bold", marginHorizontal: '2.5%'}}>Reps </Text>
                    {exersise.reps === 'As many as you can' ? (
                        <Text>{exersise.reps}</Text>
                    ) : (
                        Array.from(Array(exersise.sets), (_, i) => <Text style={styles.rep} key={i}>{exersise.reps}</Text>)
                    )}
                </View>
            </View>
        )
    }

    const warmup  = () => {
        return(
            <View style={styles.warmupUnderText}>
                <Text style={{fontWeight:"bold"}}>Time</Text>
                <Text> 5-10 min</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}> Exercise overview</Text>
            <View style={styles.content}>
                {exercise.warmUp ? (warmup()) : (setsAndReps(exercise))}
                <Text style={styles.description}>{data}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: '10%',
        marginVertical: '5%',
    }, 
    header:{
        fontSize: 18,
        marginVertical: '2.5%',
        textDecorationLine: 'underline'
    },
    
    content: {
        display:'flex',
        flexDirection: 'column',
        marginVertical: '2.5%'
    },

    warmupUnderText:{
        display: 'flex',
        flexDirection: 'row',
    },

    undertext:{
        display: 'flex',
        flexDirection: 'column',
        marginVertical: '5%'
    },

    reps:{
        display: 'flex',
        flexDirection: 'row',
        marginVertical: '2.5%'
    },

    rep:{
        marginHorizontal: '1%'
    },

    description:{
        fontSize: 16
    },

    texts:{
        display: 'flex',
        flexDirection: 'row'
    },

    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    nonBold:{
        fontSize: 16,
    },

    img:{
        marginRight: '2.5%'
    }
})