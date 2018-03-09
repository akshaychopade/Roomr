import React, { Component } from "react";
import { Actions } from "react-native-router-flux"; // 4.0.0-beta.28
import { connect } from "react-redux";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Alert,
  Image,
  StyleSheet,
  Button,
  BackHandler,
  ToastAndroid,
  ActivityIndicator,
  StatusBar
} from "react-native";
import { login, loginFromAPI } from "../actions/auth";
// import PropTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoading: false,
      doubleBackToExitPressedOnce: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false }); // to hide loader
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  onButtonPress = () => {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
    // then navigate
    // navigate('NewScreen');
  };

  handleBackButton = () => {
    if (this.state.doubleBackToExitPressedOnce) {
      BackHandler.exitApp();
    }
    ToastAndroid.show("Press back again to exit", ToastAndroid.SHORT);
    this.setState({ doubleBackToExitPressedOnce: true });
    setTimeout(() => {
      this.setState({ doubleBackToExitPressedOnce: false });
    }, 2000);
    return true;
  };

  userLogin(e) {
    if (this.state.username.trim() == "") {
      Alert.alert("Please Enter Email address.");
      return;
    }

    if (!this.validateEmail(this.state.username.trim())) {
      Alert.alert("Please Enter Valid Email address.");
      return;
    }

    if (this.state.password.trim() == "") {
      Alert.alert("Please Enter Password.");
      return;
    }

    this.setState({ isLoading: true }); // to show loader
    this.props.onLogin(this.state.username, this.state.password);
    e.preventDefault();
  }

  handleClick = () => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };

  validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }
  

  render() {
    const { isLoading } = this.state;
    return (
      <ScrollView style={{ padding: 20, backgroundColor: "#FFFFFF" }}>
        <View>
          <StatusBar backgroundColor="transparent" barStyle="light-content" />
        </View>
        <Text
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 30,
            alignItems: "center",
            paddingTop: 60
          }}
        >
          Darkroom
        </Text>
        <View style={{ margin: 10, paddingTop: 20 }} />
        <TextInput
          placeholder="Email address"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          autoCorrect={false}
          maxLength={40}
          value="abc@gmail.com"
          style={styles.TextInputStyleClass}
          onChangeText={text => this.setState({ username: text })}
        />
        <View style={{ margin: 7 }} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          value="123"
          maxLength={25}
          style={styles.TextInputStyleClass}
          onChangeText={text => this.setState({ password: text })}
        />

        {/*  <View style={{ flexWrap: "wrap" }}>
          <Text
            style={{
              margin: 4,
              paddingLeft: 20,
              color: "gray",
              justifyContent: "center",
              alignSelf: 'flex-end',  
              alignItems: "center",
              paddingTop: 10
            }}
          >
            Forgot Password?
          </Text>
        </View> */}

        <View
          style={{
            margin: 4,
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10
          }}
        />

        {this.state.isLoading && (
          <ActivityIndicator
            style={{ height: 80 }}
            color="#0b7eff"
            size="large"
          />
        )}

        <Button
          style={{
            flexDirection: "row",
            paddingLeft: 40,
            paddingRight: 40,
            margin: 30,
            flexWrap: "wrap"
          }}
          //          onPress={this.props.onLoginPress}

          onPress={e => this.userLogin(e)}
          title="Log In"
        />

        <Text
          onPress={() => Actions.Registration()}
          style={{
            flex: 1,
            justifyContent: "center",
            color: "gray",
            textAlign: "center",
            alignSelf: "stretch",
            color: "#0b7eff",
            alignItems: "center",
            fontSize: 15,
            paddingTop: 18
          }}
        >
          SIGN UP
        </Text>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingTop: 50,
            textAlign: "center",
            justifyContent: "center"
          }}
        >
          <Image
            onPress={this.handleClick}
            style={{ width: 40, height: 40, marginLeft: 10, marginRight: 0 }}
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/f/fb/Google-plus-circle-icon-png.png"
            }}
          />

          <Image
            onPress={this.handleClick}
            style={{ width: 40, height: 40, marginLeft: 10, marginRight: 0 }}
            source={{
              uri:
                "https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png"
            }}
          />

          <Image
            onPress={this.handleClick}
            style={{ width: 40, height: 40, marginLeft: 10, marginRight: 10 }}
            source={{
              uri:
                "https://cdn.iconscout.com/public/images/icon/free/png-512/twitter-social-media-3f03120c06f3fca2-512x512.png"
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  TextInputStyleClass: {
    // Setting up Hint Align center.
    textAlign: "left",
    paddingLeft: 10,
    // Setting up TextInput height as 50 pixel.
    height: 42,

    // Set border width.
    borderWidth: 1,

    // Set border Hex Color Code Here.
    borderColor: "#0b7eff",

    // Set border Radius.
    borderRadius: 10,

    //Set background color of Text Input.
    backgroundColor: "#FFFFFF"
  }
});

const mapStateToProps = (state, ownProps) => {
  if (state.auth.isLoggedIn) {
    // Actions.UserListing();
    Actions.pop();
    Actions.ListViewDemo();
    this.setState({ isLoading: false });
  } else if (this.setState) {
    this.setState({ isLoading: false });
  }
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username, password) => {
      dispatch(loginFromAPI(username, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
