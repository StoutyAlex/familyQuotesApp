import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Input } from 'react-native-elements';

@inject('userStore')
@observer
export default class LoginContainer extends Component {

  renderUsernameField() {
    return (
      <Input
          value={this.props.userStore.username}
          leftIconContainerStyle={styles.icon}
          placeholder='Username'
          onChangeText={this.props.userStore.setUsername}
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />
    );
  };

  renderPasswordField() {
    return (
      <Input
        value={this.props.userStore.password}
        onChangeText={this.props.userStore.setPassword}
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
    );
  }

  renderSignupField() {
    // const { this.props.userStore } = this.props;
    return (
      <View>
        {this.renderUsernameField()}
        {this.renderPasswordField()}
        <Input
          value={this.props.userStore.firstName}
          onChangeText={this.props.userStore.setFirstName}
          leftIconContainerStyle={styles.icon}
          placeholder='First name'
          leftIcon={
            <Icon
              name='text'
              size={24}
              color='black'
            />
          }
        />
        <Input
          value={this.props.userStore.lastName}
          onChangeText={this.props.userStore.setLastName}
          leftIconContainerStyle={styles.icon}
          placeholder='Last name'
          leftIcon={
            <Icon
              name='text'
              size={24}
              color='black'
            />
          }
        />
        <Button title="Sign up" onPress={this.props.userStore.signUp}/>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderSignupField()}
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