import {View, Button, TextInput} from 'react-native';
import React, {useState} from 'react';

const Test = props => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const onchange = text => {
    setName(text);
  };

  const onchange2 = text => {
    setAge(text);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Your Name"
        style={{fontSize: 30, alignItems: 'center'}}
        onChangeText={onchange}
      />
      <TextInput
        placeholder="Enter Your age"
        style={{fontSize: 30}}
        onChangeText={onchange2}
      />
      <Button
        title="Go to Test2"
        onPress={() => props.navigation.navigate('Test2', {name, age})}
      />
    </View>
  );
};

export default Test;
