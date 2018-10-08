import React from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import '../../data/global';
import { unit } from '../../data/global';

export class Input extends React.Component {
    render() {
        return (
            <View style = { styles.container }>
                <View style = { styles.content_1 }>
                    <Image source = { require('../../../image/main/united-states.png')} style = { styles.image }/>
                    <Dropdown 
                        data = { unit }
                        value = { global.unitInput }
                        fontSize = { 18 }
                        containerStyle = { styles.dropDown }
                        pickerStyle = { styles.dropDown1 }
                        baseColor = { '#ffffff' }
                        textColor = { '#ffffff' }
                        selectedItemColor = { '#000000' }
                        onChangeText = { (value) => {
                            global.unitInput = value 
                            this.props.changeUnit();
                        }}
                    />
                </View>
                <View style = { styles.content_2 }>
                    <Text style = { styles.input }> { this.props.value } </Text>
                    <Text style = { styles.icon }> $ </Text>
                </View >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
    },
    content_1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    content_2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    dropDown: {
        height: 100,
        width: 70,
        marginHorizontal: 5,
    },
    dropDown1: {
        height: 180,
        width: 75,
        padding:1
    },
    image: {
        height: 35,
        width: 50
    },
    input: {
        fontSize: 35,
        color: '#ffffff',
        textAlign: 'right'
    },
    icon: {
        fontSize: 16,
        color: '#ffffff',
    }
})