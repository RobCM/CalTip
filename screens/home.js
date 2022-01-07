/*
    App home screen
    @RobertC 9/7/2021

*/
import {StyleSheet, Text, View, Button, Alert,  TextInput, Pressable,  ImageBackground} from 'react-native';
import React from 'react';
import {useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import {LinearGradient} from 'expo-linear-gradient';
import bgimage from './images/austintx.png';

const radioButtonsData = [
  {
    id: '1',
    label: (
      <Text style={{color: '#FFFFFF'}}>{'5%'}</Text>
    ),
    value: '5',
    color: 'gray',
    selected: false,
  },
  {
    id: '2',
    label: (
      <Text style={{color: '#FFFFFF'}}>{'10%'}</Text>
    ),
    value: '10',
    color: 'gray',
    selected: false,
  },
  {
    id: '3',
    label: (
      <Text style={{color: '#FFFFFF'}}>{'15%'}</Text>
    ),
    value: '15',
    color: 'gray',
    selected: true,
  },
  {
    id: '4',
    label: (
      <Text style={{color: '#FFFFFF'}}>{'20%'}</Text>
    ),
    value: '20',
    color: 'gray',
    selected: false,
  },
];

export default function HomeScreen(){
  //const bgimage = { uri:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/austin-skyline-in-spring-black-and-white-2-rob-greebon.jpg"};
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

    <ImageBackground source={bgimage} resizeMode="cover" style={home_styles.image}>
      
      <View>
        <TextInput
          style={home_styles.input}
          onChangeText={onChangeitemPrice}
          keyboardType="numeric"
          maxLength={9}
          value={itemPrice} />
      </View>

      <View>
        <RadioGroup
          style={home_styles.radioInput}
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          layout="row" />
      </View>

      <View>
        <Pressable
          style={home_styles.calcuBTN}
          onPress={() => Alert.alert("The tip is: $" + format_money(caltip(selectedButton['value'], format_money(itemPrice))) + " For the amount off $" + format_money(itemPrice))}
        >
          <Text style={home_styles.text}> CALCULATE </Text>
        </Pressable>
      </View>

      <View>
        <Pressable
          style={home_styles.aboutBTN}
          onPress={() => Alert.alert("This app was develop by Robert Coleman", "As an exercise to learn the react native environment.")}
        >
          <Text style={home_styles.text}> ABOUT THIS APP! </Text>
        </Pressable>
      </View>

        </ImageBackground>
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
    width: 250,
    height: 70,
    margin: 80,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'black',
    color: 'white',
    padding: 5,
    fontSize: 50,
    top: 50,
  },
  radioInput: {
    top: 70,
  }, 
  calcuBTN: {
    margin: 80,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'gray',
    top: 100,
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
    elevation: 9,
    shadowColor: 'black',
    position: 'absolute',
    top: 30,
  },
  title_text: {
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 0.35,
    color: '#ff44cc',
  },
  image: {
    flex: 1,
    justifyContent: "center"
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
