 import React from 'react';
 import { Text, View } from 'react-native';

const SearchInput = () => {
  
  return (
    <>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>

        Try editing me! 🎉
      </Text>
    </View>
    </>
  );
}

 export default SearchInput;

//import { SearchBar } from 'react-native-elements';

// export default class App extends React.Component {
//   state = {
//     search: '',
//   };

//   updateSearch = (search) => {
//     this.setState({ search });
//   };

//   render() {
//     const { search } = this.state;

//     return (
//       // <SearchBar
//       //   placeholder="Type Here..."
//       //   onChangeText={this.updateSearch}
//       //   value={search}
//       // />
//       <View>
//         <Text>Pruebaaaaaaaaaaaaaaa</Text>
//       </View>
//     );
//   }
// }