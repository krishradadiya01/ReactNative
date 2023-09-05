import {View, StyleSheet} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Live from './Live';
import Upcoming from './Upcoming';
import Recent from './Recent';

const Matches = () => {
  const Top = createMaterialTopTabNavigator();

  return (
    <View style={styles.bar}>
      <Top.Navigator>
        <Top.Screen name="Live" component={Live}></Top.Screen>
        <Top.Screen name="Upcoming" component={Upcoming}></Top.Screen>
        <Top.Screen name="Recent" component={Recent}></Top.Screen>
      </Top.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    backgroundColor: 'red',
    flex: 1,
  },
});

export default Matches;
