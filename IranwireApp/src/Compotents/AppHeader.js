import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Header } from "react-native-elements";

export default class AppHeader extends Component {
  render() {
    return (
      <View  >
        <Header 
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "ایران‌وایر", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
          outerContainerStyles={{ backgroundColor: '#76a56f' }}
        />
      </View>
    );
  }
}

