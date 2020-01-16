import React from 'react';
import {StyleSheet, FlatList, SafeAreaView, Text, View,Image, TextInput,ScrollView, Button } from 'react-native';
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
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button onPress={()=>props.navigation.navigate("Camera")} title="Open Camera"/>
        </View>
    )
}
export default Home;
