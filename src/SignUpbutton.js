/* eslint-disable prettier/prettier */
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import * as React from 'react';

function SignUpbutton({ navigation }) {
    return (
      <View style={style.view}>
        <TouchableHighlight style={style.button} onPress={() => navigation.navigate('SignupRoot')}>
        <Text style={style.font}>SIGNUP</Text>
        </TouchableHighlight>
      </View>
    );
  }


const style = StyleSheet.create({
  button:{
    backgroundColor: '#BC8F8F',
    borderRadius: 10,
    height: 40,
    marginTop: 10,
    width: 200,
    alignItems: 'center',
  },
  view:{
    flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#FFF5EE',
  },
  text:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    padding: 5,
  },
  font:{
    flex: 0.2,color: '#fff',fontSize: 40,
  },
});

export default SignUpbutton;
