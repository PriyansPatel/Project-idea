import *as React from 'react';
import {View, TextInput, StyleSheet, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView} from 'react-native';

export default class HondaCity extends React.Component{
    render(){
        return(
            <View style={styles.container}>

                <Text>Honda City 4th Generation </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, backgroundColor:"black"
    }
})