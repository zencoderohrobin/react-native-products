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
  render() {
    return (
      <ScrollView>
        <ActivityIndicator
          size="large"
          style={styles.spinner}
          animating={true}
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
