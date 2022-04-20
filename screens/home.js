/*
    App home screen
    @RobertC 9/7/2021

*/
import {StyleSheet, Text, View, Button, Alert,  TextInput, Pressable,  ImageBackground, Modal} from 'react-native';
import React from 'react';
import {useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import {LinearGradient} from 'expo-linear-gradient';
import bgimage from './images/austintx.png';

const radioButtonsData = [
  {
    id: '1',
    label: (
      <Text style={{color: '#FFFFFF', fontSize: 30}}>{'5%'}</Text>
    ),
    value: '5',
    color: 'white',
    selected: false,
  },
  {
    id: '2',
    label: (
      <Text style={{color: '#FFFFFF', fontSize: 30}}>{'10%'}</Text>
    ),
    value: '10',
    color: 'white',
    selected: false,
  },
  {
    id: '3',
    label: (
      <Text style={{color: '#FFFFFF', fontSize: 30}}>{'15%'}</Text>
    ),
    value: '15',
    color: 'white',
    selected: true,
  },
  {
    id: '4',
    label: (
      <Text style={{color: '#FFFFFF', fontSize: 30}}>{'20%'}</Text>
    ),
    value: '20',
    color: 'white',
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

  // For modal
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  // To get radio button value!
  let selectedButton = radioButtonsData.find(e => e.selected == true);

  return (
    <><LinearGradient
      colors={["#0e86f1", "#2859a3", "#0c2a62"]}
      style={home_styles.viewBox}>
    
    <View style={home_styles.titleBox}>
        <Text style={home_styles.title_text}>Tip Calculater</Text>

        <Modal visible={visible} transparent={true} style={home_styles.popup}>
          <View style={home_styles.popup_box}>
            <Text>This app was develop by Robert Coleman As an exercise to learn the react native environment.</Text>
          </View>
          <Pressable style={home_styles.calcuBbacktoappBTN}
                 onPress={() => hideModal()}
          >
               <Text style={home_styles.text}>Back to app</Text>
          </Pressable>
        </Modal>
    </View>
    
    <View style={home_styles.viewBox}>

    <ImageBackground source={bgimage} resizeMode="cover" style={home_styles.image}>
      
      <View style={home_styles.viewBox}>
        <Text style={home_styles.dollarSign}> $ </Text>
        <TextInput
          style={home_styles.input}
          onChangeText={onChangeitemPrice}
          keyboardType="numeric"
          maxLength={9}
          value={itemPrice} />
      </View>

      <View style={home_styles.radioBox}>
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
          //onPress={() => Alert.alert("This app was develop by Robert Coleman", "As an exercise to learn the react native environment.")}
          onPress={() => showModal()}
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
  dollarSign: {
    color: '#ff44cc',
    fontSize: 80,
    fontWeight: 'bold',
    top: 210,
  },
  input: {
    width: 250,
    height: 70,
    margin: 80,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'black',
    color: 'white',
    padding: 5,
    fontSize: 50,
    top: 50,
  },
  radioBox: {
    backgroundColor: '#ff44cc',
    alignItems: 'center',
  },
  radioInput: {
    top: 70,
  }, 
  calcuBTN: {
    width: 250,
    margin: 80,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ff44cc',
    top: 50,
  },
  aboutBTN: {
    width: '100%',  
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    bottom: 0,
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign: 'center',
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
  popup_box:{
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  popup: {
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 0.35,
    color: '#ff44cc'
  },
  calcuBbacktoappBTN: {
    width: 250,
    margin: 80,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ff44cc'
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
