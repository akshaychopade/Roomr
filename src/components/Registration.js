import React, { Component } from "react";
import { Actions } from "react-native-router-flux"; // 4.0.0-beta.28
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  ToastAndroid,
  Alert,
  Button,
  TouchableOpacity,
  StatusBar,
  RNCamera,
  FaceDetector,
  CameraRoll
} from "react-native";
import { Login } from "./Login";
import PropTypes from "prop-types";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      phoneNo: "",
      emailAddress: "",
      password: "",
      confirmPassword: "",
      imagePath:
        "https://onelogin-screenshots.s3.amazonaws.com/user/profile/profile-no-pic.png",
      photos: []
    };

    if (this.props.path) {
      this.state.imagePath = this.props.path;
    } else {
      this.state.imagePath =
        "https://onelogin-screenshots.s3.amazonaws.com/user/profile/profile-no-pic.png";
    }

    if (this.state.imagePath)
      this.setState({ imagePath: this.state.imagePath });
    /*  ToastAndroid.show(
        "Image Received " + this.state.imagePath,
        ToastAndroid.SHORT
      ); */
  }

  // Camera capture
  callFun = () => {
    // alert("Image Clicked!!!");
    Actions.pop();
    Actions.cam();
  };

  // Pick from Gallery
  _getFromGallery = () => {
    Actions.pop();
    Actions.gallery();
  };

  
  componentDidMount() {
   
  }

  handleClick = () => {
    Alert.alert(
      "Select Image",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed")
        },
        {
          text: "Camera",
          onPress: this.callFun,
          style: "cancel"
        },
        {
          text: "Gallery",
          onPress: this._getFromGallery
        }
      ],
      { cancelable: true }
    );
  };

  validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }

  validatePhone(phoneNo) {
    var a = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(
      phoneNo
    );
    return a;
  }

  checkPassword(str) {
    // at least one number, one lowercase and one uppercase letter
    // at least six characters that are letters, numbers or the underscore
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
    return re.test(str);
  }

  userRegistration(e) {
    if (this.state.username.trim() == "") {
      Alert.alert("Please Enter Username.");
      this.refs.UserNameInput.focus();
      return;
    }

    if (!isNaN(this.state.username)) {
      Alert.alert("Username musthttps://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg be only Characters");
      this.refs.UserNameInput.focus();
      return false;
    }
    if (this.state.username.length < 5 || this.state.username.length > 15) {
      Alert.alert("Your Username must be 5 to 15 Character");
      this.refs.UserNameInput.focus();
      return false;
    }

    if (this.state.phoneNo.trim() == "") {
      Alert.alert("Please Enter Phone Number.");
      this.refs.PhoneInput.focus();
      return;
    }

    if (!this.validatePhone(this.state.phoneNo.trim())) {
      Alert.alert("Please Enter Valid Phone Number.");
      this.refs.PhoneInput.focus();
      return;
    }

    if (this.state.emailAddress.trim() == "") {
      Alert.alert("Please Enter Email Address.");
      this.refs.EmailInput.focus();
      return;
    }

    if (!this.validateEmail(this.state.emailAddress.trim())) {
      Alert.alert("Please Enter Valid Email address.");
      this.refs.EmailInput.focus();
      return;
    }

    if (this.state.password.trim() == "") {
      Alert.alert("Please Enter Password.");
      this.refs.PasswordInput.focus();
      return;
    }

    /*   if (!this.checkPassword(this.state.password.trim())) {
      Alert.alert("The password you have entered is not valid",
        "Note : Password must contain at least one number, one lowercase and one uppercase letter at least six characters that are letters, numbers or the underscore."
      );
      this.refs.PasswordInput.focus();
      return false;
    } */

    if (this.state.confirmPassword.trim() == "") {
      Alert.alert("Please Enter Confirm Password.");
      this.refs.ConfirmPasswordInput.focus();
      return;
    }

    if (this.state.confirmPassword !== this.state.password) {
      Alert.alert("Confirm Password does not match.");
      this.refs.ConfirmPasswordInput.focus();
      return;
    }

    // this.setState({ isLoading: true }); // to show loader
    // this.props.onLogin(this.state.username, this.state.password);

    Alert.alert(
      "Registration completed successfully",
      "Please check your registered email for email verification.",
      [{ text: "OK", onPress: () => Actions.pop() }],
      { cancelable: false }
    );

    e.preventDefault();
  }

  render() {
    return (
      <View style={{ padding: 20, backgroundColor: "#FFFFFF" }}>
        <View>
          <StatusBar backgroundColor="#0b7eff" barStyle="light-content" />
        </View>
        <Text
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 27,
            paddingTop: 25
          }}
        >
          {/* Registration */}
        </Text>
        <View style={{ margin: 10 }} />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity activeOpacity={0.5} onPress={this.handleClick}>
            <Image
              style={{
                width: 100,
                justifyContent: "center",
                alignItems: "center",
                height: 100,
                marginBottom: 20,
                marginLeft: 10,
                marginRight: 0,
                borderRadius: 50
              }}
              source={{
                uri: this.state.imagePath
              }}
            />
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="User Name"
          underlineColorAndroid="transparent"
          autoCorrect={false}
          keyboardType="TextInput"
          returnKeyType={"next"}
          ref="UserNameInput"
          onSubmitEditing={event => {
            this.refs.PhoneInput.focus();
          }}
          maxLength={40}
          style={styles.TextInputStyleClass}
          onChangeText={text => this.setState({ username: text })}
        />
        <View style={{ margin: 7 }} />
        <TextInput
          placeholder="Phone Number"
          returnKeyType={"next"}
          keyboardType={"phone-pad"}
          underlineColorAndroid="transparent"
          ref="PhoneInput"
          autoCorrect={false}
          maxLength={10}
          style={styles.TextInputStyleClass}
          onSubmitEditing={event => {
            this.refs.EmailInput.focus();
          }}
          onChangeText={text => this.setState({ phoneNo: text })}
        />
        <View style={{ margin: 7 }} />
        <TextInput
          placeholder="Email"
          returnKeyType={"next"}
          ref="EmailInput"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          autoCorrect={false}
          maxLength={40}
          style={styles.TextInputStyleClass}
          onSubmitEditing={event => {
            this.refs.PasswordInput.focus();
          }}
          onChangeText={text => this.setState({ emailAddress: text })}
        />
        <View style={{ margin: 7 }} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          ref="PasswordInput"
          returnKeyType={"next"}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          maxLength={25}
          style={styles.TextInputStyleClass}
          onSubmitEditing={event => {
            this.refs.ConfirmPasswordInput.focus();
          }}
          onChangeText={text => this.setState({ password: text })}
        />
        <View style={{ margin: 7 }} />

        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          ref="ConfirmPasswordInput"
          underlineColorAndroid="transparent"
          autoCorrect={false}
          maxLength={25}
          style={styles.TextInputStyleClass}
          onChangeText={text => this.setState({ confirmPassword: text })}
        />
        <View
          style={{
            margin: 4,
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 20
          }}
        />
        <Button onPress={e => this.userRegistration(e)} title="Submit" />
        <View style={{ margin: 7 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#A1887F"
  },
  TextInputStyleClass: {
    // Setting up Hint Align center.
    textAlign: "left",
    paddingLeft: 10,
    // Setting up TextInput height as 50 pixel.
    height: 40,

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

export default Registration;
