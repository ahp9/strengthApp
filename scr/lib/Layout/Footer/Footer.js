import {  StyleSheet, View} from 'react-native';
import { Icon } from '../../Form/Icon/Icon.js';

export default function Footer({navigation}) {
    return (
      <View style={styles.footer}>
        <Icon navigation={navigation} navigationLink="ExercisePage" img={require('strengthapp/assets/gym.png')}/>
        <Icon navigation={navigation} navigationLink="HomePage" img={require('strengthapp/assets/home.png')}/>
        <Icon navigation={navigation} navigationLink="GuidePage" img={require('strengthapp/assets/guides.png')}/>
      </View>
    );
}

const styles = StyleSheet.create({
    footer: {
      alignItems: 'center',
      backgroundColor: "#CDD4FF",
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
    }
})