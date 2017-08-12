import HomeScreen from './HomeScene';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { Button } from 'react-native';

export const MainNavigator = StackNavigator({
  Home: { screen: HomeScreen },
});

const AppNavigator = DrawerNavigator({
  Main: { screen: MainNavigator },
})

export default AppNavigator;
