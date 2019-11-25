import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Header from './Header';
import Detail from './Detail';
import Footer from './Footer';
import EffectsActions from './EffectsActions';

class ImageView extends Component {
  state = {
    showEffects: false,
    effect: 'none',
  };

  componentDidMount() {
    this.props.onLoad(this.props.navigation.state.params.id);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="dark-content" />
        <Header goBack={() => this.props.navigation.goBack()} />
        <Detail details={this.props.details} effect={this.state.effect} />
        <Footer
          details={this.props.details}
          onShowEffectPress={() => this.setState({showEffects: true})}
        />
        {this.state.showEffects ?
          <EffectsActions
            onHideEffectPress={() => this.setState({showEffects: false})}
            onBlurPress={() => this.setState({effect: 'blur'})}
            onNegativePress={() => this.setState({effect: 'contrast'})}
            onSepiaPress={() => this.setState({effect: 'sepia'})}
            onSaturatedPress={() => this.setState({effect: 'saturate'})}
            onResetPress={() => this.setState({effect: 'none'})}
          /> :
          null}
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
