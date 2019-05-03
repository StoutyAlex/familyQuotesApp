import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Header, Tile } from 'react-native-elements';

import Carousel from "react-native-carousel-control";


import Quote from '../components/Quote';

@inject('sessionStore', 'userStore')
@observer
export default class MainContainer extends Component {
  componentWillMount() {
    if (!this.props.sessionStore.token) {
      this.props.sessionStore.updateStore(this.props.userStore);
    }
    console.log(this.props.sessionStore.token);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Quotes', style: { color: '#fff' } }}
        />
        {/* <Card/> */}
        <Carousel pageStyle={{backgroundColor: '#f00', marginTop: 30, marginBottom: 30, borderRadius: 25}} sneak={0}>
          <Quote />
          <Quote />
          <Quote />
          <Quote />
          <Quote />
          <Quote />
          <Quote />
        </Carousel>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: ,
    // justifyContent: 'center',
  },
  header: {
    flex: 0.1,
    backgroundColor: '#aaa',
  }
});
