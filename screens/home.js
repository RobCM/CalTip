/*
    App home screen
    @RobertC 9/7/2021

*/
import {StyleSheet, Text, View, Button, Alert,  TextInput, Pressable} from 'react-native';
import React from 'react';
import {useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import {LinearGradient} from 'expo-linear-gradient';

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
    <><LinearGradient
      colors={["#0e86f1", "#2859a3", "#0c2a62"]}
      style={home_styles.viewBox}>
    
    <View style={home_styles.titleBox}>
        <Text style={home_styles.title_text}>Tip Calculater</Text>
    </View>
    
    <View style={home_styles.viewBox}>

        <TextInput
          style={home_styles.input}
          onChangeText={onChangeitemPrice}
          keyboardType="numeric"
          maxLength={9}
          value={itemPrice} />

        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          layout="row" />

        <Pressable
          style={home_styles.calcuBTN}
          onPress={() => Alert.alert("The tip is: $" + format_money(caltip(selectedButton['value'], format_money(itemPrice))) + " For the amount off $" + format_money(itemPrice))}
        >
          <Text style={home_styles.text}> CALCULATE </Text>
        </Pressable>


        <Pressable
          style={home_styles.aboutBTN}
          onPress={() => Alert.alert("This app was develop by Robert Coleman", "As an exercise to learn the react native environment.")}
        >
          <Text style={home_styles.text}> ABOUT THIS APP! </Text>
        </Pressable>

      </View>
      </LinearGradient>
      </>
  );
};

const home_styles = StyleSheet.create({
  viewBox: {
    flex: 1, 
    justifyContent: 'center',
  },
  input: {
    height: 70,
    margin: 25,
    borderWidth: 1,
    borderColor: 'gray',
    color: 'white',
    padding: 10,
    fontSize: 50,
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
  aboutBTN: {
    width: '100%',  
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    position: 'absolute',
    bottom: 0,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  titleBox: {
    width: '100%', 
    alignItems: 'center', 
    top: 150,
    borderWidth: 1,
    borderColor: 'white',
    elevation: 9,
    shadowColor: 'black',
  },
  title_text: {
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 0.35,
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
