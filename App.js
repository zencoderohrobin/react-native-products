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
    fetch('https://hplussport.com/api/products.php');
  }

  render() {
    return (
      <ScrollView>
        <ActivityIndicator
          size="large"
          style={styles.spinner}
          animating={this.state.fetching}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }
});
