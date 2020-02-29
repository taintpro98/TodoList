import React, {Component} from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#455a64",
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signupText:{
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 18
    },
    signupButton:{
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '500'
    }
});
export default class Login extends Component{

    signup(){
        Actions.signup();
    }

    render(){
        return (
            <View style={styles.container}>
                <Logo/>
                <Form type="Login"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet ? </Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}>Signup</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}