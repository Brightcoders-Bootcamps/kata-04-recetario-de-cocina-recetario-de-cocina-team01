import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';

export default function Detail({route, navigation}) {
  const {
    id,
    t,
    ruta,
    ingredients,
    section,
    index,
    portions,
  } = route.params;
  const item = {
    id: id,
    t: t,
    ruta: ruta,
    ingredients: ingredients,
    section: section,
    portions: portions,
  };
  let heart;
  if (item.section == 'TRENDING') {
    heart = require('../images/like.png');
  } else {
    heart = require('../images/gusta-contorno.png');
  }
  const [likeIcon, setIcon] = useState(heart);
  const [fav, setFav] = useState(null);

  function changeCategorie() {
    if (item.section == 'TRENDING') {
      setFav(true);
      heart = require('../images/gusta-contorno.png');
    } else if (item.section == 'FAVOURITES') {
      setFav(false);
      heart = require('../images/like.png');
    }
    setIcon(heart);
  }

  function goBack() {
    navigation.navigate('Home', {post: item, fav});
  }
  return (
    <>
      <View style={styles.father}>
        <View style={styles.ImageSon}>
          <ImageBackground source={ruta} style={styles.img}></ImageBackground>
          <View style={styles.Icons}>
            <View
              style={[
                styles.cont,
                {justifyContent: 'space-between', paddingHorizontal: '5%'},
              ]}>
              <View style={{flex: 1}}>
                <TouchableOpacity activeOpacity={0.5} onPress={goBack}>
                  <Image
                    style={styles.iconX}
                    source={require('../images/closed2.png')}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={[
                  styles.cont,
                  {justifyContent: 'space-around', justifyContent: 'flex-end'},
                ]}>
                <Image
                  style={[styles.iconclass, {marginRight: 20}]}
                  source={require('../images/share2.png')}
                />
                <TouchableOpacity activeOpacity={0.5} onPress={changeCategorie}>
                  <Image style={styles.iconclass} source={likeIcon} />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={[styles.textColorImag, {fontSize: 20}]}>
                {' '}
                {section}{' '}
              </Text>
              <Text style={[styles.textColorImag, {fontSize: 30}]}> {t} </Text>
            </View>
          </View>
        </View>
        <View style={styles.ImageSon2}>
          <View style={styles.titleListServing}>
            <Text style={styles.titleListServingText}>Ingredients</Text>
            <Text style={styles.titleList}>for {portions} serving</Text>
          </View>
          <FlatList
            horizontal={false}
            data={ingredients}
            renderItem={({item, index}) => (
              <View style={styles.item}>
                <Text style={styles.titleList}> {item.ingredient} </Text>
                <Text style={styles.titleList}> {item.quantity} </Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={(index) => item.ingredient }
          />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  cont: {flex: 1, flexDirection: 'row'},
  iconclass: {
    height: 27,
    width: 27,
  },

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
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  titleListServing: {
    paddingLeft: 15,
    marginBottom: 15,
  },
  titleListServingText: {
    fontSize: 20,
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
    fontWeight: '500',
  },
  Icons: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    marginTop: '-55%',
    paddingLeft: 15,
  },
  iconX:{
    height:50,
    width:50,
  }
});
