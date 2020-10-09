import * as React from 'react';
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons';

export default function Detail({route, navigation}) {
  const {id, t, ruta, ingredients, section, prueba, index} = route.params;

  const item = {
    id: id,
    t: t,
    ruta: ruta,
    ingredients: ingredients,
    section: section,
  };

  function changeCategorie() {
    let fav;
    if (item.section == 'Trending') {
      item.section = 'Favourites';
      fav = true;
    } else if (item.section == 'Favourites') {
      item.section = 'Trending';
      fav = false;
    }
    navigation.navigate('Home', {post: item, fav});
  }

  return (
    <>
      <View style={styles.father}>
        <View style={styles.ImageSon}>
          <ImageBackground source={ruta} style={styles.img}>
            <View>
              <Text style={styles.textColorImag}> Aqui van los iconos</Text>
            </View>
            <View>
              <Text style={styles.textColorImag}> {section} </Text>
              <Text style={styles.textColorImag}> {t} </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.ImageSon}>
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
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  father: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#444244',
  },
  ImageSon: {
    flex: 1,
  },

  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    color: 'white',
  },
  img: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    opacity: 0.3,
    justifyContent: 'space-between',
  },
  textColorImag: {
    color: 'white',
  },
});
