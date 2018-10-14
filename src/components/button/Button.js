import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { height, width } from '../../data/global';
import '../../data/global'

export class Button extends React.Component {
    onPress = () => {
        global.valueInput = global.valueInput + this.props.number;
        global.valueResult = parseFloat(global.valueInput) * global.factor;
        this.props.onPress();
    }
    
    render() {
        return (
            <TouchableOpacity style = { styles.button } onPress = { this.onPress } underlayColor = { '#ffffff' }>
                <Text style = { styles.number }> { this.props.number } </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        height: (height - 80) / 10,
        width: width/3, 
        margin: 0
    },
    number: {
        fontSize: 28,
        color: '#1ac6ff'
    },
})