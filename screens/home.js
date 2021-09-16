/*
    App home screen
    @RobertC 9/7/2021

*/
import {Text, View, Button, Alert} from 'react-native';
import React from 'react';

export default function HomeScreen(){
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello from Da Home Screen Bro!!!</Text>
      <Button
        title="CALCULATE"
        color="#f194ff"
        onPress={() => Alert.alert('Button pressed to calculate!')}
      />
    </View>
  );
};