import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';

const Other = () => {
  return (
    <ScrollView>
      <TouchableOpacity style={styles.BS}>
        <Text style={{padding: 12, fontSize: 18, borderWidth: 1}}>
          Browse Series
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BT}>
        <Text style={{padding: 12, fontSize: 18, borderWidth: 1}}>
          Browse Team
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BT}>
        <Text style={{padding: 12, fontSize: 18, borderWidth: 1}}>
          Browse Player
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.SD}>
        <Text style={{padding: 12, fontSize: 18, borderWidth: 1}}>
          Schedule
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BT}>
        <Text style={{padding: 12, fontSize: 18, borderWidth: 1}}>
          Archives
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.PH}>
        <Text style={{padding: 12, fontSize: 18, borderWidth: 1}}>Photos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BT}>
        <Text style={{padding: 12, fontSize: 18, borderWidth: 1}}>Quotes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.RM}>
        <Text style={{padding: 12, fontSize: 18, borderWidth: 1}}>
          ICC Rankings - Men
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BT}>
        <Text style={{padding: 12, fontSize: 18, borderWidth: 1}}>
          ICC Rankings - Women
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BT}>
        <Text style={{padding: 12, fontSize: 18, borderWidth: 1}}>Records</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.RA}>
        <Text style={{padding: 12, fontSize: 18, borderWidth: 1}}>
          Rate the App
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BT}>
        <Text style={{padding: 12, fontSize: 18, borderWidth: 1}}>
          Feedback
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BT}>
        <Text style={{padding: 12, fontSize: 18, borderWidth: 1}}>
          Settings
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BT}>
        <Text style={{padding: 12, fontSize: 18, borderWidth: 1}}>
          About Cricbuzz
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  BS: {
    backgroundColor: 'silver',
  },

  BT: {
    backgroundColor: 'silver',
    marginTop: 5,
  },

  SD: {
    backgroundColor: 'silver',
    marginTop: 20,
  },

  PH: {
    backgroundColor: 'silver',
    marginTop: 20,
  },

  RM: {
    backgroundColor: 'silver',
    marginTop: 20,
  },

  RA: {
    backgroundColor: 'silver',
    marginTop: 20,
  },
});

export default Other;
