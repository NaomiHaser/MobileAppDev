import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput } from 'react-native';
import UploadImage,{image} from './UploadImage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useValue} from './ValueContext'




const Profile = (props) => {

    const [info, setInfo] = useState({ name: '', email: " " });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [user, setUser] = useState('');
    const {pic, setPic} = UploadImage();

    // when the component is loaded it gets the data from storage
    // and updatges the info, name, and email fields
    // but this is the only time useEffect is called
    useEffect(() => { getData() }
       , [])

    // getData uses AsyncStorage to access the stored profile info as a string
    // then it uses JSON.parse to turn that string to a JSON object
    // finally it uses the set functions for the useState hook to set the
    // info, email, and name state variables.
    const getData = async () => {
        try {
            // the '@profile_info' can be any string
            const jsonValue = await AsyncStorage.getItem('@profile_info')  
            const value = await AsyncStorage.getItem('@myKey')

            let data = null
            if (jsonValue != null) {
                data = JSON.parse(jsonValue)
                
                setInfo(data)
                setName(data.name)
                setEmail(data.email)
                if(value !== null) {
                    setPic({ image: JSON.parse(pic)});
                }
               // console.log('just set Info, Name and Email')
            } else {
                setInfo({})
                setName("")
                setEmail("")
            }


        } catch (e) {
            console.log("error in getData ")
            console.dir(e)
            // error reading value
        }
    }

    // storeData converts the value stored in the info variable to a string
    // which is then writes into local storage using AsyncStorage.setItem
    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@profile_info', jsonValue)
            await AsyncStorage.setItem('@myKey',JSON.stringify(value));

            console.log('just stored ' + jsonValue)
            console.log('just stored ' + JSON.stringify(pic))

        } catch (e) {
            console.log("error in storeData ")
            console.dir(e)
            // saving error
        }
    }

    // clearAll calls AsyncStorate.clear to remove all local storage for this app
    // we could be more selective and only remove the profile_info, but for
    // debugging it is good to remove everything
    const clearAll = async () => {
        try {
            console.log('in clearData')
            setUser("")
            setInfo('')
            setName("")
            setEmail("")
            await AsyncStorage.clear()
        } catch (e) {
            console.log("error in clearData ")
            console.dir(e)
            // clear error
        }
    }
    const CounterDemoWithContext = () => {
        const {currentValue} = useValue();
        const name = currentValue.name
        const email = currentValue.email
    }




    //export default function Profile() {
    return (
        <View style={styles.container}>
            <View style ={{marginTop:20}}>
            <UploadImage />
            <Text style={{ marginVertical: 20, fontSize: 16 }}>Welcome, {user}</Text>
            </View>

            <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "lavenderblush", fontColor: "white", fontSize: 10, width: 250, marginBottom: 20 }}>

                <TextInput

                    style={styles.textinput}
                    placeholder="name"
                    placeholderTextColor="grey"
                    onChangeText={text => {
                        setName(text)
                        setUser(text)
                    }}
                    value={name}

                />
            </TouchableOpacity>
            <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "lavenderblush", fontColor: "white", fontSize: 10, width: 250, marginBottom: 10 }}>

                <TextInput
                    style={styles.textinput}
                    placeholder="email"
                    placeholderTextColor="grey"
                    onChangeText={text => { setEmail(text) }}
                    value={email}
                />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', width: 400,marginTop:75 }}>
                <View style={styles.button}>
                    <Button
                        color='#011a27' title='Save Profile'
                        onPress={() => {
                            console.log("saving profile");
                            const theInfo = { name: name, email: email, pic: pic }
                            console.log(`theInfo=${theInfo}`)
                            setInfo(theInfo)
                            console.log('data=' + JSON.stringify(theInfo))
                            storeData(theInfo)
                        }}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        color='#011a27' title='Clear history'
                        onPress={() => {
                            console.log('clearing memory');
                            clearAll()
                        }}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        color='#011a27' title='Log In (previous user)'
                        onPress={() => {
                            console.log('loading profile');
                            getData()
                        }}
                    />
                </View>

            </View>
            <View style={{ marginTop: 'auto'}}>

            <Text>
                name={name} email={email} info={JSON.stringify(info)}
            </Text>
        </View>

        </View>

        
    );
}



const styles = StyleSheet.create({
    container: {
        //color:"aliceblue",
        //padding: 50,
        backgroundColor: 'aliceblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'lavender',
        borderColor: 'thistle',
        borderWidth:2,
        margin:6,
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',



    },

    textinput: {
        margin: 20,
        fontSize: 20,
    },
    


});






export default Profile;




