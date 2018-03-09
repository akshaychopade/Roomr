import React, { Component } from "react";
import { Image, View, StyleSheet, StatusBar } from "react-native";
import { Actions } from "react-native-router-flux";
import Login from "./Login";
// import PropTypes from "prop-types";

class Splash extends Component {
  getTimerCountDown() {
    setTimeout(() => {
      Actions.Login();
    }, 2500);
  }

  getTimeRem() {
    return this.state.timeRemaining;
  }

  componentDidMount() {
    this.getTimerCountDown();
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <StatusBar backgroundColor="#B45BB7" barStyle="light-content" />
        </View>
        <Image
          style={styles.container}
          source={{
            uri:
              "https://i.pinimg.com/236x/58/dc/de/58dcde315e35ec70fb77863ae9b801b8--simple-logos-splash-screen.jpg"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A1887F"
  }
});

export default Splash; //Provides export access for the component
