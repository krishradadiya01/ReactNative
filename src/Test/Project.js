import React, {useRef, useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';

function uri() {
  const psw = useRef();
  const usr = useRef();

  function onPress() {
    Alert.alert('Hello User');
    psw.current.clear();
    usr.current.clear();
  }

  return (
    <View>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.username}>Username</Text>
      <TextInput
        placeholder="Type Your Username"
        ref={psw}
        style={styles.tyuser}></TextInput>
      <Text style={styles.password}>Password</Text>
      <TextInput
        placeholder="Enter Your Password"
        secureTextEntry={true}
        ref={usr}
        style={styles.typass}></TextInput>

      <TouchableOpacity style={styles.loginbtn} onPress={onPress}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          LOGIN
        </Text>
      </TouchableOpacity>

      <Image
        style={{width: 400, height: 667}}
        source={{
          uri: 'https://media.istockphoto.com/id/1463842482/photo/beautiful-multicolor-tropical-background-of-palm-trees.webp?b=1&s=170667a&w=0&k=20&c=c1Z8YkIzdXaPuU1MTZbcdcelNJwgjNGeDFxDHrmS6TI=',
        }}
      />

      <Text style={styles.using}>Or Sign Up Using</Text>

      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.facebook}
          source={{
            uri: 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-1024.png',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.twitter}
          source={{
            uri: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-512.png',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.google}
          source={{
            uri: 'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    zIndex: 1,
    position: 'absolute',
    left: 118,
    top: 21,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },

  username: {
    fontSize: 40,
    zIndex: 1,
    position: 'absolute',
    left: 140,
    top: 150,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'SavoyeLetPlain',
  },

  tyuser: {
    backgroundColor: 'white',
    textAlign: 'center',
    zIndex: 1,
    position: 'absolute',
    left: 87,
    top: 190,
    width: 200,
    height: 30,
    borderWidth: 2,
    borderRadius: 12,
  },

  password: {
    textAlign: 'center',
    zIndex: 1,
    position: 'absolute',
    top: 270,
    left: 140,
    fontSize: 40,
    fontFamily: 'SavoyeLetPlain',
  },

  typass: {
    backgroundColor: 'white',
    textAlign: 'center',
    zIndex: 1,
    position: 'absolute',
    left: 87,
    top: 310,
    width: 200,
    height: 30,
    borderWidth: 2,
    borderRadius: 12,
  },

  loginbtn: {
    position: 'absolute',
    zIndex: 1,
    top: 410,
    left: 37,
    borderWidth: 2,
    height: 30,
    justifyContent: 'center',
    borderRadius: 20,
    width: 300,
    backgroundColor: 'blue',
  },

  facebook: {
    position: 'absolute',
    width: 60,
    height: 60,
    left: 60,
    bottom: 65,
  },

  using: {
    position: 'absolute',
    fontWeight: 'bold',
    bottom: 160,
    left: 113,
    fontSize: 18,
  },

  twitter: {
    position: 'absolute',
    width: 50,
    height: 50,
    bottom: 70,
    left: 170,
  },

  google: {
    position: 'absolute',
    width: 48,
    height: 50,
    bottom: 70,
    left: 265,
  },
});

export default uri;
