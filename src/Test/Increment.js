import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

function abc() {
  function Increment() {
    if (age > 0) {
      setAge(age + 1);
    }
  }

  function Decrement() {
    if (age > 18) {
      setAge(age - 1);
    }
  }

  const [age, setAge] = useState(18);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{marginTop: 200, fontSize: 20}}>Enter Your Age:</Text>
      <Text style={styles.text}>{age}</Text>
      <TouchableOpacity>
        <Text onPress={Increment} style={styles.btninc}>
          Increment
        </Text>
        <Text onPress={Decrement} style={styles.btndec}>
          Decrement
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    fontSize: 40,
    borderWidth: 2,
    padding: 25,
  },

  btninc: {
    borderWidth: 2,
    textAlign: 'center',
    padding: 10,
    marginTop: 50,
    backgroundColor: 'green',
    color: 'white',
  },

  btndec: {
    borderWidth: 2,
    textAlign: 'center',
    padding: 10,
    marginTop: 50,
    backgroundColor: 'red',
    color: 'white',
  },
});

export default abc;
