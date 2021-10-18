/*
    App home screen
    @RobertC 9/7/2021

*/
import {StyleSheet, Text, View, Button, Alert,  TextInput} from 'react-native';
import React from 'react';
import {useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
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

Tips % :
5%
10%
15%
20%
25%
30%
*/

const radioButtonsData = [
  {
    id: '1',
    label: '5%',
    value: '5',
    color: 'gray',
    selected: false,
  },
  {
    id: '2',
    label: '10%',
    value: '10',
    color: 'gray',
    selected: false,
  },
  {
    id: '3',
    label: '15%',
    value: '15',
    color: 'gray',
    selected: true,
  },
  {
    id: '4',
    label: '20%',
    value: '20',
    color: 'gray',
    selected: false,
  },
];


export default function HomeScreen(){

  const [itemPrice, onChangeitemPrice] = React.useState(null);

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const onPressRadioButton = radioButtonsArray => {
    setRadioButtons(radioButtonsArray);
  };

  // To get radio button value!
  let selectedButton = radioButtonsData.find(e => e.selected == true);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

      <Text>Tip Calculater</Text>

      <TextInput
        style={home_styles.input}
        onChangeText={onChangeitemPrice}
        keyboardType="numeric"
        maxLength={9}
        value={itemPrice}
      />
 
      <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        layout="row"
      />

      <Button
        title="CALCULATE"
        color="black"
        onPress={() => Alert.alert("the tip choose is: " + caltip(selectedButton['value'], format_money(itemPrice)))}
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

// Functions
function format_money(moneyinput){
  if (moneyinput == null) {
    return '0.00';
  }
  else{
    moneyinput = parseFloat(moneyinput);
    moneyinput = moneyinput.toFixed(2);
    return moneyinput;
  }
}

function caltip(percenttip, totalprice){


  return percenttip + " and " + totalprice
}
