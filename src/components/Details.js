import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import {
  AppRegistry,
  Image,
  View,
  ScrollView,
  StyleSheet,
  Alert,
  TouchableHighlight,
  Text
} from "react-native";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Lorem Ipsum",
      bodyText:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. \n\nWhere does it come from?  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. tandard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.  ',
      uri:
        "https://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg"
    };
    if (this.props.uri) {
      this.state.uri = this.props.uri;
    }
    if (this.props.titleText) {
      this.state.titleText = this.props.titleText;
    }
  }

  render() {
    let pic = {
      uri: this.state.uri
    };
    return (
      <View>
        <ScrollView>
          <Image
            style={{
              alignSelf: "center",
              height: 150,
              width: 150,
              borderWidth: 1,
              borderRadius: 75,
              marginTop: 70
            }}
            source={pic}
            resizeMode="stretch"
          />

          {/*  <Image
            source={pic}
            style={{
              width: '100%',
              height: '40%',
              overflow: 'hidden',
              alignItems: 'center',
              backgroundColor: 'orange',
              position: 'relative',
              paddingTop: 100,
            }}
          /> */}

          <Text style={styles.titleText}>{this.state.titleText}</Text>

          <Text style={styles.baseText}>{this.state.bodyText}</Text>

         {/*  <View style={{ height: 60 }}>
            <TouchableHighlight
              style={styles.button}
              onPress={() => Actions.ListViewDemo()}
            >
              <Text style={styles.buttonText}>Done</Text>
            </TouchableHighlight>
          </View> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    fontSize: 16,
    margin: 5,
    textAlign: "left",
    fontWeight: "normal",
    textAlign: "justify"
  },
  titleText: {
    fontSize: 24,
    textAlign: "center",

    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold"
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

export default Details;
