import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {RNCamera} from 'react-native-camera';

function Camera(){
    return(
        // <View>
            <RNCamera 
            style={styles.preview}
            type={RNCamera.Constants.Type.back}/>
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });
  export default Camera;