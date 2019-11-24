import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

let width = Dimensions.get('window').width;

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Gallery app</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 64,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 15,
    backgroundColor: 'rgb(63, 81, 181)',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;
