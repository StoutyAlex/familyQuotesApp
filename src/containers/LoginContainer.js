import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Input } from 'react-native-elements';

export default class LoginContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Input
          leftIconContainerStyle={styles.icon}
          placeholder='Username'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />
        <Input
          secureTextEntry={true}
          leftIconContainerStyle={styles.icon}
          placeholder='Password'
          leftIcon={
            <Icon
              name='lock'
              size={24}
              color='black'
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    paddingRight: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});