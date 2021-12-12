import React, { Component, useState, useEffect, Fragment } from 'react';
import Axios from 'axios'

import { Button, View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, TextInput, Modal, Pressable } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Entypo } from '@expo/vector-icons';
import ModalPage from './ModalPage'

export default function Authors() {

    const [names, setNames] = useState([])
    const [page, setPages] = useState(1)
    const [modalVisible, setModalVisible] = useState(false);
    const [info, setInfo] = useState([])


    function useQuote() {

    
        fetch('https://api.quotable.io/authors?page=' + page, {
            method: 'GET'
        })

            .then((response) => response.json())
            .then((response) => { setNames(response) })

            .catch((error) => {
                setNames('error: ' + JSON.stringify(error))
            });
    }

    function information (item) {
        setModalVisible(true)

        console.log('in here')
        console.log(item)

     
        fetch('https://api.quotable.io/authors?slug=' + item, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((response) => { setInfo(response) })

            .catch((error) => {
                setInfo('error: ' + JSON.stringify(error))
            });
    }




    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.quoteText3}> Find Quotes by Author</Text>
                <Text style={styles.quoteText2}>   Authors are listed alphabetically</Text>
                <Text style={styles.quoteText2}>   Pick a page number from 1-35</Text>


            </View>


            <TextInput style={styles.input} placeholder="Choose page number 1-35"
                onChangeText={page => setPages(page)}
            />


            <View style={{ flex: 1 }}>


                <TouchableOpacity onPress={useQuote} style={{ marginTop: 20, backgroundColor: "lavenderblush", fontSize: 10, width: 250, borderRadius: 10, borderWidth: 2, borderColor: 'pink' }}>

                    <Text style={{ color: '#011a27', fontSize: 14, textAlign: 'center', padding: 5, }}>
                        Click to get authors on page {page} !</Text>


                </TouchableOpacity>
            </View>



            <View style={{ flex: 5, backgroundColor: 'lavenderblush', borderRadius: 10, borderWidth: 2, borderColor: 'pink' }} >
                <FlatList vertical={true}
                    data={names.results}
                    //renderItem={renderItem1}
                    //keyExtractor={(item) => item._id}
                    keyExtractor={({ _id }, index) => _id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => information(item.slug)} style={{ backgroundColor: 'lightsteelblue', margin: 20, marginRight: 100, padding: 10, borderRadius: 10 }}>

                            <Text style={{ fontSize: 14 }}> {item.name}</Text>
                        </TouchableOpacity>
                    )}
                />

            </View>

            {/* <View style={styles.centeredView}> */}
            <Modal style={{ flex:1}}
                animationType="slide"
                transparent={true}
                visible={modalVisible}

            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}> About the Author</Text>

                        {/* TRYING HERE */}
                        <FlatList vertical={true}
                            data={info.results}
                            //renderItem={renderItem1}
                            //keyExtractor={(item) => item._id}
                            keyExtractor={({ _id }, index) => _id}
                            renderItem={({ item }) => (
                                <View style={{ backgroundColor: 'lavenderblush', borderRadius: 10}}>

                                    <Text style={{ color: '#011a27',fontSize: 30, marginBottom:10 , fontWeight: 'bold',padding:10}}>{item.name}</Text>
                                    <Text style={{ color: '#011a27',fontSize: 16 ,padding:10}}>Link:  {item.link}</Text>
                                    <Text ></Text>
                                    <Text style={{ color: '#011a27',fontSize: 16,padding:10 }}>Description:  {item.description}</Text>
                                    <Text ></Text>
                                    <Text style={{ color: '#011a27',fontSize: 16,padding:10 }}>Biography:  {item.bio}</Text>



                                </View>
                            )}
                        />
                        {/* TO HERE */}
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            {/* </View> */}





        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "aliceblue",
        //alignItems: "center",
        justifyContent: "center",
        padding: 25,
    },
    quoteText: {
        color: '#011a27',
        textAlign: "left",
        fontSize: 40,
        fontWeight: '200',
    },
    quoteAuthor: {
        fontSize: 40,
        marginTop: 25,
        color: '#011a27',
        fontWeight: '100'

    },
    input: {
        color: '#011a27',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    quoteText2: {
        color: '#011a27',
        textAlign: "left",
        fontSize: 18,
        fontWeight: '300',
        marginBottom: 10,
    },
    quoteText3: {
        color: '#011a27',
        textAlign: "left",
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 10,
    },
    centeredView: {
        flex: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100
    },
    modalView: {
        flex:1,
        margin: 20,
        backgroundColor: "lavenderblush",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: '#011a27',
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        fontSize: 20
        
    }

})