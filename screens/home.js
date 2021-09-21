/*
    App home screen
    @RobertC 9/7/2021

*/
import {StyleSheet, Text, View, Button, Alert,  TextInput} from 'react-native';
import React from 'react';

export default function HomeScreen(){

  const [text, onChangeText] = React.useState("Input Total Here");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

      <Text>Hello from Da Home Screen Bro!!!</Text>

      <TextInput
       style={home_styles.input}
        onChangeText={onChangeText}
        value={text}
      />

      <Button
        title="CALCULATE"
        color="#f194ff"
        onPress={() => Alert.alert('Button pressed to calculate!')}
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
