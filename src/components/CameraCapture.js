// "use strict";
import React, { Component } from "react";
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  ToastAndroid
} from "react-native";
import { RNCamera } from "react-native-camera";
import { Actions } from "react-native-router-flux";
import PropTypes from 'prop-types';

class CameraCapture extends Component {
  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      // ToastAndroid.show("Image Saved at " + data.uri, ToastAndroid.SHORT);
      if (data.uri) {
        Actions.pop(); 
        Actions.Registration({ path: data.uri });
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
      <View>
          <StatusBar backgroundColor="#0b7eff" barStyle="light-content" />
        </View>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={"Permission to use camera"}
          permissionDialogMessage={
            "We need your permission to use your camera phone"
          }
        />
        <View
          style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
        >
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}
          >
            <Text style={{ fontSize: 14, color: 'white'}}> Capture </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#0b7eff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20
  }
});
export default CameraCapture;
