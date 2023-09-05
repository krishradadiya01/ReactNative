import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Homepage from './Homepage';
import News from './News';
import Matches from './Matches';
import Other from './Other';

const Top = createMaterialTopTabNavigator();
const Collection = () => {
  return (
    <Top.Navigator>
      <Top.Screen name="Home" component={Homepage}></Top.Screen>
      <Top.Screen name="News" component={News}></Top.Screen>
      <Top.Screen name="Matches" component={Matches}></Top.Screen>
      <Top.Screen name="Other" component={Other}></Top.Screen>
    </Top.Navigator>
  );
};

export default Collection;
