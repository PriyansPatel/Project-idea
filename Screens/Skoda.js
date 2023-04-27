import *as React from 'react';
import {View, TextInput, StyleSheet, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView} from 'react-native';

export default class Skoda extends React.Component{
    render(){
        return(
            <View style={styles.container}>

                <Text>Skoda Kushaq/Volkswagen Taigun</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, backgroundColor:"black"
    }
})