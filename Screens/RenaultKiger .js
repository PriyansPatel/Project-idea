import *as React from 'react';
import {View, TextInput, StyleSheet, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView} from 'react-native';

export default class RenaultKiger  extends React.Component{
    render(){
        return(
            <View style={styles.container}>

                <Text>Renault Kiger </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, backgroundColor:"black"
    }
})