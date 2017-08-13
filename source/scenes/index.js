import HomeScreen from './HomeScene';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { Button } from 'react-native';

import { Drawer } from '../containers'

export const MainNavigator = StackNavigator({
  Home: { screen: HomeScreen },
});

const AppNavigator = DrawerNavigator({
  Main: { screen: MainNavigator },
}, {
  drawerWidth: 280,
  contentComponent: props => <Drawer {...props}/>
})

export default AppNavigator;
