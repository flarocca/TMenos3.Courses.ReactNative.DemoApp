import React, {Component} from 'react';
import {Image} from 'react-native';
import {Saturate} from 'react-native-color-matrix-image-filters';

class SaturateImage extends Component {
  render() {
    return (
      <Saturate>
        <Image {...this.props} />
      </Saturate>
    );
  }
}

export default SaturateImage;
