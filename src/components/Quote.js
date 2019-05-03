import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Quote = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', margin: 20}}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#a00',
    justifyContent: 'center',
    flex: 1,
  },
});

export default Quote;