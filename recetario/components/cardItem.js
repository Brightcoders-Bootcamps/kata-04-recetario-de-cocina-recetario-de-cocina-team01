import * as React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function CardM(props) {
  return (
    <FlatList
      horizontal={true}
      data={props.data}
      renderItem={({item, index}) => (
        <View style={styles.item}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.gTD(item)}>
            <Image
              style={{height: props.h, width: props.w, borderRadius: 8}}
              source={item.ruta}
            />
          </TouchableOpacity>
          <Text style={styles.title}> {item.t} </Text>
        </View>
      )}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) =>  props.namesection + item.id}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    marginTop: 15,
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default CardM;
