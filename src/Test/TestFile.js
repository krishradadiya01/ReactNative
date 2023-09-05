import {View, Text, Platform} from 'react-native';
import React from 'react';

const TestFile = () => {
  const players = [
    {
      name: 'Virat',
      jno: 18,
    },
    {
      name: 'Rohit',
      jno: 45,
    },
    {
      name: 'Bumrah',
      jno: 91,
    },
  ];
  return (
    <View>
      {players.map(({name, jno}) => (
        <View>
          <Text>{name}</Text>
          <Text>{jno}</Text>
        </View>
      ))}
    </View>
  );
};

export default TestFile;
