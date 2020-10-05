/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SearchInput from './components/searchbar';
import Horizontal from './components/HorizontalList';
import CardM from './components/cardItem';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const nombre = 1;

  const DATA1 = [
    {
      id: '1',
      title: 'First Item',
      imag: './images/discada.jpeg',
    },
    {
      id: '2',
      title: 'Second Item',
      imag: './images/verdes.jpeg',
    },
  ];

  const DATA2 = [
    {
      id: '3',
      title: 'Elemento 1',
      imag: './images/mole.jpeg',
    },
    {
      id: '4',
      title: 'Elemento 2',
      imag: './images/tlayuda.jpeg',
    },
  ];

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.searchInputStyle}>
          {/* <SearchInput /> */}
          <CardM />
        </View>

        <View style={styles.searchInputStyle}>
          {/* <Horizontal datos={DATA2} /> */}
          <CardM />
        </View>

        <View style={styles.searchInputStyle}>
          {/* <Horizontal datos={DATA1} /> */}
        </View>

        <View style={styles.searchInputStyle}>
          <Text>RECENT</Text>
          {/* <SearchInput /> */}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  searchInputStyle: {
    padding: 30,
    color: '#fff',
    backgroundColor: '#eaeaea',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

//cambios nan
export default App;
