import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import Modal from 'react-native-modal';

const ChangeAlert = ({ isVisible, onClose}) => {
    const [user, setUser] = useState([]);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const jsonData = require('../../../../public/user.json');
        setUser(jsonData);
        console.log(user);
    };

    const setData = () =>{       
        if(user.length > 0){
          console.log('set Info');
          setName(user[0].name);
          setUsername(user[0].username);
          setPassword(user[0].password);
        }
       
    }
    

    useEffect(() => {
        setData();
    }, [user]);
    

    const tempUser = user;
    console.log('tjekk user', user);

    const handleUpdatePress = () => {
        const change = [false, false];
        if(tempUser.name !== name){
            change[0] = true;
        } else if (tempUser.username !== username){
            change[1] = true;
        }

        onClose(change, name, username, password);
    };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.modal}>
      <View style={styles.container}>
      <View>
            <Text style={styles.title}>Change information</Text>
            <Text style={styles.message}>Change the information below by erasing out and write in new information in</Text>
             <View style={styles.inputs}>
              <View style={styles.input}>
                <Text>Name: </Text>
                <TextInput 
                    style={styles.textinput}
                    value={name}
                    onChangeText={setName}
                    onSubmitEditing={onClose}
                />
              </View>
              <View style={styles.input}>
                <Text>Username: </Text>
                <TextInput 
                    style={styles.textinput}
                    value={username}
                    onChangeText={setUsername}
                    onSubmitEditing={onClose}
                />
              </View>
              <View style={styles.input}>
                <Text>Password: </Text>
                <TextInput 
                    style={styles.textinput}
                    value={password}
                    onChangeText={setPassword}
                    onSubmitEditing={onClose}
                />
              </View>
            </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleUpdatePress}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#CDD4FF',
    padding: '2.5%',
    borderRadius: 5,
    marginVertical: '3%',
    width: '90%'
  },
  buttonText: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 16,
  },

  inputs:{
    display: 'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    width: '90%'
  },

  input:{
    display: 'flex',
    flexDirection: 'row'
  },

  textinput:{
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    borderColor : "#000",
    borderWidth: 1,
    width: '48%'
  }
});

export default ChangeAlert;