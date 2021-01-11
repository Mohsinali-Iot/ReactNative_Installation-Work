import React from 'react';
import {StyleSheet, FlatList, SafeAreaView, Text, View,Image, TextInput,ScrollView } from 'react-native';
const Home = () => {
    const getfullname=(first,middle,last)=>{
        return(first + " " + middle + " " + last)

    }
  return (
      <View>
          <Text>I am Home</Text>
          <Text>My Full name is {getfullname("Mohsin","Ali","Parekh")}</Text>
      </View>
  )
}
export default Home;
