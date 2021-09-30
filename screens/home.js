/*
    App home screen
    @RobertC 9/7/2021

*/
import {StyleSheet, Text, View, Button, Alert,  TextInput} from 'react-native';
import React from 'react';

/* formula for tip:
    Find the total of your pretax bill.
    Move the decimal point to the left one place.
    Round up.
    Double the number 

Example:

Suppose your pretax bill was $ 70.0. Calculate your tip.

Since we know your total pretax bill so we’ll begin by moving the decimal to the left to get $ 7.00.

Since we get a whole there is no need to round up.

Then we double it.

= 7.00 x 2

= 14.00

Therefore, your tip will be worth $ 14.00.
*/

export default function HomeScreen(){

  const [numberone, onChangeNumberOne] = React.useState(null);
  const [numbertwo, onChangeNumberTwo] = React.useState(null);

  var testObj = numberone + numbertwo;
  
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

      <Text>Hello from Da Home Screen Bro!!!</Text>

      <TextInput
        style={home_styles.input}
        onChangeText={onChangeNumberOne}
        keyboardType="numeric"
        maxLength={9}
        value={numberone}
      />

      <TextInput
        style={home_styles.input}
        onChangeText={onChangeNumberTwo}
        keyboardType="numeric"
        maxLength={9}
        value={numbertwo}
      />

      <Button
        title="CALCULATE"
        color="black"
        onPress={() => Alert.alert('Button pressed to calculate! '+ testObj)}
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
