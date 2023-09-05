import React, {useRef, useState} from 'react';
import {
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

function Uri(props) {
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
    <ScrollView>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.username}>Username</Text>
      <TextInput
        placeholder="Type Your Username"
        style={styles.tyuser}
        value={username}
        onChangeText={onChangeUsername}
        ref={usr}></TextInput>
      <Text style={styles.password}>Password</Text>
      <TextInput
        placeholder="Enter Your Password"
        secureTextEntry={true}
        ref={psw}
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
          uri: 'https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?cs=srgb&dl=pexels-codioful-%28formerly-gradienta%29-6985001.jpg&fm=jpg',
        }}
      />

      <Text style={styles.using}>Or Sign Up Using</Text>

      <TouchableOpacity onPress={() => props.navigation.navigate('Facebook')}>
        <Image
          style={styles.facebook}
          source={{
            uri: 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-1024.png',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('Twitter')}>
        <Image
          style={styles.twitter}
          source={{
            uri: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-512.png',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('Google')}>
        <Image
          style={styles.google}
          source={{
            uri: 'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png',
          }}
        />
      </TouchableOpacity>
    </ScrollView>
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
    top: 400,
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
    bottom: 100,
  },

  using: {
    position: 'absolute',
    fontWeight: 'bold',
    bottom: 178,
    left: 113,
    fontSize: 18,
  },

  twitter: {
    position: 'absolute',
    width: 50,
    height: 50,
    bottom: 100,
    left: 170,
  },

  google: {
    position: 'absolute',
    width: 48,
    height: 50,
    bottom: 100,
    left: 265,
  },
});

export default Uri;
