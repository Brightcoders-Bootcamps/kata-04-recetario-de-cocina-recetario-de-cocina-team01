import * as React from 'react';
import { View, Button, Text, Image,StyleSheet } from 'react-native';

export default function Detail({ route, navigation }) {
  const { t, ruta } = route.params;
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.img} source={ruta} />
        <Text style={styles.title}> {t} </Text>
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