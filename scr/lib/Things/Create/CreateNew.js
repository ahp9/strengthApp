import { StyleSheet, TouchableOpacity ,View, Text} from "react-native";


export function CreateNew({navigation, navigationLink, WG}){
    const onPress = (WG, navigationLink) => {
        navigation.navigate("CreatePage", {WG, navigationLink});
    }
    return(
        <TouchableOpacity style={styles.button} onPress={() => onPress(WG, navigationLink)}>
            <View style={{marginVertical: '2%'}}>
                <Text style={{fontSize: 18}}>
                    Create new {WG}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor:'#E9EBFF',
        borderRadius: 10,
        justifyContent: 'center',
        marginTop:'10%',
        width: '70%',
    }
})