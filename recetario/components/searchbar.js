import * as React from 'react';
//import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {SearchBar} from 'react-native-elements';

export default class SearchInput extends React.Component {
  state = {
    search: 'This is an initial state',
  };

  updateSearch = (search) => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;

    return (
      <Text style={{color: red}}>Esto viene desde searchbar</Text>
      //   <SearchBar
      //     placeholder="Type Here..."
      //     onChangeText={this.updateSearch}
      //     value={search}
      //   />
    );
  }
}
