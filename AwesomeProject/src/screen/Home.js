import React from 'react';
import {StyleSheet, FlatList, SafeAreaView, Text, View,Image, TextInput,ScrollView, Button } from 'react-native';
import database from '@react-native-firebase/database';
import { useState } from 'react';
// const Home = () => {
//     const getfullname=(first,middle,last)=>{
//         return(first + " " + middle + " " + last)

//     }
//   return (
//       <View>
//           <Text>I am Home</Text>
//           <Text>My Full name is {getfullname("Mohsin","Ali","Parekh")}</Text>
//       </View>
//   )
// }
function Home(props){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const save_data=()=>{
        let user={
            email,
            password,
        }
        database().ref('/').child('users').push(user)
    }
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button onPress={()=>props.navigation.navigate("Camera")} title="Open Camera"/>
            <View style={{borderWidth:2,borderColor:'grey', width:'80%'}}>
                <TextInput
                    value={email}
                    onChangeText={(text)=>setEmail(text)}
                    placeholder="email"
                />
            </View>
            <View style={{borderWidth:2,borderColor:'grey', width:'80%'}}>
                <TextInput
                secureTextEntry={true}
                    value={password}
                    onChangeText={(text)=>setPassword(text)}
                    placeholder="passowrd"
                />
            </View>
            <Button onPress={save_data} title="SaveData"/>
        </View>
    )
}
export default Home;
