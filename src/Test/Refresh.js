import React, {useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';

function abc() {

    const [refresh , setRefresh] = useState(false)

  function onRefresh() {
    setRefresh(true)

   setTimeout(() => {
    setRefresh(false)
   }, 5000);

  }

  return (
    <ScrollView style={{backgroundColor: 'blue'}}>
      <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
    </ScrollView>
  );
}

export default abc;
2