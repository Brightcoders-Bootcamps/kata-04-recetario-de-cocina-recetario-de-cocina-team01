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

const properties = [
  {
    id: '1',
    t: 'Chilaquiles',
    ruta: require('../images/chilakiles.jpeg'),
  },
  {
    id: '2',
    t: 'Discada',
    ruta: require('../images/discada.jpg'),
  },
  {
    id: '3',
    t: 'Mole',
    ruta: require('../images/mole.jpeg'),
  },
  {
    id: '4',
    t: 'Molletos',
    ruta: require('../images/molletes.jpeg'),
  },
];

function CardM({navigation}) {
  const Item = ({title, ruta, navigation}) => (
    <View
      style={styles.item}
      onStartShouldSetResponder={() => alert(`Pantalla ${title}`)}>
      <Image style={styles.img} source={ruta} />
      <Text style={styles.title}> {title} </Text>
    </View>
  );

  const renderItem = ({item, navigation}) => (
    <Item title={item.t} ruta={item.ruta} v={navigation} />
  );

  return (
    <FlatList
      horizontal={true}
      data={properties}
      renderItem={renderItem}
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
