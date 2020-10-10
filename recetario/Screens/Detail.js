import * as React from 'react';
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ImageBackground,
  Dimensions,TouchableOpacity,
} from 'react-native';

export default function Detail({ route, navigation }) {
  const { id, t, ruta, ingredients, section, prueba, index } = route.params;

  let fav;
  const item = {
    id: id,
    t: t,
    ruta: ruta,
    ingredients: ingredients,
    section: section,
  };

  function changeCategorie() {
    if (item.section == 'Trending') {
      item.section = 'Favourites';
      fav = true;
    } else if (item.section == 'Favourites') {
      item.section = 'Trending';
      fav = false;
    }
  }

  function goBack(){
    navigation.navigate('Home', { post: item, fav });
  }

  return (
    <>
      <View style={styles.father}>
        <View style={styles.ImageSon}>
          <ImageBackground source={ruta} style={styles.img}></ImageBackground>
          <View style={styles.Icons}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: '5%' }}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity activeOpacity={0.5} onPress={goBack}>
                  <Image style={{ height: 35, width: 35 }} source={require('../images/cross.png')} />
                </TouchableOpacity>

              </View>
              <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', justifyContent: 'flex-end' }}>
                <Image style={{ height: 35, width: 35, marginRight: 20 }} source={require('../images/share.png')} />
                <TouchableOpacity activeOpacity={0.5} onPress={changeCategorie}>
                  <Image style={{ height: 35, width: 35 }} source={require('../images/like.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={[styles.textColorImag, { fontSize: 27 }]}> {section} </Text>
              <Text style={[styles.textColorImag, { fontSize: 35 }]}> {t} </Text>
            </View>
          </View>
        </View>
        <View style={styles.ImageSon2}>
          {/* <Button title="titulo" onPress={() => changeCategorie()}></Button> */}
          <FlatList
            horizontal={false}
            data={ingredients}
            renderItem={({ item, index }) => (
              <View style={styles.item}>
                <Text style={styles.titleList}> {item} </Text>
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
    backgroundColor: '#282828',
  },
  ImageSon: {
    flex: 1,
  },
  ImageSon2: {
    flex: 1,
    paddingTop: 60,
  },

  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#7A6F7A',
    paddingBottom: 20,
  },
  titleList: {
    fontSize: 15,
    color: 'white',
  },
  img: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    opacity: 0.3,
  },
  textColorImag: {
    color: 'white',
    fontWeight: '500'
  },
  Icons: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    marginTop: '-55%',
    paddingLeft: 15,
  },
});
