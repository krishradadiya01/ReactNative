import {ScrollView, View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Live = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.txt}>5th Match , Group A・Pallekele</Text>
        <Text style={styles.txt}>🇮🇳 India</Text>
        <Text style={styles.txt}>🇵🇰 Pakistan</Text>
        <Text style={styles.bat}>India opt to bat</Text>
      </View>

      <View style={{marginTop: 20}}>
        <Text style={styles.txt}>2nd unofficial Test・Mackay</Text>
        <Text style={styles.txt}>🇳🇿 NZA</Text>
        <Text style={styles.txt}>🇦🇺 AUSA</Text>
        <Text style={styles.bat}>Day 1: 3rd Session</Text>
      </View>

      <View style={{marginTop: 20}}>
        <Text style={styles.txt}>2nd T20I・Birmingham</Text>
        <Text style={styles.txt}>🏴󠁧󠁢󠁥󠁮󠁧󠁿 ENG</Text>
        <Text style={styles.txt}>🇳🇿 NZ</Text>
        <Text style={styles.bat}>Innings Break</Text>
      </View>

      <View style={{marginTop: 20}}>
        <Text style={styles.txt}>1st T20I・Durban</Text>
        <Text style={styles.txt}>🇿🇦 RSA</Text>
        <Text style={styles.txt}>🇦🇺 AUS</Text>
        <Text style={styles.bat}>Australia opt to Bowl</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  txt: {
    backgroundColor: 'skyblue',
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 10,
  },

  bat: {
    backgroundColor: 'skyblue',
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 10,
    color: 'red',
    paddingBottom: 7,
  },
});

export default Live;
