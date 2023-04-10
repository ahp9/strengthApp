import { Image , TouchableOpacity, StyleSheet} from 'react-native';

export function Icon({navigation, img, navigationLink}){
    return(
        <TouchableOpacity onPress={() => navigation.navigate(navigationLink)}>
          <Image 
            style={styles.logo}
            source={img}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    logo: {
      margin: 15
    }
})