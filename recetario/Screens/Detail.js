import * as React from 'react';
import {View, Button, Text, Image, StyleSheet, FlatList} from 'react-native';

export default function Detail({route, navigation}) {
  const {t, ruta, ingredients, section} = route.params;
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image style={styles.img} source={ruta} />
        <Text> {section} </Text>
        <Text style={styles.title}> {t} </Text>

        <FlatList
          horizontal={false}
          data={ingredients}
          renderItem={({item, index}) => (
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
