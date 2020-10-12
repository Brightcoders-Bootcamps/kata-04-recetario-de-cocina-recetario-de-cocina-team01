import React, {Component} from 'react';
import {Text, TextInput, View, Image, StyleSheet} from 'react-native';
import {Directions} from 'react-native-gesture-handler';

class SearchInput extends Component {
  render() {
    return (
      <View
        style={styles.viewPadre}>
        <Image style={styles.icons} source={require('../images/search.png')} />
        <View
          style={styles.viewHijo}>
          <TextInput
            style={{color: 'white', width: '90%'}}
            placeholder="What do you want to eat?"
            placeholderTextColor="#fff"
          />
          <Image
            style={styles.icons}
            source={require('../images/microfono.png')}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  icons: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  viewPadre:{
    padding: 3,
          borderRadius: 15,
          height: 42,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#343435',
          marginTop: '12%',
  },
  viewHijo:{
    flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
  }
});
export default SearchInput;
