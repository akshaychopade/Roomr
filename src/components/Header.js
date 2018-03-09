import React from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C1C1C1"
  },
  input: {
    height: 45,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 2
  }
});

export class Header extends React.Component {
  componentDidMount() {
    // this.getTimerCountDown();
  }
 /*  getTimerCountDown() {
    setTimeout(() => {
      var SampleArray_2 = this.props.name.toString();
      Alert.alert("Sample " + this.props.name);
    }, 3000);
  } */

  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function(item) {
      const itemData = item.fruit_name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newData),
      text: text
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
         // onChangeText={text => this.SearchFilterFunction(text)}
          />
      </View>
    );
  }
}
/* const Header = props => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Search..."
      onChangeText={text => this.props.SearchFilterFunction(text)}
      //onChangeText={(text) => console.log('searching for ', text)}
    />

    <Text>{props.name.first}</Text>
  </View>
); */

export default Header;
