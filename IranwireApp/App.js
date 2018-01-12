

import React, { Component } from 'react';
import {StyleSheet , View } from 'react-native'
import HomePage from './src/Compotents/HomePage'
import AppHeader from './src/Compotents/AppHeader'
import Loadfeatures from './src/Compotents/LoadFeatures'
import LoadFeatures from './src/Compotents/LoadFeatures';


export default class App extends Component {
  render() {
    return (
      <View >
      <AppHeader />
      {/* <LoadFeatures /> */}
      <HomePage style={{flex:1}} />
      </View>
    );
  }
}


