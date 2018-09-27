import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Image, Dimensions} from 'react-native';

export default class GetStarted extends Component {
    _onPress = () => { alert('On Press') }
    render() {
        return (
            <View style = { styles.container} >
                <Image source = {require('../../Image/get_start/icon.png')}/>
                <Text style = { styles.text_1 }> Kurrency </Text>
                <Text style = { styles.text_2 }> Easy Exchange </Text>
                <Image source =  { require('../../Image/get_start/loading.png') } style = { styles.image } resizeMode = "contain"/>
                <TouchableHighlight onPress = {this._onPress} style = { styles.button} underlayColor = { '#ffffff' }> 
                    <Text style = { styles.textButton }> Get Start </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1ac6ff'
    },
    text_1: {
        fontSize: 28,
        color: '#ffffff',
        letterSpacing: 0.3,
        paddingTop: 5
    },
    text_2: {
        fontSize: 16,
        color: '#ffffff',
        fontFamily: 'monospace'
    },
    textButton: {
        fontSize: 28,
        color: '#1ac6ff'
    },
    image: {
        width: width,
        position:'absolute',
        bottom: height/7 - 5
    },
    button: {
        height: height/7,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#ffffff'
    }
})