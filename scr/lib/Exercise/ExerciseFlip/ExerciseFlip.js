import { TouchableOpacity, StyleSheet, Text, SafeAreaView, Image, View, Dimensions } from 'react-native';

export function ExerciseFlip({exercises, navigation, workout, guide}){
    const handlePost = (i) => {
        navigation.navigate('ExerciseScreen', {exercises: exercises, currentExerciseIndex: i, navigation, workout, guide });
    }

    const windowWidth = Dimensions.get('window').width; // get the window width    
    const maxChars = Math.floor((windowWidth * 0.8 - 84) / 10); 
    const maxTextWidth = Math.floor(18 * maxChars);

    const exercise = (exersise) => {
        return (
            <View style={styles.undertext}>
                <Text>Sets {exersise.sets}, </Text>
                <View style={styles.reps}>
                    <Text>Reps </Text>
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
            <View style={styles.undertext}>
                <Text>Time 5-10 min</Text>
            </View>
        )
    }

    const renderExercises = () => {
        return exercises.map((exersise, i) => (
            <TouchableOpacity  key={exersise.id} onPress={() => handlePost(i)}>
                <View style={styles.container}>
                    <View style={styles.texts} >
                        <Text numberOfLines={1} ellipsizeMode='tail' style={[styles.workoutname, { maxWidth: maxTextWidth }]}>{exersise.name}</Text>
                        {exersise.warmUp ? (warmup()) : (exercise(exersise))}
                    </View>
                    {exersise.completed ? <Image style={styles.img} source={require('strengthapp/assets/check.png')}/> : <Image style={styles.img} source={require('strengthapp/assets/Vector.png')}/>}
                </View>
            </TouchableOpacity>
        ));
    }

    return (
        <SafeAreaView >
            {renderExercises()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignSelf: 'center',
        backgroundColor: 'rgba(233, 235, 255, 0.5)', 
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 8,
        height: 72,
        width: '100%'
    },

    workoutname:{
        fontSize: 18,
        overflow: 'hidden',
        maxWidth: '97%',
    },

    undertext:{
        display:'flex',
        flexDirection: 'row'
    },

    reps:{
        display:'flex',
        flexDirection: 'row'
    },

    rep:{
        marginHorizontal:'2%'
    },

    img:{
        justifyContent: 'center' ,
        marginHorizontal: '2.5%',
    }

});