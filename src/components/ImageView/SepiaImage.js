import React, {Component} from 'react';
import {Image} from 'react-native';
import {Sepia} from 'react-native-color-matrix-image-filters';

class SepiaImage extends Component {
  render() {
    return (
      <Sepia>
        <Image {...this.props} />
      </Sepia>
    );
  }
}

export default SepiaImage;
