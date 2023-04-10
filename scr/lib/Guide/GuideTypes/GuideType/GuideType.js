import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export function GuideType(props){
    const {navigation, type} = props;

    const handlePost = (type) => {
        navigation.navigate('ListPage', {navigation:navigation, things:"type", word:type, WG:'Guides' } );
    }

    return(
        <TouchableOpacity style={style.container} onPress={() => handlePost(type)}>
            <View >
                <Text style={style.type}>{type}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({

    container:{
        alignItems: 'center',
        display: "flex",
        flexDirection: 'row',
        height: 80,
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        borderRadius: 10,
        justifyContent: 'space-between',
        margin: '2.5%',
        padding: '3%',
        width: "45%",
    },
    type: {
        marginLeft: '15%',
        fontSize: 20
    }
})