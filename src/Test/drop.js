import React, {useState} from 'react';
import {
  Switch,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';

const countries = [
  {country: 'India', code: 91, iso: 'IND'},
  {country: 'USA', code: 1, iso: 'USA'},
  {country: 'China', code: 86, iso: 'CHN'},
  {country: 'Australia', code: 61, iso: 'AUS'},
  {country: 'Pakistan', code: 92, iso: 'PAK'},
  {country: 'Russia', code: 7, iso: 'RUS'},
];

function App() {
  function onPress() {
    isClicked(!clicked);
  }

  const [country, setCountry] = useState('Select Country');
  const [clicked, isClicked] = useState(false);
  const [data, setData] = useState(countries);

  return (
    <ScrollView>
      <Text style={styles.title}>Country Dropdown</Text>
      <TouchableOpacity style={styles.searchCountry} onPress={onPress}>
        <Text>{country}</Text>
      </TouchableOpacity>
      {clicked ? (
        <View style={styles.bigBox}>
          <TextInput placeholder="Search" style={styles.search}></TextInput>
        </View>
      ) : null}
      <FlatList
        data={countries}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={styles.countriesParent}>
              <Text style={styles.countries1}>{item.country}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 100,
  },

  searchCountry: {
    width: 300,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    opacity: 0.7,
  },

  bigBox: {
    width: 300,
    height: 300,
    borderRadius: 7,
    marginTop: 10,
    borderWidth: 0.7,
    alignSelf: 'center',
    backgroundColor: 'white',
  },

  search: {
    width: 250,
    borderWidth: 0.3,
    borderRadius: 7,
    height: 35,
    alignSelf: 'center',
    margin: 15,
    paddingLeft: 10,
  },

  countriesParent: {
    marginLeft: 68,
  },

  countries1: {
    fontSize: 25,
    marginBottom: 10,
    position: 'relative',
    bottom: 10,
  },
});
export default App;
