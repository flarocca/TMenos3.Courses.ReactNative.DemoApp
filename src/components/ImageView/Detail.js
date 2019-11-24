import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import ZoomableImage from './ZoomableImage';

const width = Dimensions.get('window').width;
const height = width;

class Detail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ZoomableImage
            height={height}
            width={width}
            uri={this.props.details.full_picture}
            imageStyle={styles.image}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  imageContainer: {
    height: height,
    width: width,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    alignSelf: 'stretch',
    resizeMode: 'stretch',
  },
});

export default Detail;
