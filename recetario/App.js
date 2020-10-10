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
//import Navigator from './Navigators/Navigator';
import Details from './Screens/Detail';

const Stack = createStackNavigator();
const recepees = [
  {
    id: '1',
    t: 'Chilaquiles',
    ingredients: [
      '8 tomates verdes',
      '1/4 de cebollas',
      '4 Chiles serranos',
      'Cilantro',
      'Pollo',
    ],
    ruta: require('./images/chilakiles.jpeg'),
    section: 'Trending',
  },
  {
    id: '2',
    t: 'Discada',
    ingredients: [
      'Aceite vegetal    1 cucharada',
      'Tocino',
      'Chorizo',
      'Carne de cerdo',
      'Cebolla blanca',
      'Tomate',
    ],
    ruta: require('./images/discada.jpg'),
    section: 'Trending',
  },
  {
    id: '3',
    t: 'Mole',
    ingredients: [
      'Chile ancho',
      'Pan de yema',
      'Pasas',
      'Almendras',
      'Cacahuate',
      'Pollo',
    ],
    ruta: require('./images/mole.jpeg'),
    section: 'Trending',
  },
  {
    id: '4',
    t: 'Molletes',
    ingredients: ['Frijol', 'Queso', 'Jitomate', 'Cebolla', 'Pan bolillo'],
    ruta: require('./images/molletes.jpeg'),
    section: 'Trending',
  },
];
const favourites = [];

function Home({navigation, route}) {
  const [trending, setTrending] = useState(recepees);
  const [favs, setFavs] = useState([]);

  React.useEffect(() => {
    if (route.params?.post) {
      const {post, fav} = route.params;
      const itemToFind = (element) => element.id == post.id;
      let index;
      if (fav == true) {
        index = recepees.findIndex(itemToFind);
        recepees.splice(index, 1);
        favourites.push(post);
      } else {
        index = favourites.findIndex(itemToFind);
        favourites.splice(index, 1);
        recepees.push(post);
      }
      setFavs(favourites);
      setTrending(recepees);
    }
  }, [route.params?.post]);

  function goToDetails(objeto) {
    navigation.navigate('Details', objeto);
  }

  // function addFavourite(item) {
  //   favourites.push(item);
  // }
  return (
    //CUANDO ES COMPONENTE SEPARADO ESTA FUNCION RECIBE UN {navigation}
    <View style={styles.Padre}>
      <SearchInput/>
      <View style={styles.Hijo2}>
        <Text style={styles.TextColor}> TRENDING </Text>
        <CardM h={120} w={120}
          namesection="Trending"
          data={trending}
          gTD={goToDetails}
        />
      </View>
      <View style={styles.Hijo3}>
        <Text style={styles.TextColor}>RECENT</Text>
        <CardM h={220} w={180}
          namesection="Recent"
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
    paddingTop:'10%'
  },
  Hijo3: {
    flex: 1,
  },
  TextColor: {
    color: '#D920A9',
    fontSize:27
  },
});

export default App;
