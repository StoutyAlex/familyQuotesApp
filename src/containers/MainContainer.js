import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { View, Text, Button } from 'react-native';

@inject('observableStore')
@observer
export default class MainContainer extends Component {
  onClick() {
    console.log('click');
    this.props.observableStore.setProperty('hello');
  }

  render() {
    console.log(this.props.observableStore.setProperty);
    return (
      <View>
        <Button
          onPress={() => this.onClick()}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>{this.props.observableStore.property} count</Text>
        <Text>{this.props.observableStore.welcomeMessage}</Text>
      </View>
    );
  }
};
