import { StyleSheet,  View, Text } from 'react-native';

export function HeroSection({name, currentIndex, length}){
    return(
        <View style={styles.header}>
                <View style={{width: '70%'}}>
                  <Text style={styles.name}>{name}</Text>
                </View>
                <View style={{justifyContent: 'center', marginHorizontal: '2%'}}>
                  <View style={styles.status}>
                    <Text style={styles.statusText} >Exercise {currentIndex+1}/{length}</Text>
                  </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    header:{
        display:'flex',
        flexDirection:'row',
        marginVertical: '5%',
        justifyContent: 'center'
    },

    name:{
        fontSize: 24,
        fontWeight: 'bold',
        flex:1, 
        flexWrap: 'wrap',
    },
  
    status:{
      backgroundColor:'#E9EBFF',
      borderRadius: 10,
      height: 30,
      width: 90
    },

    statusText:{
      alignSelf: 'center', 
      justifyContent: 'center',
      marginTop: '5%'
    },
})