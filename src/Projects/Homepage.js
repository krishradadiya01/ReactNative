import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Homepage = () => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  return (
    <View style={{flex: 1}}>
      <Image
        style={{position: 'absolute'}}
        source={{
          width: screenWidth,
          height: screenHeight,
          uri: 'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg',
        }}
      />
      <Image
        style={styles.Image}
        source={{
          uri: 'https://images.indianexpress.com/2022/10/Kohli-30.jpg',
          width: 350,
          height: 300,
        }}
      />
      <Text style={styles.vk}>Name: Virat Kohli</Text>
      <Text style={styles.vk}>Matches: 738</Text>
      <Text style={styles.vk}>Runs: 32,845</Text>
      <Text style={styles.vk}>Highest: 254</Text>
      <Text style={styles.vk}>Fours: 3,176</Text>
      <Text style={styles.vk}>Sixes: 514</Text>
      <Text style={styles.vk}>Fifties: 162</Text>
      <Text style={styles.vk}>Hundreds: 83</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    position: 'relative',
    left: 12,
    top: 30,
  },

  vk: {
    position: 'relative',
    fontSize: 25,
    top: 52,
    left: 13,
  },
});

export default Homepage;
