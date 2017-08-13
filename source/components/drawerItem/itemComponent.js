import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
const Touch = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

const ItemMenuComponent = (props) => (
   <View>
    <Touch onPress={() => props.onTouch()}>
        <View style={styles.container}>
            <View style={{flex: 2}}>
            {props.icon}
            </View>
            <View style={{flex: 7}}>
              <Text style={styles.text}>{props.label}</Text>
            </View>  
        </View> 
      </Touch>
    </View>
);

ItemMenuComponent.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

ItemMenuComponent.defaultProps = {
  icon: null,
}
export default ItemMenuComponent;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      padding: 15,
      paddingLeft: 30,
  },
  text: {
    fontSize: 15,
  },
});
