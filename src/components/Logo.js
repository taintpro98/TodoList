import React, {Component} from 'react';
import {
  View, Text, StyleSheet, StatusBar, Image
} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    logoText:{
      marginVertical: 15, 
      fontSize: 18,
      color: 'rgba(255, 255, 255, 0.7)'
    }
});
export default class Logo extends Component{
    render(){
        return (
          <View style={styles.container}>
            <Image
            style={{width: 70, height: 70}}
            source={require('../images/tiny_logo.png')}
          />
          <Text style={styles.logoText}>Welcome to my Todo List</Text>
          </View>
          
        );
    }
}