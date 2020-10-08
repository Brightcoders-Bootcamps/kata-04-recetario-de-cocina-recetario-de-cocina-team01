import * as React from 'react';
import {View, Button, Text, Image, StyleSheet, FlatList} from 'react-native';

export default function Detail({route, navigation}) {
  const {id,t, ruta, ingredients, section, prueba,index} = route.params;

  const item = {
    id: id,
    t: t,
    ruta: ruta,
    ingredients: ingredients,
    section: section,
  };

  function changeCategorie() {
    let fav;
    if(item.section=='Trending'){
      item.section = 'Favourites';
      fav=true;
    }else if(item.section=='Favourites'){
      item.section = 'Trending';
      fav=false;
    }
    navigation.navigate('Home', {post: item,fav});
  }

  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image style={styles.img} source={ruta} />
        <Text> {section} </Text>
        <Text style={styles.title}> {t} </Text>
        <Text style={styles.title}> {prueba} </Text>
        <Button title="titulo" onPress={() => changeCategorie()}></Button>
        <FlatList
          horizontal={false}
          data={ingredients}
          renderItem={({item, index}) => (
            <View style={styles.item}>
              <Text style={styles.title}> {item} </Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(index) => index}
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
