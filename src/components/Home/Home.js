import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Header from './Header';
import ImageList from './ImageList';
import NavigationTypes from '../Constants/navigation';

class Home extends Component {
  componentDidMount() {
    this.props.loadImages(this.props.page);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="rgb(63, 81, 181)" barStyle="dark-content" />
        <Header />
        <ImageList
          images={this.props.images}
          onItemPress={image =>
            this.props.navigation.navigate(NavigationTypes.IMAGE_VIEW, image)
          }
          loadMore={() => {
            if (this.props.page < this.props.pageCount) {
              this.props.loadImages(this.props.page);
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default Home;
