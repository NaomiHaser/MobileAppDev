import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Fragment } from "react"
import { Image, StyleSheet, View, Text, Button, Modal } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome, Entypo ,AntDesign} from '@expo/vector-icons';
import MyQuote from './components/MyQuote';
import About from './components/About';
import Random from './components/Random';
import Profile from './components/Profile';

import { TouchableOpacity } from 'react-native-gesture-handler';



const Tab = createBottomTabNavigator();



export default function App() {


  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={'Home'}
        screenOptions={({ route }) => ({
          //tabBarActiveTintColor: 'palevioletred',
          tabBarActiveTintColor: '#011a27',

          tabBarInactiveTintColor: 'dimgray',
          tabBarActiveBackgroundColor: 'lightsteelblue',
          tabBarInactiveBackgroundColor: 'lightsteelblue',
        })}


      >

        <Tab.Screen name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            paddingBottom: 10,
            contentOptions: {
              activeTintColor: '#e91e63'
            },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            )
          }}
        />


        <Tab.Screen name="Random Quote"
          component={Random}
          options={{
            tabBarLabel: 'Random Quote',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="quote" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen name="About"
          component={About}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="question" color={color} size={size} />
            )
          }}
        />

        <Tab.Screen name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user-o" color={color} size={size} />
            )
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>

  );
};


const HomeScreen = ({ navigation }) => {
  return (


    <View style={styles.container}>



      

      <MyQuote />



      <View style={{ flex: 1 }}>

      </View>
<View styles={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Random Quote')} style={{ borderRadius: 10, backgroundColor: "lavenderblush", fontColor: "white", fontSize: 10 }}>
          <Text style={{ color: '#011a27', fontSize: 13, textAlign: 'center', paddingTop: 9, height: 35 }} > Click to generate a random quote!  {'  '} </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  quoteText: {
    textAlign: "center",
    fontSize: 40,
  },
  quoteAuthor: {
    fontSize: 40,
    marginTop: 25,
  },
  button: {
    flex: 1
  }


})

