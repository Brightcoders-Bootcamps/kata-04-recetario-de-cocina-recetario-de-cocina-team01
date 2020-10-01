import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';


class SearchInput extends Component{

  render(){
    return (
      <>
        <TextInput 
            placeholder='BASIC INPUT'
          />
      </> )
  }
}


// const SearchInput = (props) => {
//   return (
//     <>
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>
//           Try editing me! 🎉 {props.name}
//         </Text>
//         <Text>{props.otroprop}</Text>
//         <Text>{props.otrotro}</Text>
//       </View>
//     </>
//   );
// }

export default SearchInput;
