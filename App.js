import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
  Image,
  Dimensions
} from 'react-native';

export default class App extends Component<{}> {
  constructor() {
    super();
    this.state = {
      productImages: [],
      fetching: false
    };
  }

  componentDidMount() {
    this.setState({ fetching: true });
    fetch('https://hplussport.com/api/products.php')
      .then(response => response.json())
      .then(products => products.map(product => product.image))
      .then(productImages => this.setState({ productImages, fetching: false }))
      .catch(err => console.error('error fetching products', err));
  }

  render() {
    return (
      <ScrollView horizontal={true}>
        <ActivityIndicator
          size="large"
          style={styles.spinner}
          animating={this.state.fetching}
        />
        {this.state.productImages.map((uri, index) => (
          <Image style={styles.thumbnail} key={index} source={{ uri }} />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  thumbnail: {
    width: 375,
    resizeMode: 'cover'
  }
});
