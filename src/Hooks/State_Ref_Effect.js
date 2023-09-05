import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

function num() {
  const [val, setVal] = useState(0);
  const ref = useRef();

  function onPress() {
    ref.current.clear();
    ref.current.focus();
    setVal(val + 1);
  }

  useEffect(() => {
    console.log('Hello1');
  });

  useEffect(() => {
    console.log('Hello2');
  }, []);

  useEffect(() => {
    console.log('Hello3');
  }, [val]);

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 100}}>{val}</Text>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text>Increase Value</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Type Something"
        ref={ref}
        style={{
          borderWidth: 2,
          marginTop: 200,
          width: 300,
          height: 50,
          textAlign: 'center',
        }}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderWidth: 3,
    padding: 20,
  },
});

export default num;
