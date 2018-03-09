import React from "react";
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  BackHandler
} from "react-native";

import { connect } from "react-redux";
import { fetchPeopleFromAPI } from "../actions/actions";
import { Actions } from "react-native-router-flux";

let styles;
console.disableYellowBox = true;

var isload = false;

const UserListing = props => {
  const { container, text, button, buttonText } = styles;
  const { people, isFetching } = props.people;

  if (!isload) {
    props.getPeople();
    isload = true;
  }

  BackHandler.addEventListener("hardwareBackPress", function() {
    // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
    // Typically you would use the navigator here to go to the last state.

    BackHandler.exitApp();
    return true;
  });

  return (
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
                      style={{
                        color: "gray",
                        paddingTop: 2,
                        paddingLeft: 16
                      }}
                      onPress={() => Actions.details()}
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
      <View style={{ height: 60 }}>
        <TouchableHighlight style={button} onPress={() => props.getPeople()}>
          <Text style={buttonText}>Load </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

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
    color: "white",
    justifyContent: "center",
    alignItems: "center"
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

export default connect(mapStateToProps, mapDispatchToProps)(UserListing);
