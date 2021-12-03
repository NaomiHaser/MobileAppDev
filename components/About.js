import React, { Component } from 'react';
import { StyleSheet,Button, View, Text,Image,TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ModalPage from './ModalPage'
import { Entypo } from '@expo/vector-icons'; 

export default function Random() {

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={require('./logo.png')} />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          

          <View style={styles.buttonContainer}>
            <Text>Quoted" is the app to help you find new quotes at the click of a button. 
            </Text>
            <Text>{'     '}</Text>
            <Text>App features: </Text>
  <Text>{'     '}<Entypo name="star" size={11} color='#011a27' />Store your favorite quote on the home screen</Text>
  <Text>{'     '}<Entypo name="star" size={11} color='#011a27' />Find random quotes and authors</Text>
  <Text>{'     '}<Entypo name="star" size={11} color='#011a27' />Creat an account</Text>
  <Text>{'     '}<Entypo name="star" size={11} color='#011a27' />Upload a profile photo</Text>

          </View>

          <View style={styles.buttonContainer}>
            <Text>About the Creator <Entypo name="heart" size={20} color='hotpink' />
            </Text>
            <Text>{'     '}</Text>
           
  <Text>Naomi Haser is a senior at Brandeis University, majoring in Computer Science and Biology.
  She is originally from Brookyln, New York. She is an avid reader,and is always looking for new quotes to learn.
  Her favorite quote is "If we wait until we are ready, we will be waiting for the rest of our lives" by author Lemony Snicket.</Text>
  

          </View>
          
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: "lightsteelblue",
    height: 170,
  },
  avatar: {
    width: 200,
    height: 200,
    //borderRadius: 130/2,
   // borderWidth: 4,
    //borderColor: "white",
    //marginBottom: 60,
    alignSelf: 'center',
    position: 'absolute',
    //padding:10,
    //marginTop: 30,
    resizeMode: 'center'

  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
   // marginTop: ,
    height: 200,
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    //alignItems: 'center',
    paddingTop:30,
    marginBottom: 20,
    width: '100%',
    borderRadius: 30,
    backgroundColor: 'lightsteelblue',
    padding:10

  },
});
