import React, { Component } from "react";
import {
  CameraRoll,
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
  StatusBar,
  ToastAndroid
} from "react-native";
import { Actions } from "react-native-router-flux";
import PropTypes from "prop-types";

class CameraRollView extends Component {
  constructor(props) {
    super(props);
    var controls = props.controls;
    this.state = {
      images: [],
      selected: "",
      fetchParams: { first: 100 },
      groupTypes: "SavedPhotos"
    };
    this._storeImages = this._storeImages.bind(this);
    this._logImageError = this._logImageError.bind(this);
    this._selectImage = this._selectImage.bind(this);
  }

  componentDidMount() {
    // get photos from camera roll
    CameraRoll.getPhotos(
      this.state.fetchParams,
      this._storeImages,
      this._logImageError
    );
  }

  // callback which processes received images from camera roll and stores them in an array
  _storeImages(data) {
    const assets = data.edges;
    const images = assets.map(asset => asset.node.image);
    this.setState({
      images: images
    });
  }

  _logImageError(err) {
    console.log(err);
  }

  _selectImage(uri) {
    // define whatever you want to happen when an image is selected here
    this.setState({
      selected: uri
    });
    console.log("Selected image: ", uri);
    if (uri) {
      Actions.pop();
      Actions.Registration({ path: uri });
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View>
          <StatusBar backgroundColor="#0b7eff" barStyle="light-content" />
        </View>
        <ScrollView style={styles.container}>
          <View style={styles.imageGrid}>
            {this.state.images.map(image => {
              return (
                <TouchableHighlight
                  onPress={() => this._selectImage(image.uri)}
                >
                  <Image style={styles.image} source={{ uri: image.uri }} />
                </TouchableHighlight>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: 25,
    marginTop: 30
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  image: {
    width: 100,
    height: 100,
    margin: 1
  }
});

export default CameraRollView;
