import React, {Component} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import ImageItem from './ImageItem';

let width = Dimensions.get('window').width;

class ImageList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.images}
          renderItem={({item}) => (
            <ImageItem
              source={item.cropped_picture}
              onPress={() => this.props.onItemPress(item)}
            />
          )}
          keyExtractor={item => item.id}
          horizontal={false}
          numColumns={2}
          onEndReached={this.props.loadMore}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageList;
