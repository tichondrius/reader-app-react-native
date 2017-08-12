/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import HomeScene from './source/scenes/HomeScene';

export default class TruyenHay extends Component {
  render() {
    return (
      <HomeScene/>
    );
  }
}



AppRegistry.registerComponent('TruyenHay', () => TruyenHay);
