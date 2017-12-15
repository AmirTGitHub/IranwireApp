

import React, { Component } from 'react';
import {StyleSheet , View } from 'react-native'
import HomePage from './src/Compotents/HomePage'
import AppHeader from './src/Compotents/AppHeader'


export default class App extends Component {
  render() {
    return (
      <View >
      <AppHeader />
      <HomePage />
      </View>
    );
  }
}


