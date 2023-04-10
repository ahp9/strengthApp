import { TouchableOpacity, StyleSheet, Text, SafeAreaView, Image, View, Dimensions } from 'react-native';

export function WorkoutFlip({workouts, navigation, guide}){

    const handlePost = (name) => {
        navigation.navigate('ExerciseHome', {name , guide });
    }

    const windowWidth = Dimensions.get('window').width; // get the window width

    // calculate the maximum number of characters that can fit in the available space
    const maxChars = Math.floor((windowWidth * 0.8 - 84) / 10); // 84 is the total width of other elements and 10 is an approximate average character width

    // calculate the maximum width of the text element based on the font size and the maximum number of characters
    const maxTextWidth = Math.floor(18 * maxChars);

    const renderWorkouts = () => {
        return workouts.map((workout) => (
            <TouchableOpacity  key={workout.id} onPress={() => handlePost(workout.name)}>
                <View style={styles.container}>
                    <View style={styles.texts} >
                        <Text numberOfLines={1} ellipsizeMode='tail' style={[styles.workoutname, { maxWidth: maxTextWidth }]}>{workout.name}</Text>
                        <Text >About {workout.time} min</Text>
                    </View>
                    <View>
                        {workout.completed ? <Image style={styles.img} source={require('strengthapp/assets/check.png')}/> : <Image style={styles.img} source={require('strengthapp/assets/Vector.png')}/>}
                    </View>
                </View>
            </TouchableOpacity>
        ));
    }

    return (
        <SafeAreaView style={styles.content}>
            {renderWorkouts()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
       content: {
        marginVertical: 8,
    },

    container:{
        flex: 1,
        alignSelf: 'center',
        backgroundColor: 'rgba(217, 217, 217, 0.25)', 
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
        width: '80%'
    },

    workoutname:{
        fontSize: 18,
        overflow: 'hidden',
        maxWidth: '97%',
    },

    img:{
        justifyContent: 'center' ,
        marginLeft: '2.5%',
    }

});