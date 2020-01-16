import React from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
function ImagePicker(){
    const open_picker=()=>{
        console.log("Picker")
    }
    return(
        <View>
            <Button
            onPress={open_picker}
            title="Image-Picker"
            />
        </View>
    )
}
export default ImagePicker;