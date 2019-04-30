import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'mobx-react/native';

import observableStore from './src/mobx/observableStore';
import MainContainer from './src/containers/MainContainer';
import LoginContainer from './src/containers/LoginContainer';

export default class App extends React.Component {
  render() {
    return (
      <Provider observableStore={observableStore}>
        <View style={styles.container}>
          <LoginContainer />
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
