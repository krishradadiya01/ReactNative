import React, {useState, useRef} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const Facebook = () => {

  const screenHeight = Dimensions.get('screen').height
  const screenWidth = Dimensions.get('screen').width

  const [username, setUsername] = useState('');
  const usr = useRef();
  const psw = useRef();

  const onpress = () => {
    if (username) {
      Alert.alert('Hello' + ' ' + username);
    } else {
      Alert.alert('Please Enter Your Username');
    }

    usr.current.clear();
    psw.current.clear();
  };

  function onchangeUsername(text) {
    setUsername(text);
  }

  return (
    <ScrollView>
      <Image
        style={{width: screenWidth, height: screenHeight, position: 'absolute'}}
        source={{
          uri: 'https://wallpapercave.com/wp/wp2999162.jpg',
        }}
      />
      <Text style={styles.usrnm}>Username</Text>
      <TextInput
        style={styles.facename}
        value={username}
        onChangeText={onchangeUsername}
        ref={usr}
        placeholder="Enter Your Twitter Id"></TextInput>
      <Text style={styles.usrps}>Password</Text>
      <TextInput
        style={styles.facepsw}
        secureTextEntry={true}
        ref={psw}
        placeholder="Enter Your Password"></TextInput>

      <TouchableOpacity style={styles.loginbtn} onPress={onpress}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  usrnm: {
    fontSize: 30,
    top: 180,
    left: 118,
    color: 'white',
  },

  usrps: {
    fontSize: 30,
    top: 240,
    left: 120,
    color: 'white',
  },

  facename: {
    backgroundColor: 'white',
    width: 300,
    height: 30,
    textAlign: 'center',
    left: 37,
    top: 190,
    borderWidth: 2,
    borderRadius: 15,
  },

  facepsw: {
    backgroundColor: 'white',
    width: 300,
    height: 30,
    textAlign: 'center',
    left: 37,
    top: 245,
    borderWidth: 2,
    borderRadius: 15,
  },

  loginbtn: {
    top: 300,
    left: 37,
    borderWidth: 2,
    height: 30,
    justifyContent: 'center',
    borderRadius: 20,
    width: 300,
    backgroundColor: 'blue',
  },
});
export default Facebook;
