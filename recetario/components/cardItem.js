import * as React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const properties = [
  {
    id: '1',
    t: 'Chilaquiles',
    ingredients:["8 tomates verdes", "1/4 de cebollas", "4 Chiles serranos", "Cilantro", "Pollo"],
    ruta: require('../images/chilakiles.jpeg'),
  },
  {
    id: '2',
    t: 'Discada',
    ingredients:["Aceite vegetal", "Tocino", "Chorizo", "Carne de cerdo", "Cebolla blanca", "Tomate"],
    ruta: require('../images/discada.jpg'),
  },
  {
    id: '3',
    t: 'Mole',
    ingredients:["Chile ancho", "Pan de yema", "Pasas", "Almendras", "Cacahuate", "Pollo"],
    ruta: require('../images/mole.jpeg'),
  },
  {
    id: '4',
    t: 'Molletes',
    ingredients:["Frijol", "Queso", "Jitomate", "Cebolla", "Pan bolillo"],
    ruta: require('../images/molletes.jpeg'),
  },
];

function CardM(props) {
  return (
    <FlatList
      horizontal={true}
      data={properties}
      renderItem={
        ({ item, index }) => (
          < View
            style={styles.item}
            onStartShouldSetResponder={()=>props.gTD(item)}>
            <Image style={styles.img} source={item.ruta} />
            <Text style={styles.title}> {item.t} </Text>
          </View>
        )
      }
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    color: '#FFFFFF',
  },
  img: {
    width: 90,
    height: 100,
    borderRadius: 8,
  },
});

export default CardM;
