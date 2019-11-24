import React, {Component} from 'react';
import {Image} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

class ZoomableImage extends Component {
  render() {
    return (
      <ImageZoom
        cropWidth={this.props.width}
        cropHeight={this.props.height}
        imageWidth={this.props.width}
        imageHeight={this.props.height}
        minScale={1}
        maxScale={5}>
        <Image style={this.props.imageStyle} source={{uri: this.props.uri}} />
      </ImageZoom>
    );
  }
}

export default ZoomableImage;
