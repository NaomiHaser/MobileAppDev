
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, Modal, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalPage from './ModalPage';

export default function MyQuote() {

    const STORAGE_KEY = '@save_quote'



    const [myquote, setMyQuote] = useState('')
    const [getValue, setGetValue] = useState('');


    useEffect(() => {
        //clearAll()
        getData()
    }
        , [])

    const saveData = async () => {
        try {

            await AsyncStorage.setItem(STORAGE_KEY, myquote)
            setMyQuote('')
            // alert('Data successfully saved')
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }

    const getData = async () => {
        try {
            const userQuote = await AsyncStorage.getItem(STORAGE_KEY)

            if (userQuote !== null) {
                setGetValue(userQuote)
            }
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }


    const clearStorage = async () => {
        try {
            setgetValue('')
            setMyQuote('')
            await AsyncStorage.clear()

            alert('Storage successfully cleared!')
        } catch (e) {
            alert('Failed to clear the async storage.')
        }
    }

    // const onChangeText = userQ => setMyQuote(userQ)

    const onSubmitEditing = () => {
        if (!myquote) return

        saveData(myquote)
        //setMyQuote('')
    }



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}> My favorite quote:{''}</Text>
            </View>
            <View style={styles.panel}>
                <TextInput
                    style={styles.input}
                    value={myquote}
                    placeholder="Type quote here"
                    onChangeText={(data) => setMyQuote(data)}

                    onSubmitEditing={onSubmitEditing}
                />

            </View>
            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity onPress={saveData} style={styles.button}>
                    <Text style={styles.buttonText}>save quote</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={getData} style={styles.button}>
                    <Text style={styles.buttonText}>get quote</Text>
                </TouchableOpacity>

               


            </View>

            <View style={styles.quoteView} >
                <ScrollView>


                    <Text style={styles.quoteText}>{getValue}</Text>
                </ScrollView>

            </View>


        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",

    },
    header: {
        //flex:1,
        backgroundColor: 'lavenderblush',
        height: 40,
        //paddingLeft:150,
        paddingRight: 200,
        padding: 7,
        borderWidth:2,
        borderColor: 'pink',
        //alignItems: 'center',
        borderRadius: 30,
        //width: width

    },
    title: {
        fontSize: 20,
        color: '#011a27',
        fontWeight: '300',
        textAlign: 'center',
        alignSelf: 'center'

    },
    panel: {
        paddingTop: 40,
        alignItems: 'center',
        //flex:1
    },
    text: {
        fontSize: 24,
        padding: 10,
        backgroundColor: '#dcdcdc'
    },
    input: {
        padding: 15,
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'lightsteelblue',
    },
    button: {
        margin: 10,
        padding: 10,
        backgroundColor: 'lavenderblush',
        borderRadius: 30,
        flex: 1,
        borderWidth: 2,
        borderColor: 'pink'

    },
    buttonText: {
        fontSize: 18,
        color: 'steelblue',
        textAlign:'center',
        padding:6
        
    },


    quoteView: {
        //flex: 1,
        marginTop: 30,
        backgroundColor: "aliceblue",
        //alignItems: "center",
        // justifyContent: "center",
        //padding: 50,
        // paddingTop: 30,
        borderColor: "lightsteelblue",
        borderWidth: 1,

        borderRadius: 20,
        height: 350,
        width: 350,
        alignSelf: 'center'
    },
    quoteText: {
        textAlign: "left",
        fontSize: 40,
        fontWeight: '200',
        padding: 10
    },

})