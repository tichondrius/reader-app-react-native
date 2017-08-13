import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
const Touch = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

const GroupMenuComponent = (props) => (
  <View >
    <Touch onPress={() => {props.onTouch()}}>
      <View  style={styles.container}>
        <View style={{flex: 2}}>
          { props.icon }
        </View>
        <View style={{flex: 7}}>
          <Text style={styles.text}>{props.label}</Text>
        </View>
        <View style={{flex: 2}}>
          {
            props.canDropDown && (
              props.isOpen === true
              ? <Icon name="keyboard-arrow-up" size={25} color='black'/>
              : <Icon name="keyboard-arrow-down" size={25} color='black'/>
            )
          }
        </View>
      </View>
    </Touch>
      {props.isOpen==true && props.children}
  </View>
);

GroupMenuComponent.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  children: PropTypes.array,
  isOpen: PropTypes.bool,
  
};

GroupMenuComponent.defaultProps = {
  icon: null,
  canDropDown: true,
  children: null,
}

export default GroupMenuComponent;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      padding: 18,
  },
  text: {
    fontSize: 16,
    color: "#111111",
  },
});