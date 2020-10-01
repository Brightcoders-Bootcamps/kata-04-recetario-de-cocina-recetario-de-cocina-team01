import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ScrollView } from 'react-native';



const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Horizontal = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    
    <ScrollView horizontal={true} >
      <FlatList horizontal={true}
        data={props.datos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Horizontal;