import {ScrollView, Text, StyleSheet, View} from 'react-native';
import React from 'react';

const Recent = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.txt}>4th Match Group B・Lahore</Text>
        <Text style={styles.txt}>🇦🇫 AFG  334-5 (50)</Text>
        <Text style={styles.txt}>🇧🇩 BAN  245(44.3)</Text>
        <Text style={styles.bat}>Bangladesh won by 89 runs</Text>
      </View>

      <View style={{marginTop: 20}}>
        <Text style={styles.txt}>3rd Match Group A・Pallekele</Text>
        <Text style={styles.txt}>🇮🇳 IND  266(48.5)</Text>
        <Text style={styles.txt}>🇵🇰 PAK</Text>
        <Text style={styles.bat}>No result</Text>
      </View>

      <View style={{marginTop: 20}}>
        <Text style={styles.txt}>2nd T20I・Birmingham</Text>
        <Text style={styles.txt}>🇧🇩 BAN  164(42.4)</Text>
        <Text style={styles.txt}>🇱🇰 SL  165-5(39)</Text>
        <Text style={styles.bat}>Sri Lanka won by 5 wkts</Text>
      </View>

      <View style={{marginTop: 20}}>
        <Text style={styles.txt}>1st Match, Group A・Multan</Text>
        <Text style={styles.txt}>🇵🇰 PAK  342-6 (50)</Text>
        <Text style={styles.txt}>🇳🇵 NEP  104(23.4)</Text>
        <Text style={styles.bat}>Pakistan won by 238 runs</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  txt: {
    backgroundColor: 'lightpink',
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 10,
  },

  bat: {
    backgroundColor: 'lightpink',
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 10,
    color: 'red',
    paddingBottom: 7,
  },
});

export default Recent;
