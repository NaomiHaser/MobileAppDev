import React, { Component, useState, useEffect, Fragment } from 'react';

import { Button, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

function useQuote() {
    const [quote, setQuote] = useState(null)

    useEffect(() => {
        updateQuote()
    }, [])

    function updateQuote() {
        fetch("https://api.quotable.io/random", {
            method: 'GET',
        })

            .then((response) => response.json())
            .then((response) => { setQuote(response) })

            .catch((error) => {
                setQuote('error: ' + JSON.stringify(error))
            });

    }

    return { quote, updateQuote }
}

export default function Random() {



    const { quote, updateQuote } = useQuote()

    return (

        <View
            style={styles.container}>
            {quote && (

                <View>
                    <ScrollView>
                    <Text style={styles.quoteText}>{quote.content}</Text>
                    <Text style={styles.quoteAuthor}>{quote.author}</Text>
                    </ScrollView>
                </View>
            )}
            <View>


                <TouchableOpacity onPress={updateQuote} style={{ marginTop:30, backgroundColor: "lavenderblush", fontColor: "white", fontSize: 10,width:200, borderRadius:10, borderColor: 'pink', borderWidth: 2}}>
                    
                        <Text style={{ fontSize: 13, color: "navy", textAlign: 'center', padding: 5, }}>
                            Show me another quote!</Text>


                </TouchableOpacity>
            </View>




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
        textAlign: "left",
        fontSize: 40,
        fontWeight: '200',
    },
    quoteAuthor: {
        fontSize: 40,
        marginTop: 25,
        color: 'gray',
        fontWeight: '100'

    },


})

