import React, { Component }  from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

class HomeContainer extends Component {
  render(){
    return (     
      <View style={styles.container}>
         <Icon name="menu" size={300} color="black" />
        <TouchableOpacity onPress={() => {}}>
          <View>
            <Text style={styles.welcome}>
              Welcome back tichondrius ! 
            </Text>
            <Text style={styles.instructions}>
              To get started, edit index.android.js
            </Text>
            <Text style={styles.instructions}>
              Double tap R on your keyboard to reload,{'\n'}
              Shake or press menu button for dev menu
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}



const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});