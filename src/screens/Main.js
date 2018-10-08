import React from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';

import { Header } from '../components/header/Header'
import { Input } from '../components/input/Input';
import { Result } from '../components/result/Result'
import { Separator } from '../components/separator/Separator';
import { Keyboard } from '../components/keyboard/Keyboard';

import '../data/global'
import { changeFactor } from '../data/global';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //xem lai co can state unit khong? Da su dung bien global de thay the
            unitInput: 'USD',
            unitResult: 'VND',
            valueInput: 0,
            valueResult: 0,
        }
    } 

    changeUnitInput = () => { 
        this.setState( {unitInput: global.unitInput} )
        changeFactor();
        global.valueResult = parseFloat(global.valueInput) * global.factor;
        this.changeValue()
    }

    changeUnitResult = () => {
        this.setState( {unitResult: global.unitResult} )
        changeFactor();
        global.valueResult = parseFloat(global.valueInput) * global.factor;
        this.changeValue();
    }

    changeValue = () => { 
        this.setState(
            {
                valueInput: global.valueInput,
                valueResult: global.valueResult
            }
        )
    }

    fetchData() {
        const convert = require('xml-js');
        fetch('https://www.vietcombank.com.vn/ExchangeRates/ExrateXML.aspx')
        .then(response => response.text())
        .then((response) => { 
            return convert.xml2json(response, {compact: true, spaces: 4});
        })
        .then(res => {
            let data = JSON.parse(res);
            global.data = data.ExrateList.Exrate;
            changeFactor();
        })
        .catch((err) => {
            console.log('fetch', err)
        })
    }

    render() { 
        return (
            <View style={ styles.container }>
                <Header/>
                <View style = { styles.content_1 }> 
                    <Input value = { this.state.valueInput } changeUnit = { this.changeUnitInput }/>
                    <Separator changeUnit1 = { this.changeUnitInput } changeUnit2 = { this.changeUnitResult }/>
                    <Result value = {this.state.valueResult} changeUnit = { this.changeUnitResult }/>
                </View>
                <View style = { styles.content_2 }>
                    <Image
                        source= {require('../../image/get_start/loading.png')}
                        resizeMode = 'cover'
                    />
                    <Keyboard onPress = { this.changeValue }/>
                </View>
            </View> 
        );
    }
    // componentDidUpdate() {
    //     this.fetchData();
    // }

    componentDidMount() {
        this.fetchData();
    }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1ac6ff'
    },
    content_1: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        marginHorizontal: 20
    },
    content_2: {
        flex: 1,
        justifyContent: 'flex-start',
        margin: 0
    },
    image: {
        flex: 1,
        margin: 0,
        height: (height-80)/10
    }
})
