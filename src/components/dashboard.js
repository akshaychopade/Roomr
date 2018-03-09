import React, { Component } from "react";
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView
} from "react-native";

import UserListing from "./UserListing";

import { connect } from "react-redux";
import { fetchPeopleFromAPI } from "../actions/actions";

let styles;
class dashboard extends Component {
  constructor(props) {
    super(props);

    const { container, text, button, buttonText } = styles;
    const { people, isFetching } = props.people;
  }

  render() {
    <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
      <ScrollView>
        <View style={container}>
          <View>
            <StatusBar backgroundColor="#0b7eff" barStyle="light-content" />
          </View>
          <Text style={text} />

          {isFetching && (
            <Text
              style={{
                flex: 1,
                backgroundColor: "white",
                paddingTop: 20,
                textAlign: "center",
                paddingBottom: 20
              }}
            >
              Loading..
            </Text>
          )}
          {people.length
            ? people.map((person, i) => {
                return (
                  <View key={i}>
                    <Text style={{ color: "#000", paddingTop: 10 }}>
                      {i + 1}) Name: {person.name}
                    </Text>
                    <Text
                      style={{ color: "gray", paddingTop: 2, paddingLeft: 16 }}
                    >
                      Birth Year: {person.birth_year}
                    </Text>
                    <View
                      style={{
                        borderBottomColor: "gray",
                        paddingLeft: 15,
                        paddingTop: 5,
                        paddingRight: 15,
                        padding: 10,
                        borderBottomWidth: 1
                      }}
                    />
                  </View>
                );
              })
            : null}
        </View>
      </ScrollView>
      {/* <View style={{ flex: 1, backgroundColor: "red" }} /> */}
      <View style={{ height: 60 }}>
        <TouchableHighlight style={button} onPress={() => props.getPeople()}>
          <Text style={buttonText}>Load </Text>
        </TouchableHighlight>
      </View>
    </View>;
  }
}

styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "lucida grande"
  },
  button: {
    marginTop: 10,
    height: 60,
    color: "#0b7eff",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b7eff"
  },
  buttonText: {
    color: "white"
  }
});

function mapStateToProps(state) {
  return {
    people: state.people
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPeople: () => dispatch(fetchPeopleFromAPI())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(dashboard);
