import *as React from 'react';
import {View, TextInput, StyleSheet, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView} from 'react-native';

export default class Volkswagen extends React.Component{
    render(){
        return(
            <View style={styles.container}>

                <Text>Volkswagen Virtus/Skoda Slavia</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, backgroundColor:"black"
    }
})