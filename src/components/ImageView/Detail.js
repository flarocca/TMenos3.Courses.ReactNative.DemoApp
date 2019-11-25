import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import ZoomableImage from './ZoomableImage';
import SaturateImage from './SaturateImage';
import SepiaImage from './SepiaImage';
import ContrastImage from './ContrastImage';

const width = Dimensions.get('window').width;
const height = width;

const renderImageEffect = (effect, source) => {
  switch (effect) {
    case 'sepia':
      return <SepiaImage source={{uri: source}} style={styles.image} />;
    case 'saturate':
      return <SaturateImage source={{uri: source}} style={styles.image} />;
    case 'contrast':
      return <ContrastImage source={{uri: source}} style={styles.image} />;
    case 'none':
    default:
      return <Image style={styles.image} source={{uri: source}} />;
  }
};

class Detail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ZoomableImage height={height} width={width}>
            {renderImageEffect(
              this.props.effect,
              this.props.details.full_picture,
            )}
          </ZoomableImage>
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
    height: height,
    width: width,
    alignSelf: 'stretch',
    resizeMode: 'stretch',
    backgroundColor: 'white',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Detail;
