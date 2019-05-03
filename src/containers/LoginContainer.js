import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Input } from 'react-native-elements';

@inject('userStore')
@observer
export default class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      signUpOrIn: 'in',
    };
  }

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

  renderSigninField() {
    return (
      <View>
        {this.renderUsernameField()}
        {this.renderPasswordField()}
        <Button title="Sign in" onPress={this.props.userStore.signIn}/>
      </View>
    );
  }

  renderSignupField() {
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
        <View>
          <Button title="Sign Up" onPress={() => this.setState({ signUpOrIn: 'up'})}/>
          <Button title="Sign In" onPress={() => this.setState({ signUpOrIn: 'in'})}/>
        </View>
        {this.state.signUpOrIn === 'up' && this.renderSignupField()}
        {this.state.signUpOrIn === 'in' && this.renderSigninField()}
        <Text>
          {this.props.userStore.signedIn === true ? 'Signed in' : 'Signed out'}
        </Text>
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