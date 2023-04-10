import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

export default function FavoriteType({navigation}){
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const jsonData = require('../../../../../public/workouts.json');
      const guide = jsonData.filter(item => item.favorite === true);
      setData(guide);
    };

    const handleCardPress = (name) => {
      navigation.navigate('ExerciseHome', {name});
    };

    const renderFavorite = ({ item }) => {
        return (
          <TouchableOpacity style={style.cards} key={item.id} onPress={() => handleCardPress(item.name)}>
            <View style={style.content}>
              <Image style={style.img}  resizeMode="cover" source={require('strengthapp/assets/workout_upperbody.png')}/>
              <Text style={style.text}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        );
    };

    return(
      <View style={style.view}>
        <Text style={style.title}>Favorite </Text>
        <SwiperFlatList
            data={data}
            renderItem={renderFavorite}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={style.container}
            snapToAlignment={'start'}
            decelerationRate={"fast"}
            showPagination={true}
            paginationDefaultColor="#FFFFFF"
            paginationActiveColor="#9F9FFF"
        />
    </View>
    )
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    margin: '5%',
  },
    
  title: {
    fontSize: 24,
    marginVertical: '5%',
    alignSelf: 'flex-start',
  },

  container: {
    width: '100%'
  },

  cards:{
    width: '50%',
    marginVertical: '5%',
  },
    
  content: {
    backgroundColor: 'rgba(217, 217, 217, 0.5)',
    height: 250,
    borderRadius: 10,
    marginHorizontal: '2%',
    alignItems:'center',
    justifyContent: 'flex-end',
    width: '185%',
  },

  text:{
    flexWrap: 'wrap',
    fontSize: 16,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: '10%'
  },

  img:{
    width: 150,
    height: 150
  }
   
})