import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import '../../data/global'
import { unitArr } from '../../data/global';
import { flagArr } from '../../data/global';

export class Result extends React.Component {
    render() {
        return (
            <View style = { styles.container }>
                <View style = { styles.content_1 }>
                    <Image source = { flagArr[global.flagResult].flag } style = { styles.image }/>
                    <Dropdown 
                        data = { unitArr }
                        value = { global.unitResult }
                        fontSize = { 18 }
                        containerStyle = { styles.dropDown }
                        pickerStyle = { styles.dropDown1 }
                        baseColor = { '#ffffff' }
                        textColor = { '#ffffff' }
                        selectedItemColor = { '#000000'}
                        onChangeText = { (value, index) =>  {
                            global.unitResult = value;
                            global.flagResult = index;
                            this.props.changeUnit();
                        } }
                    />
                </View>
                <View style = { styles.content_2 }>
                        <Text style = { styles.result }> { isNaN(this.props.value) ? 0 : this.props.value } </Text>
                        <Text style = { styles.icon }> { flagArr[global.flagResult].icon } </Text>            
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
        height: 35,
    },
    content_1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    content_2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'flex-end',
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
    result: {
        fontSize: 35,
        color: '#ffffff',
        alignSelf: 'flex-end',
        textAlign: 'right'
    },
    icon: {
        fontSize: 18,
        color: '#ffffff',
        alignSelf: 'center',
    }
})