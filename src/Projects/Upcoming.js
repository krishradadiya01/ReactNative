import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

const Upcoming = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.txt}>6th Match , Group B・Lahore</Text>
        <Text style={styles.txt}>🇦🇫 Afghanistan</Text>
        <Text style={styles.txt}>🇱🇰 Sri Lanka</Text>
        <Text style={styles.bat}>Tomorrow・3:00 PM</Text>
      </View>

      <View style={{marginTop: 20}}>
        <Text style={styles.txt}>3rd T20I・Nottingham</Text>
        <Text style={styles.txt}>🇳🇿 England</Text>
        <Text style={styles.txt}>🇦🇺 New Zealand</Text>
        <Text style={styles.bat}>Tomorrow・10:30 PM</Text>
      </View>

      <View style={{marginTop: 20}}>
        <Text style={styles.txt}>2nd T20I・Durban</Text>
        <Text style={styles.txt}>🇿🇦 RSA</Text>
        <Text style={styles.txt}>🇦🇺 AUS</Text>
        <Text style={styles.bat}>Thu, 07 Sep・4:30 PM</Text>
      </View>

      <View style={{marginTop: 20}}>
        <Text style={styles.txt}>1st T20I・Durban</Text>
        <Text style={styles.txt}>🇿🇦 RSA</Text>
        <Text style={styles.txt}>🇦🇺 AUS</Text>
        <Text style={styles.bat}>Sat, 09 Sep・4:30 PM</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  txt: {
    backgroundColor: 'lightgreen',
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 10,
  },

  bat: {
    backgroundColor: 'lightgreen',
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 10,
    color: 'red',
    paddingBottom: 7,
  },
});

export default Upcoming;
