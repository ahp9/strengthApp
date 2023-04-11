import {  StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { Icon } from '../../Form/Icon/Icon.js';

export default function Header(props) {
  const {loggedIn, navigation, navigationLink} = props;
    return (
      <SafeAreaView style={styles.header}>
        <Icon navigation={navigation} navigationLink={navigationLink} img={require('strengthapp/assets/gym.png')} />
        {loggedIn ? 
          <>
            <Icon navigation={navigation} navigationLink="User" img={require('strengthapp/assets/user.png')} />
          </>
           :<View><Text></Text></View> }
      </SafeAreaView>
    );
}


const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: "#CDD4FF",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  }
})