import React, {Component} from 'react';
import {Image} from 'react-native';
import {Contrast} from 'react-native-color-matrix-image-filters';

class ContrastImage extends Component {
  render() {
    return (
      <Contrast>
        <Image {...this.props} />
      </Contrast>
    );
  }
}

export default ContrastImage;
