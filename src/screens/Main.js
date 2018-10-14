import React from 'react';
import { Image, View, StyleSheet, StatusBar } from 'react-native';

import { Header } from '../components/header/Header'
import { Input } from '../components/input/Input';
import { Result } from '../components/result/Result'
import { Separator } from '../components/separator/Separator';
import { Keyboard } from '../components/keyboard/Keyboard';

import '../data/global'
import { changeFactor } from '../data/global';
import { height, width } from '../data/global';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    formatNumbe = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
      
    changeValue = () => { 
        this.setState(
            {
                valueInput: global.valueInput,
                valueResult: global.valueResult.toFixed(1)
                //valueResult: Number(global.valueResult.toFixed(1)).toLocaleString('en'),
                //valueResult: new Intl.NumberFormat('de-DE').format(global.valueResult.toFixed(1))
                //valueResult: this.formatNumbe(2568944)
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
            alert('fetch', err)
        })
    }

    render() { 
        return (
            <View style={ styles.container }>
                <StatusBar
                    backgroundColor= '#1ac6ff'
                    translucent = { false }
                />
                <Header/>
                <View style = { styles.content_1 }> 
                    <Input flag = { this.state.flagInput } changeFlag = { this.changeFlagInput } value = { this.state.valueInput } changeUnit = { this.changeUnitInput }/>
                    <Separator changeUnit1 = { this.changeUnitInput } changeUnit2 = { this.changeUnitResult } 
                    changeFlag = { this.changeFlagInput } changeFlag = { this.changeFlagResult }/>
                    <Result flag = { this.state.flagResult} changeFlag = { this.changeFlagResult } value = {this.state.valueResult} changeUnit = { this.changeUnitResult }/>
                </View>
                <View style = { styles.content_2 }>
                    <Image
                        source= {require('../../image/get_start/loading.png')}
                        style = { styles.image }
                    />
                    <Keyboard changeValue = { this.changeValue }/>
                </View>
            </View> 
        );
    }

    componentDidMount() {
        this.fetchData();
    }
}

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
        width: width, 
        marginBottom: -1
    }
})
