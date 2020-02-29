import React, {Component} from 'react';
import {
  View, TextInput, StyleSheet, TouchableOpacity, Text
} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputBox:{
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginVertical: 10,
        fontSize: 16,
        color: "#ffffff"
    },
    buttonText:{
        fontSize: 16,
        fontWeight: '500',
        color:'#ffffff',
        textAlign: 'center'
    },
    button:{
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 16 
    }
});
export default class Form extends Component{

    // constructor(props){
    //     super();
        
    // }

    render(){
        return (
          <View style={styles.container}>
            <TextInput
                style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Email"
                placeholderTextColor = "#ffffff"
                selectionColor="#ffffff"
                keyboardType="email-address"
                onSubmitEditing={()=>this.password.focus()}
                // onChangeText={text => onChangeText(text)}
                // value={value}
            />
            <TextInput
                style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Password"
                placeholderTextColor = "#ffffff"
                secureTextEntry={true}
                ref={(input) => this.password = input}
                // onChangeText={text => onChangeText(text)}
                // value={value}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>
          </View>
          
        );
    }
}