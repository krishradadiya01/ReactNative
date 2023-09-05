import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions
} from 'react-native';

const Google = () => {

  const screenHeight = Dimensions.get('screen').height
  const screenWidth = Dimensions.get('screen').width
  const onPress = () => {
    Alert.alert('Hello User');
  };

  return (
    <View>
      <Image
        style={{width: screenWidth, height: screenHeight, position: 'absolute'}}
        source={{
          uri: 'https://i.pinimg.com/736x/37/04/34/3704348b23f96208767a2ce18ef6aab6.jpg',
        }}
      />
      <Text style={styles.gl}>Choose Your Account</Text>
      <TouchableOpacity style={{flexDirection: 'column', alignItems: 'center'}}>
        <Text style={styles.child1} onPress={onPress}>
          krishradadiya666@gmail.com
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{flexDirection: 'column', alignItems: 'center'}}>
        <Text style={styles.child3} onPress={onPress}>
          krishradadiya01@gmail.com
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{flexDirection: 'column', alignItems: 'center'}}>
        <Text style={styles.child2} onPress={onPress}>
          krishradadiya5368@gmail.com
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gl: {
    fontSize: 30,
    color: 'white',
    left: 34,
    top: 30,
    fontWeight: 'bold',
  },

  child1: {
    fontSize: 18,
    paddingTop: 10,
    paddingLeft: 8,
    width: 300,
    height: 50,
    top: 200,
    borderWidth: 2,
    backgroundColor: 'white',
  },

  child2: {
    fontSize: 18,
    paddingTop: 10,
    paddingLeft: 8,
    width: 300,
    height: 50,
    top: 200,
    borderWidth: 2,
    backgroundColor: 'white',
  },

  child3: {
    fontSize: 18,
    paddingTop: 10,
    paddingLeft: 8,
    width: 300,
    height: 50,
    top: 200,
    borderWidth: 2,
    backgroundColor: 'white',
  },
});

export default Google;
