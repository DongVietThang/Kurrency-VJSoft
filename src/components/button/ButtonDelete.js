import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import { height, width } from '../../data/global';
import '../../data/global'

export class ButtonDelete extends React.Component {
    onPress = () =>  {
        global.valueInput = global.valueInput.slice(0, -1);
        global.valueResult = parseFloat(global.valueInput) * global.factor;
        this.props.onPress();
    }
    
    render() {
        return(
            <TouchableOpacity style = { styles.button } onPress = { this.onPress } underlayColor = { '#ffffff' }>
                <Image source = { require('../../../image/main/Back.png') } resizeMode = { 'center' }/>
            </TouchableOpacity>
        )
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
})