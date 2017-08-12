/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Root from './source';

export default class TruyenHay extends Component {
  render() {
    return (
      <Root />
    );
  }
}



AppRegistry.registerComponent('TruyenHay', () => TruyenHay);
