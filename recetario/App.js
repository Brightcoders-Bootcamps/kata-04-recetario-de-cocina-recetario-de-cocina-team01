/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CardM from './components/cardItem';
import SearchInput from './components/searchbar';
import {datageneral} from './components/ListData';
import Details from './Screens/Detail';

const Stack = createStackNavigator();
let localReceepes = datageneral.recepees;
let favourites = [];

function Home({navigation, route}) {
  const [trending, setTrending] = useState(localReceepes);
  const [favs, setFavs] = useState([]);

  React.useEffect(() => {
    if (route.params?.post) {
      const {post, fav} = route.params;
      let newArray;
      let newTrending;
      if (fav != null) {
        if (fav == true) {
          newTrending = trending.filter((elemento) => elemento.id !== post.id);
          post.section = 'FAVOURITES';
           favourites.push(post);
           newArray = favourites;
           localReceepes = newTrending;
        } else {
          newArray = favourites.filter((elemento) => elemento.id !== post.id);
          post.section = 'TRENDING';
          localReceepes.push(post);
          newTrending = localReceepes;
           favourites = newArray;
        }
        setFavs(newArray);
        setTrending(newTrending);
      }
    }
  }, [route.params?.post]);

  function goToDetails(objeto) {
    navigation.navigate('Details', objeto);
  }
  return (
    <View style={styles.Padre}>
      <SearchInput />
      <View style={styles.Hijo2}>
        <Text style={styles.TextColor}> TRENDING </Text>
        <CardM
          h={120}
          w={120}
          namesection="TRENDING"
          data={trending}
          gTD={goToDetails}
        />
      </View>
      <View style={styles.Hijo3}>
        <Text style={styles.TextColor}>RECENT</Text>
        <CardM
          h={220}
          w={180}
          namesection="FAVOURITES"
          data={favs}
          gTD={goToDetails}
        />
      </View>
    </View>
  );
}
function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          options={{
            headerShown: false,
          }}
          component={Details}
        />
        <Stack.Screen name="CardM" component={CardM} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  Padre: {
    flex: 1,
    padding: 20,
    overflow: 'scroll',
    backgroundColor: '#282828',
  },
  Hijo1: {
    flex: 1,
  },
  Hijo2: {
    flex: 1,
    paddingTop: '10%',
  },
  Hijo3: {
    flex: 1,
  },
  TextColor: {
    color: '#D920A9',
    fontSize: 24,
  },
});

export default App;
