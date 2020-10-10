import React, { Component } from 'react';
import { Text, TextInput, View, Image } from 'react-native';
import { Directions } from 'react-native-gesture-handler';


class SearchInput extends Component {

  render() {
    return (
      <View style={{ padding: 5, borderRadius: 15, height: 40, flexDirection: "row", alignItems: 'center', backgroundColor: '#343435', marginTop: '20%' }}>
        <Image style={{ height: 25, width: 25, marginRight: 10 }} source={require('../images/search.png')} />
        <View style={{flex:1, flexDirection:"row",justifyContent:"space-between"}}>
          <TextInput style={{ color: 'white',width:'90%' }}
            placeholder='What do you want to eat?'
            placeholderTextColor="#fff"
          />
          <Image style={{ height: 25, width: 25, marginRight: 10 }} source={require('../images/microfono.png')} />
        </View>
      </View>
    )
  }
}
export default SearchInput;
