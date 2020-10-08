import * as React from 'react';
import { View, Button, Text, Image, StyleSheet, FlatList } from 'react-native';

export default function Detail({ route, navigation },props) {
  const { t, ruta, ingredients, section,prueba } = route.params;

  const item={
    t:t,
    ruta:ruta,
    ingredients: ingredients,
    section:section,
  }

  function changeCategorie(){
    item.t=t;
    item.ruta=ruta;
    item.ingredients= ingredients,
    item.section="Favourites";
    navigation.navigate('Home', { post: item });


    //alert(item.section);
  }
  
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.img} source={ruta} />
        <Text> {section} </Text>
        <Text style={styles.title}> {t} </Text>
        <Text style={styles.title}> {prueba} </Text>
        <Button title="titulo" onPress={() => changeCategorie()}>

        </Button>
        <FlatList
          horizontal={false}
          data={ingredients}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <Text style={styles.title}> {item} </Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
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
    color: '#000000',
  },
  img: {
    width: 90,
    height: 100,
    borderRadius: 8,
  },
});
