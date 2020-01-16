import React from 'react';
import {StyleSheet, FlatList, SafeAreaView, Text, View,Image, TextInput,
ScrollView } from 'react-native';
import AppNavigation from './src/config/navigation'
// import Home from './component/Home'
// import Constants from 'expo-constants';

// const HelloWorldApp = () => {
//   return (
 
//     <SafeAreaView style={{
//         flex: 1,
//         // justifyContent: 'center',
//         // alignItems: 'center'
//       }}>
//         <Text>Hello, world!</Text>
//         <Image source={{uri:'data:image/jpeg;base64,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'}} style={{ width: 200, height: 200 }}/>
//         <Image style={{ width: 200, height: 200 }} source={{uri:'data:image/jpeg;base64,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'}}/>
        
//         {/* Use images locally
//         Download images first */}

//         <Image style={{ width: 200, height: 200 , resizeMode:'contain'}} source={require('./Images/car.jpg')}/>
//         <View>
//           <TextInput style={styles.input}
//           placeholder="Enter value here"
//           />
//         </View>
//     </SafeAreaView>


        // Flatlist

        // const DATA = [
        //   {
        //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        //     title: 'First Item',
        //   },
        //   {
        //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        //     title: 'Second Item',
        //   },
        //   {
        //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
        //     title: 'Third Item',
        //   },
        // ];
        // const MYDATA = [
        //   {
        //     name:"Mohsin",
        //     marks:99,
        //   },
        // ];
        
        // const Item = ({ title }) => (
        //   <View style={styles.item}>
        //     {/* {console.log("Title",title)} */}
        //     <Text style={styles.title}>{title}</Text>
        //   </View>
        // );
        
        // const App = () => {
        // //   const renderItem = ({ item }) => (
        // //     <Item title={item.title} />
            
        // //   );
        
        // //   return (
        // //     <SafeAreaView style={styles.container}>
        // //       <FlatList
        // //         data={DATA}
        // //         renderItem={renderItem}
        // //         keyExtractor={item => item.id}
        // //       />
        // //       <Home/>
        // //       <Test name="Ahmed"/>
        // //       <Test name="Zahid"/>
        // //       <Test name="Wasif"/>
        // //       <Test name="Mohsin"/>
        // //     </SafeAreaView>
        // //   );
        // // }

        // // // Multiple Components with passing Props
        // // const Test=(props)=>{
        // //   return(
        // //     <View>
        // //       <Text>Hello I am Test component with props {props.name}</Text>
        // //     </View>
        // //   )
        // // }




        // // For App Navigation
        
        
        const App=()=>{
          return(
            // <View>
                <AppNavigation/>
            // </View>
          )
        }



const styles=StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 112,
  },
 input:{
  height: 40, borderColor: 'gray', borderWidth: 1 
 },
 scrollView: {
  backgroundColor: 'pink',
  marginHorizontal: 20,
},
container: {
  flex: 1,
  // marginTop: Constants.statusBarHeight,
},
scrollView: {
  backgroundColor: 'pink',
  marginHorizontal: 20,
},
text: {
  fontSize: 42,
},
})

// export default HelloWorldApp;
export default App;





