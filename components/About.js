import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ModalPage from './ModalPage'
import { Entypo } from '@expo/vector-icons';

export default function About() {

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={require('./logo.png')} />
      <View style={styles.body}>
        <View style={styles.bodyContent}>


          <View style={styles.buttonContainer}>
            <Text styles ={{color:'#011a27'}} >Quoted" is the app to help you find new quotes at the click of a button.
            </Text>
            <Text>{'     '}</Text>
            <Text styles ={{color:'#011a27'}}>App features: </Text>
            <Text styles ={{color:'#011a27'}}>{'     '}<Entypo name="star" size={11} color='#011a27' />Store your favorite quote on the home screen</Text>
            <Text styles ={{color:'#011a27'}}>{'     '}<Entypo name="star" size={11} color='#011a27' />Find random quotes and authors</Text>
            <Text styles ={{color:'#011a27'}}>{'     '}<Entypo name="star" size={11} color='#011a27' />Creat an account</Text>
            <Text styles ={{color:'#011a27'}}>{'     '}<Entypo name="star" size={11} color='#011a27' />Upload a profile photo</Text>

          </View>

          <View style={styles.buttonContainer}>
            <Text>About the Creator <Entypo name="heart" size={20} color='hotpink' />
            </Text>
            <Text>{'     '}</Text>

            <Text styles ={{color:'#011a27'}}>Naomi Haser is a senior at Brandeis University, majoring in Computer Science and Biology.
            She is originally from Brookyln, New York. She is an avid reader,and is always looking for new quotes to learn.
  Her favorite quote is "If we wait until we are ready, we will be waiting for the rest of our lives" by author Lemony Snicket.</Text>


          </View>
          <View style={styles.modals}>

            <ModalPage />
          </View>

        </View>
      </View>

    </View>
    </ScrollView>

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
    alignSelf: 'center',
    position: 'absolute',
    //padding:10,
    resizeMode: 'center'

  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  body: {
    marginTop: 10,
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
    height: 200,
    paddingTop: 20,
    marginBottom: 10,
    width: '100%',
    borderRadius: 30,
    backgroundColor: 'lightsteelblue',
    padding: 10,
    borderColor: '#011a27',
    borderWidth: 2

  },
  modals: {
    height: 100

  }
});
