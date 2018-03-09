import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Actions } from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 15,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});


const Row = (props) => (
  <View style={styles.container} >
    <Image source={{ uri: props.picture.large}} style={styles.photo} />
    <Text style={styles.text} onPress={() => Actions.details({ uri: props.picture.large,
      titleText:`${props.name.first.charAt(0).toUpperCase() + props.name.first.slice(1)} ${props.name.last.charAt(0).toUpperCase() + props.name.last.slice(1)}` })}>
      {`${props.name.first.charAt(0).toUpperCase() + props.name.first.slice(1)} ${props.name.last.charAt(0).toUpperCase() + props.name.last.slice(1)}`}
    </Text>
  </View>
);



export default Row;
