/*
    App home screen
    @RobertC 9/7/2021

*/
import {StyleSheet, Text, View, Button, Alert,  TextInput} from 'react-native';
import React from 'react';

export default function HomeScreen(){

  const [numberone, onChangeNumberOne] = React.useState('');
  const [numbertwo, onChangeNumberTwo] = React.useState('');


  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

      <Text>Hello from Da Home Screen Bro!!!</Text>

      <TextInput
        style={home_styles.input}
        onChangeText={onChangeNumberOne}
        keyboardType="numeric"
        value={numberone}
      />

      <TextInput
        style={home_styles.input}
        onChangeText={onChangeNumberTwo}
        keyboardType="numeric"
        value={numbertwo}
      />

      <Button
        title="CALCULATE"
        color="black"
        onPress={() => Alert.alert('Button pressed to calculate! '+ numberone + ' ' + numbertwo)}
      />

    </View>
  );
};

const home_styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
