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
    return <ScrollView />;
  }
}

const styles = StyleSheet.create({});
