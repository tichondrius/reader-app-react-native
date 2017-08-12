import React, { Component } from 'react';
import { View, } from 'react-native';
import { Provider , connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { NetInfo } from 'react-native';

import AppNavigator from './scenes';
import configureStore from './redux/configureStore';
class App extends Component {
  componentDidMount() {
    NetInfo.isConnected.addEventListener('change', this.onNetworkChange);
  }
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('change', this.onNetworkChange);
  }
  onNetworkChange = (isConnected) => {
    console.log(isConnected);
  }
  render() {
    return (
      <AppNavigator />
    );
  }
}

export default class Root extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <App />
      </Provider>
    );
  }
}

