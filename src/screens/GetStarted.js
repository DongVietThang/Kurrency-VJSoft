import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native';

import { height, width } from '../data/global'

export default class GetStarted extends Component {
    onPress = () => this.props.navigation.navigate('Main')
    render() {
        return (
            <View style = { styles.container} >
                <View style = { styles.content_1 }>
                    <Image source = {require('../../image/get_start/icon.png')}/>
                    <Text style = { styles.text_1 }> Kurrency </Text>
                    <Text style = { styles.text_2 }> Easy Exchange </Text>
                </View>
                <View style = { styles.content_2 }>
                    <Image source =  { require('../../image/get_start/loading.png') } style = { styles.image }/>
                    <TouchableHighlight onPress = {this.onPress} style = { styles.button} underlayColor = { '#ffffff' }> 
                        <Text style = { styles.textButton }> Get Start </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1ac6ff'
    },
    content_1: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content_2: {
        flex: 1,
        justifyContent: 'flex-end',
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
        marginBottom: -3,
    },
    button: {
        height: 3*height/25,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    }
})