import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Router, Scene, Stack } from "react-native-router-flux";
import Splash from "./components/Splash";
import Registration from "./components/Registration";
import Login from "./components/Login";
import UserListing from "./components/UserListing";
import dashboard from "./components/dashboard";
import Details from "./components/Details";
import CameraCapture from "./components/CameraCapture";
import CameraRollView from "./components/CameraRollView";
import SearchList from "./components/SearchList";
import ListViewDemo from "./components/ListViewDemo";

class RouterComponent extends Component {
  render() {
    return (
      <Router
        navigationBarStyle={{ backgroundColor: "#0b7eff", color: "white" }}
        titleStyle={styles.navTitle}
      >
        <Stack key="root">
          {<Scene key="splash" component={Splash} hideNavBar={true} initial />}

          <Scene
            key="Login"
            component={Login}
            hideNavBar={true}
            renderBackButton={() => null}
            // renderLeftButton={()=>(null)}
            renderLeftButton={<View />}
          />

          <Scene
            leftButtonIconStyle={{ tintColor: "white" }}
            key="Registration"
            component={Registration}
            onLeft={() => {
              console.log("is this one called?");
            }}
            hideNavBar={false}
            title="Registration"
          />

          <Scene
            key="UserListing"
            component={UserListing}
            renderBackButton={() => null}
            hideNavBar={false}
            title="Dashboard"
          />

          <Scene
            key="details"
            component={Details}
            hideNavBar={false}
            title="Details"
            leftButtonIconStyle={{ tintColor: "white" }}
          />

          <Scene
            key="cam"
            component={CameraCapture}
            hideNavBar={false}
            title="Camera"
            leftButtonIconStyle={{ tintColor: "white" }}
          />

          <Scene
            key="gallery"
            component={CameraRollView}
            hideNavBar={false}
            title="Gallery"
            leftButtonIconStyle={{ tintColor: "white" }}
          />

          <Scene
            key="SearchList"
            component={SearchList}
            hideNavBar={false}
            title="SearchList"
            leftButtonIconStyle={{ tintColor: "white" }}
          />

          <Scene
            key="ListViewDemo"
            component={ListViewDemo}
            hideNavBar={false}
            title="Users"
            leftButtonIconStyle={{ tintColor: "white" }}
          />
        </Stack>
      </Router>
    );
  }
}
const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0b7eff" // changing navbar color
  },
  navTitle: {
    color: "white" // changing navbar title color
  }
});
export default RouterComponent;
