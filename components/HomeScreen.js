import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default  Homescreen 
return (
    <View style={{ flexDirection: 'row',
                   margin:"25px",
                   border:"thick solid black",
                   padding:'10px',
                   justifyContent: 'space-around', }}>

       <Button
         title="Go to Books"
         onPress={() =>
           navigation.navigate('books')
              // we're passing a parameter name:'Jane' to the Profile component!
         }
       />

  </View>
);