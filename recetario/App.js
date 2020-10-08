/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CardM from './components/cardItem';
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
      'Aceite vegetal',
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

const favourites = [
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
    section: 'Favourites',
  },
  {
    id: '2',
    t: 'Discada',
    ingredients: [
      'Aceite vegetal',
      'Tocino',
      'Chorizo',
      'Carne de cerdo',
      'Cebolla blanca',
      'Tomate',
    ],
    ruta: require('./images/discada.jpg'),
    section: 'Favourites',
  },
];

function Home({navigation, route}) {
  const [section, setSection] = useState(0);
  // Para (){
  //  const {n} = navigation.navigate('Details');
  // }

  React.useEffect(() => {
    if (route.params?.post) {
      alert(post.item.section);
      alert(post.item.t);s
    }
  }, [route.params?.post]);

  function goToDetails(objeto) {
    navigation.navigate('Details', objeto);
  }

  function addFavourite(item) {
    favourites.push(item);
  }
  return (
    //CUANDO ES COMPONENTE SEPARADO ESTA FUNCION RECIBE UN {navigation}
    <View style={styles.Padre}>
      <View style={styles.Hijo2}>
        <TextInput placeholder="Buscar comida" />
        <Text style={styles.TextColor}> TRENDING </Text>
        <CardM
          namesection="Trending"
          data={recepees}
          gTD={goToDetails}
          prueba={addFavourite}
        />
      </View>
      <View style={styles.Hijo3}>
        <Text style={styles.TextColor}>RECENT</Text>
        <CardM
          namesection="Recent"
          data={favourites}
          gTD={goToDetails}
          prueba={addFavourite}
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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
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
    backgroundColor: '#444244',
  },
  Hijo1: {
    flex: 1,
  },
  Hijo2: {
    flex: 1,
  },
  Hijo3: {
    flex: 1,
  },
  TextColor: {
    color: '#D920A9',
  },
});

export default App;
