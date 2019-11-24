import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Share,
} from 'react-native';
import ShareIcon from '../../icons/Share';
import Blur from '../../icons/Blur';

let width = Dimensions.get('window').width;

class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{this.props.details.author}</Text>
          <Text style={styles.text}>{this.props.details.camera}</Text>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.action}
            onPress={this.props.onBlurPress}>
            <Blur />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.action}
            onPress={() => this._onSharePress(this.props.details.imageUrl)}>
            <ShareIcon />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _onSharePress = imageUrl => {
    Share.share({message: imageUrl});
  };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width,
    height: 64,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: 15,
  },
  actionsContainer: {
    flexDirection: 'row',
    paddingRight: 15,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
  action: {
    paddingLeft: 15,
  },
});

export default Footer;
