import React, { Component } from "react";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";

import { AppRegistry } from "react-native";
import configureStore from "./config/configureStore";
import RouterComponent from "./Routes";

import PropTypes from "prop-types";

console.disableYellowBox = true;

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}
