import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ActivityIndicator,
  FlatList
} from "react-native";
import { Card, ListItem, Button, List , Divider } from "react-native-elements";
import Headlines from './Headlines'
import Blogs from './Blogs'
import Features from './Features'

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      features: [],
      headlines: []
    };
  }

  render() {
    return (
      <View>
        <Headlines/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:0,
    alignContent:"center",
    justifyContent : "center"
  },
  headlines :{
    flex:0,
    alignContent:"center",
    justifyContent : "space-between",
    backgroundColor:"#e6e6e6"
  },
  blogs:{
    flex:0,
    alignContent:"center",
    justifyContent : "space-between",
    backgroundColor:"#e6e6e6"
  },
  fetures:{
    flex:0,
    alignContent:"center",
    justifyContent : "space-between",
    backgroundColor:"#e6e6e6"
  }
});