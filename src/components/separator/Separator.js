import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import '../../data/global'

export class Separator extends React.Component {
    onPress = () => {
        let temp = global.unitInput;
        global.unitInput = global.unitResult;
        global.unitResult = temp;
        temp = global.flagInput;
        global.flagInput = global.flagResult;
        global.flagResult = temp;
        this.props.changeUnit1();
        this.props.changeUnit2();
    }
    
    render() {
        return (
            <View style = { styles.container }>
                <Image source = { require('../../../image/main/line.png')} style = { styles.image }/>
                <TouchableOpacity onPress = { this.onPress }>
                    <Image 
                        source = { require('../../../image/main/icon.png')} 
                        resizeMode = 'contain'
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center'
    },
})