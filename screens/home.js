/*
    App home screen
    @RobertC 9/7/2021

*/
import {StyleSheet, Text, View, Button, Alert,  TextInput, Pressable} from 'react-native';
import React from 'react';
import {useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

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
    
      <Pressable 
        style={home_styles.calcuBTN}
        onPress={() => Alert.alert("The tip is: $" +  format_money(caltip(selectedButton['value'], format_money(itemPrice))) + " For the amount off $" + format_money(itemPrice))}
      >
        <Text style={home_styles.text}> CALCULATE </Text>
      </Pressable>
      

      <Button
        title="About this app!"
        onPress={() => Alert.alert("This app was develop by Robert Coleman", "As an exercise to learn the react native environment.")}
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
  calcuBTN: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'gray',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
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
  let totaltip = (totalprice/100) * percenttip;
  return totaltip;
}
