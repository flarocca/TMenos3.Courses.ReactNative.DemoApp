import React, {Component} from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('window').width / 2;

class ImageItem extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Image style={styles.image} source={{uri: this.props.source}} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: width,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    alignSelf: 'stretch',
    resizeMode: 'stretch',
  },
});

export default ImageItem;
