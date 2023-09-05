import {View, Text} from 'react-native';
import React from 'react';

const Test2 = props => {
  const name = props.route.params.name;
  const age = props.route.params.age;

  return (
    <View>
      <Text style={{fontSize: 30}}>Name: {name}</Text>
      <Text style={{fontSize: 30}}>Age: {age}</Text>
    </View>
  );
};

export default Test2;
