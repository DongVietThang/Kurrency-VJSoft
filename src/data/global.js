import { Dimensions } from 'react-native';

global.valueInput = '';
global.valueResult = 0;
global.unitInput = 'USD';
global.unitResult = 'VND';
global.flagInput = 18;
global.flagResult = 19;
global.data = [];
global.factor = 0;

export const { height, width } = Dimensions.get('window');

export const unitArr = [
    {   
        value: "AUD",
    },
    {   
        value: "CAD",
    },
    {   
        value: "CHF",
    },
    {   
        value: "DKK",
    },
    {   
        value: "EUR",
    },
    {   
        value: "GBP",
    },
    {   
        value: "HKD",
    },
    {   
        value: "INR",
    },
    {   
        value: "JPY",
    },
    {   
        value: "KRW",
    },
    {   
        value: "KWD",
    },
    {   
        value: "MYR",
    },
    {   
        value: "NOK",
    },
    {   
        value: "RUB",
    },
    {   
        value: "SAR", 
    },
    {   
        value: "SEK",
    },
    {   
        value: "SGD",
    },
    {   
        value: "THB",
    },
    {   
        value: "USD",
    },
    {   
        value: "VND",
    }
]

export const flagArr = [
    {
        flag: require("../../image/flag/australia.png"), 
        icon: '$'
    },
    { 
        flag: require("../../image/flag/canada.png"),
        icon: '$',
    },
    {
        flag:  require("../../image/flag/switzerland.png"),
        icon: 'kr',
    },
    { 
        flag: require("../../image/flag/demank.png"),
        icon: 'kr'
    },
    { 
        flag: require("../../image/flag/euro.png"),
        icon: '€',
    },
    { 
        flag: require('../../image/flag/brishtish.png'),
        icon: '£'
    },
    { 
        flag: require("../../image/flag/hongkong.png"),
        icon: '$'
    },
    { 
        flag: require("../../image/flag/india.png"),
        icon: '₹'
    },
    { 
        flag: require("../../image/flag/japan.png"),
        icon: '	¥'
    },
    { 
        flag: require("../../image/flag/korea.png"),
        icon: '₩'
    },
    {  
        flag: require("../../image/flag/kuwait.png"),
        icon: '$'
    },
    { 
        flag: require("../../image/flag/malaysia.png"),
        icon: 'RM'
    },
    {
        flag: require("../../image/flag/norway.png"),
        icon: 'kr'
    },
    { 
        flag: require("../../image/flag/russia.png"),
        icon: '₽'
    },
    { 
        flag: require("../../image/flag/arabia.png"),
        icon: '﷼',
    },
    { 
        flag: require("../../image/flag/switzerland.png"),
        icon: 'CHF'
    },
    {
        flag: require("../../image/flag/singapore.png"),
        icon: '$'
    },
    {
        flag: require("../../image/flag/thailand.png"),
        icon: '฿',
    },
    { 
        flag: require("../../image/flag/united-states.png"),
        icon: '$',
    },
    {
        flag: require("../../image/flag/vietnam.png"),
        icon: '₫',
    }
]

export function changeFactor() {
    let tranferIn, tranferOut, i;
    for (i = 0; i < global.data.length; i++) {
        if (global.unitInput === 'VND') {
            tranferIn = 1;
            break;
        }
        else if  (global.unitInput === global.data[i]._attributes.CurrencyCode) {
            tranferIn = parseFloat(global.data[i]._attributes.Transfer);
        }; 
    } 
    for (i = 0; i < global.data.length; i++) {
        if (global.unitResult === 'VND') {
            tranferOut = 1;
            break;
        } else {
            if (global.unitResult === global.data[i]._attributes.CurrencyCode) {
                tranferOut = parseFloat(global.data[i]._attributes.Transfer);
            }   
        }
    }
    global.factor = (tranferIn/tranferOut)
}