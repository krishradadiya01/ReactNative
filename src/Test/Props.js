import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function display() {
  return (
    <View style={styles.Parent}>
      <Text style={styles.child1}>1</Text>
      <Text style={styles.child2}>2</Text>
      <Text style={styles.child1}>3</Text>
      <Text style={styles.child2}>4</Text>
      <Text style={styles.child1}>5</Text>
      <Text style={styles.child2}>6</Text>
      <Text style={styles.child1}>7</Text>
      <Text style={styles.child2}>8</Text>
      <Text style={styles.child1}>9</Text>
      <Text style={styles.child2}>10</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Parent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    direction: 'ltr',
    flexBasis: 499,
    textDecorationLine: 'solid' ,
    x: 90
  },

  child1: {
    display: 'flex',
    backgroundColor: 'blue',
    width: 150,
    margin: 10,
    padding: 30,
    fontSize: 35,
    textAlign: 'center',
    flexGrow: 1,
    color: 'white',
    flexGrow: 10,
    marginVertical: 10,
    //rowGap: '10ch' ,
    //marginHorizontal: 100 ,
    // maxWidth: 900 ,
    // paddingEnd: 10 ,
    // paddingHorizontal: 10 ,
    // paddingVertical: 30 ,
  },

  child2: {
    display: 'flex',
    backgroundColor: 'pink',
    width: 150,
    height: 100,
    margin: 10,
    padding: 30,
    textAlign: 'center',
    fontSize: 35,
  },
});

export default display;
