import React from 'react';
import {  View, FlatList, StyleSheet, Text, StatusBar, ScrollView } from 'react-native';



const Item = ({ title,imag }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    
      {/* <CardM
        className={classes.media}
        image="/images/discada.jpg"
        title="Paella dish"
      /> */}
  </View>
);

const Horizontal = (props) => {
  const renderItem = ({ item }) => (
    <Item 
    title={item.title}
     />
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