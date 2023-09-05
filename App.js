import React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import drop from './src/Test/drop';
import Switch from './src/Test/Switch';
import Refresh from './src/Test/Refresh';
import Props from './src/Test/Props';
import State_Ref_Effect from './src/Hooks/State_Ref_Effect';
import Increment from './src/Test/Increment';
import UsMemo from './src/Hooks/UsMemo';
import Homepage from './src/Projects/Homepage';
import News from './src/Projects/News';
import Matches from './src/Projects/Matches';
import Other from './src/Projects/Other';
import Live from './src/Projects/Live';
import Upcoming from './src/Projects/Upcoming';
import Recent from './src/Projects/Recent';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Collection from './src/Projects/Collection';


// import Home from './src/Projects/Home';
import Facebook from './src/Projects/Facebook';
import Twitter from './src/Projects/Twitter';
import Google from './src/Projects/Google';
// import Test from './src/Navigation/Test';
// import Test2 from './src/Navigation/Test2';
import Home from './src/Projects/Home';
import TestFile from './src/Test/TestFile';

const stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
//const draw = createDrawerNavigator();
// const Top = createMaterialTopTabNavigator();
// const Bottom = createMaterialBottomTabNavigator();

function abc() {
  return (
    // <NavigationContainer>
    //   <Collection />
    // </NavigationContainer>

    <View>
      <TestFile />
    </View>
  );
}

export default abc;
