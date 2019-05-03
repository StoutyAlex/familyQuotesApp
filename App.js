import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'mobx-react/native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import userStore from './src/mobx/userStore';
import sessionStore from './src/mobx/sessionStore';

import MainContainer from './src/containers/MainContainer';
import LoginContainer from './src/containers/LoginContainer';

const MainNavigator = createStackNavigator({
  Home: {screen: MainContainer},
  Login: {screen: LoginContainer},
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider sessionStore={sessionStore} userStore={userStore}>
        <View style={styles.container}>
          {/* <LoginContainer /> */}
          <AppContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
