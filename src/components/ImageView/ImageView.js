import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Header from './Header';
import Detail from './Detail';
import Footer from './Footer';

class ImageView extends Component {
  componentDidMount() {
    this.props.onLoad(this.props.navigation.state.params.id);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="dark-content" />
        <Header goBack={() => this.props.navigation.goBack()} />
        <Detail details={this.props.details} />
        <Footer details={this.props.details} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ImageView;
