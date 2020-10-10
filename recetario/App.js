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
  const [favs, setFavs] = useState(favourites);

  React.useEffect(() => {
    if (route.params?.post) {
      const {post, fav} = route.params;
      if (fav == true) {
        for (let i = 0; i < recepees.length; i++) {
          if (recepees[i].id == post.id) {
            recepees.splice(i, 1);
            favourites.push(post);
            setFavs(favourites);
            setTrending(recepees);
          }
        }
      } else {
        for (let i = 0; i < favourites.length; i++) {
          if (favourites[i].id == post.id) {
            favourites.splice(i, 1);
            //alert("eliminando el index: "+i);
            recepees.push(post);
            setTrending(recepees);
            setFavs(favourites);
          }
        }
      }
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
        <CardM
          namesection="Trending"
          data={trending}
          gTD={goToDetails}
          // prueba={addFavourite}
        />
      </View>
      <View style={styles.Hijo3}>
        <Text style={styles.TextColor}>RECENT</Text>
        <CardM
          namesection="Recent"
          data={favs}
          gTD={goToDetails}
          // prueba={addFavourite}
        />
      </View>
    </View>
  );
}

function DetailsScreen({route, navigation}) {
  const {itemId, otherParam} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
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
