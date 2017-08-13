import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeContainer from '../containers/home/homeContainer';


export default class HomeScene extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: <Icon.Button
                  name="menu"
                  size={35}
                  backgroundColor='#FFF'
                  color='black'
                  onPress={()=>{navigation.navigate('DrawerOpen')}} />
  });
  render() {
    return (     
      <HomeContainer />
    );
  }
}
