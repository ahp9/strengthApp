import React from 'react';
import { StyleSheet, View } from 'react-native';
import YourGuide_Card from '../YourGuide_Card/YourGuide_Card.js';
import ProgressCard from '../../Things/Progress/ProgressCard.js';
import { SwiperFlatList } from 'react-native-swiper-flatlist';


export default function YourGuide(props) {
    const { data, navigation } = props;

    const renderGuide = ({ item, index }) => {
      return (
        <View style={styles.card} key={item.id} onPress={() => goToIndex(index)}>
          <YourGuide_Card style={styles.YourGuide}
            name={item.name}
            navigation={navigation}
            dificulty_level={item.difficult_level}
          />
          <ProgressCard style={styles.progress} />
        </View>
      );
    };

    return (
      <View style={styles.content}>
         <SwiperFlatList
          data={data}
          renderItem={renderGuide}
          contentContainerStyle={styles.container}
          showPagination={true}
          scrollEnabled={true}
          paginationDefaultColor="#FFFFFF"
          paginationActiveColor="#9F9FFF"
      />
    </View>
    );
}


const styles = StyleSheet.create({
    content:{
        flex: 1,
        width: '100%'
    },

    card:{
        width: '100%',
        padding: '5%'
    },

    container: {
      borderRadius: 10,
      padding: 10,
      width: '100%',
    },

    nameGuide:{
        margin:10,
        fontSize: 18,
    },

})