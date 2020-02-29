import React, {Component} from 'react';
import {
  View, StyleSheet, StatusBar
} from 'react-native';
import Routes from './src/Routes';
import Login from './src/pages/Login';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#455a64",
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});

export default class App extends Component{
  render(){
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#lc313a"
          barStyle="light-content"  
        />
        <Routes/>
      </View>
    );
  }
}