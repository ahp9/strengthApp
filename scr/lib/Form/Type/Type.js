import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";


export function Type(props){
    const {name, navigation, WG, things} = props;
    const handlePost = (name, WG) => {
        navigation.navigate('ListPage', {navigation:navigation, things:things, word:name, WG:WG } );
    }
    return(
        <TouchableOpacity style={style.container} onPress={() => handlePost(name, WG)}>
        <View style={style.type} >
            <Text style={style.difficulty}>{name}</Text>
            <Image style={style.logo} source={require('strengthapp/assets/Vector.png')}/>
        </View>
    </TouchableOpacity>
    
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: "#E9EBFF",
        borderRadius: 10,
        margin: '2.5%',
        padding: '3%',
        width: "100%"
    },
    type: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%"
    },
    difficulty:{
        fontSize: 16,
        margin: '2.5%'
    },

    logo:{
        margin: '2.5%'
    }
})