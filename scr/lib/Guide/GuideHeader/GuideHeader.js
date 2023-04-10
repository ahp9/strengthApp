import { View,  Text , StyleSheet} from 'react-native';

export function GuideHeader({guide}){
    return(
        <View style={styles.content}>
            {guide.map((g) => (
                <View key={g.id} style={styles.conatiner}> 
                    <Text style={styles.title}>{g.name}</Text>
                    <Text style={styles.description}>{g.description}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        flex:1
    },
    conatiner: {
        alignSelf: 'center',
        width: '80%',
        marginBottom: '10%'
    },

    title:{
        alignSelf:'center',
        fontSize:24,
        fontWeight:'bold',
        margin: '10%'
    },

    description: {
        backgroundColor: '#E9EBFF',
        borderColor: '#000',
        borderRadius: 10,
        fontSize: 14,
        padding: '5%',
    }
})