import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import React, {useState, useMemo} from 'react';

const usememo = () => {
  const [btnOne, setBtnOne] = useState(0);
  const [btnTwo, setBtnTwo] = useState(0);

  const onPress = () => {
    setBtnOne(btnOne + 1);
  };

  const even = () => {
    return btnOne % 2 === 0;
  };

  useMemo(() => {
    let a = 0;
    while (a < 200000000) a++;
  }, [btnOne]);

  function onPress2() {
    setBtnTwo(btnTwo + 1);
  }
  
  return (
    <View>
      <Text style={styles.btnOne}>{btnOne}</Text>
      <Button title="Button1" onPress={onPress}></Button>
      <Text>{even() ? 'Even' : 'Odd'}</Text>
      <Text style={styles.btnOne}>{btnTwo}</Text>
      <Button title="Button2" onPress={onPress2}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  btnOne: {
    marginTop: 20,
    fontSize: 50,
    textAlign: 'center',
  },
});

export default usememo;
