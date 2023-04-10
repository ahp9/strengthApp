import { View, Text, TextInput, StyleSheet } from "react-native";


export default function Input({text, value, onChangeText, onSubmitEditing, placeholder, returnKeyType}){
    return(
        <View>
            <Text style={styles.texts}>{text}</Text>
            <TextInput 
                value={value}
                style={styles.input}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
                placeholder={placeholder}
                returnKeyType={returnKeyType}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    texts: {
        fontSize: 16,
        margin: 20,
        alignSelf: 'flex-start',
        marginLeft: 50,
    },

    input: {
        alignSelf: 'center',
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        borderColor : "#000",
        borderWidth: 1,
        width: '80%'
    }
})