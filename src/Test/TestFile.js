import {
  ScrollView,
  Text,
  Platform,
  View,
  FlatList,
  Button,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const TestFile = () => {
  function onclick(txt) {
    Linking.openURL(txt);
  }
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
      jno: 93,
    },
  ];
  return (
    <View style={{}}>
      <FlatList
        data={players}
        renderItem={({item}) => <Text style={{fontSize: 300}}>{item.jno}</Text>}
      />

      <TouchableOpacity
        onPress={() =>
          onclick(
            'https://www.apple.com/in/store?afid=p238%7Cs8Vs8GkTq-dc_mtid_187079nc38483_pcrid_664737674852_pgrid_112258962467_pntwk_g_pchan__pexid__&cid=aos-IN-kwgo-brand--slid---product-',
          )
        }>
        <Text>Apple</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestFile;
