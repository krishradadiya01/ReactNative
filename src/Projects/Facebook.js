import React, {useRef, useState} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const Facebook = () => {
  const [username, setUsername] = useState('');
  const usr = useRef();
  const psw = useRef();

  const onPress = () => {
    if (username) {
      Alert.alert('Hello' + ' ' + username);
    } else {
      Alert.alert('Please Enter Your Username');
    }

    usr.current.clear();
    psw.current.clear();
  };

  function onChangeUsername(text) {
    setUsername(text);
  }

  return (
    <ScrollView
      style={{
        flex: 1,
      }}>
      <ImageBackground
        style={{width: screenWidth, height: screenHeight}}
        source={{
          uri: 'https://wallpapers.com/images/hd/unique-background-fpk6s3ofgglwwt29.jpg',
        }}>
        <Text style={styles.usrName}>Username</Text>
        <TextInput
          style={styles.facename}
          value={username}
          onChangeText={onChangeUsername}
          ref={usr}
          placeholder="Enter Your Facebook Id"></TextInput>
        <Text style={styles.usrps}>Password</Text>
        <TextInput
          secureTextEntry={true}
          ref={psw}
          style={styles.facepsw}
          placeholder="Enter Your Password"></TextInput>

        <TouchableOpacity style={styles.loginbtn} onPress={onPress}>
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            Log In
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  usrName: {
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
    backgroundColor: 'pink',
  },
});

export default Facebook;
