import { Image, StyleSheet, Text, View } from "react-native";

export function WorkoutOverview({workout}){
    return (
        <View style={styles.container}>
            <Text style={styles.header}> Workout overview</Text>
            <View style={styles.content}>
                <Image style={styles.img} source={require('strengthapp/assets/clock.png')}/>
                <Text style={styles.text}>Estimated Time: </Text>
                <Text style={styles.nonBold}>{workout.time} min</Text>
            </View>
            <View style={styles.content}>
                <Image style={styles.img} source={require('strengthapp/assets/dots.png')}/>
                <View style={styles.texts}>
                    <Text style={styles.text}>Exercises:</Text>
                    <Text style={styles.nonBold}> {workout.number}</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Image style={styles.img} source={require('strengthapp/assets/completed.png')}/>
                {workout.completed ? <Text style={styles.text}>Completed workout</Text>: <Text style={styles.text}> Incomplete workout</Text>}
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
        flexDirection: 'row',
        marginVertical: '2.5%'
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