import { Dimensions, View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import DificultyLevel from '../../Things/DifficulityLevel/DifficulityLevel.js';

const screenDimensions = Dimensions.get('screen');


export default function YourGuide_Card(props) {
    const {name, id, dificulty_level, navigation} = props;

  const handleCardPress = (name) => {
    navigation.navigate('WorkoutHome', {name});
}
  return (
    <TouchableOpacity onPress={() => handleCardPress(name)}>
      <View style={styles.container} key={id}>
        <Image
          style={styles.img}
          source={require('strengthapp/assets/legday.png')}
        />
        <DificultyLevel 
          dificulty={dificulty_level}
        />
        <Text style={styles.nameGuide}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9EBFF',
    borderRadius: 10,
    width: '100%',
    height: screenDimensions.height * 0.5,
    marginVertical: 10,
    padding: '5%',
  },

  img:{
    width: '60%',
    height: '80%',
    alignSelf: 'center'
  },

  nameGuide:{
    margin:10,
    fontSize: 18,
  }
})