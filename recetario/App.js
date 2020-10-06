/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CardM from './components/cardItem';
//import Navigator from './Navigators/Navigator';
import Details from './Screens/Detail';

const Stack = createStackNavigator();



function Home({ navigation }) {
  // Para (){
  //  const {n} = navigation.navigate('Details');
  // }
  function goToDetails(objeto){
    navigation.navigate('Details', objeto);
  }

  return (
    //CUANDO ES COMPONENTE SEPARADO ESTA FUNCION RECIBE UN {navigation}
    <View style={styles.Padre}>
      <View style={styles.Hijo2}>
        <TextInput placeholder="Buscar comida" />
        <Text style={styles.TextColor}> TRENDING </Text>
        <CardM gTD={goToDetails} />
      </View>
      <View style={styles.Hijo3}>
        <Text style={styles.TextColor}>RECENT</Text>
        <CardM gTD={goToDetails} />
      </View>
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
