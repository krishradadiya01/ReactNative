import React, { useState } from 'react';
import { Switch, View, Text, StyleSheet } from 'react-native';


function App() {

  const [switchOn , setSwitch] = useState(false)

  function toggleSwitch(value) {
    setSwitch(value)
  }


  return (
      <View style={abc.Apple}>
        <Text>
          {switchOn ? "Switch is ON" : "Switch is OFF"}
        </Text>
          <Switch
          style={{ marginTop: 500 }}
          onValueChange={toggleSwitch}
          value={switchOn}
          />
      </View>
  )
};

const abc = StyleSheet.create({
  Apple: {
  flex: 1 ,
  justifyContent: 'center',
  alignItems: 'center',
  }
})

export default App;