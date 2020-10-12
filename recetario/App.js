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
    portions: '3',
    ingredients: [
      {
        ingredient: 'frijoles',
        quantity: '200 g',
      },
      {
        ingredient: 'cebollas',
        quantity: '2 pzs',
      },
      {
        ingredient: 'Chiles serranos',
        quantity: '8 pzs',
      },
      {
        ingredient: 'Cilantro',
        quantity: '1 pzs',
      },
      {
        ingredient: 'Pollo',
        quantity: '1 kg',
      },
    ],
    ruta: require('./images/chilakiles.jpeg'),
    section: 'TRENDING',
  },
  {
    id: '2',
    t: 'Discada',
    ingredients: [
      {
        ingredient: 'Aceite vegetal',
        quantity: '1 cd',
      },
      {
        ingredient: 'Tocino',
        quantity: '100 g',
      },
      {
        ingredient: 'Chorizo',
        quantity: '100 g',
      },
      {
        ingredient: 'Carne de cerdo',
        quantity: '100 g',
      },
      {
        ingredient: 'Cebolla',
        quantity: '1/2 pz',
      },
      {
        ingredient: 'Tomate',
        quantity: '1 pz',
      },
    ],
    ruta: require('./images/discada.jpg'),
    section: 'TRENDING',
  },
  {
    id: '3',
    t: 'Mole',
    ingredients: [
      {
        ingredient: 'Chile Ancho',
        quantity: '5 pzs',
      },
      {
        ingredient: 'Chile huajillo',
        quantity: '7 pzs',
      },
      {
        ingredient: 'Pollo',
        quantity: '1/2 Kg',
      },
      {
        ingredient: 'Ajonjoli',
        quantity: '20 g',
      },
      {
        ingredient: 'Pan de yema',
        quantity: '1/2 pz',
      },
      {
        ingredient: 'Tomate',
        quantity: '1/2 kg',
      },
    ],
    ruta: require('./images/mole.jpeg'),
    section: 'TRENDING',
  },
  {
    id: '4',
    t: 'Molletes',
    ingredients: [
      {
        ingredient: 'Pan Bolillo',
        quantity: '3 pz',
      },
      {
        ingredient: 'Frijol',
        quantity: '100 g',
      },
      {
        ingredient: 'Chorizo',
        quantity: '100 g',
      },
      {
        ingredient: 'Queso',
        quantity: '100 g',
      },
      {
        ingredient: 'Cebolla',
        quantity: '1/2 pz',
      },
      {
        ingredient: 'Tomate',
        quantity: '1 pz',
      },
    ],
    ruta: require('./images/molletes.jpeg'),
    section: 'TRENDING',
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
      <SearchInput />
      <View style={styles.Hijo2}>
        <Text style={styles.TextColor}> TRENDING </Text>
        <CardM
          h={120}
          w={120}
          namesection="Trending"
          data={trending}
          gTD={goToDetails}
        />
      </View>
      <View style={styles.Hijo3}>
        <Text style={styles.TextColor}>RECENT</Text>
        <CardM
          h={220}
          w={180}
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
