import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class EffectsActions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.action} onPress={this.props.onBlurPress}>
            <Text style={styles.title}>Blur</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={this.props.onSepiaPress}>
            <Text style={styles.title}>Sepia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={this.props.onNegativePress}>
            <Text style={styles.title}>Negative</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={this.props.onNegativePress}>
            <Text style={styles.title}>Saturated</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={this.props.onResetPress}>
            <Text style={styles.title}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={this.props.onHideEffectPress}>
            <Text style={styles.title}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  actionsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  action: {
    width: width * 0.5,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
});

export default EffectsActions;
