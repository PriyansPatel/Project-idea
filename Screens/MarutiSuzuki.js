import *as React from 'react';
import {View, TextInput, StyleSheet, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView} from 'react-native';

export default class MarutiSuzuki  extends React.Component{
    render(){
        return(
            <View style={styles.container}>

                <Text>Maruti Suzuki Brezza </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, backgroundColor:"black"
    }
})