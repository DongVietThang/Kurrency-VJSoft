import { Dimensions } from 'react-native';

global.valueInput = '';
global.valueResult = 0;
global.unitInput = 'USD';
global.unitResult = 'VND';
global.data = [];
global.factor = 0;

export const { height, width } = Dimensions.get('window');
export const unit = [
    {value: "AUD"},
    {value: "CAD"},
    {value: "CHF"},
    {value: "DKK"},
    {value: "EUR"},
    {value: "GBP"},
    {value: "HKD"},
    {value: "INR"},
    {value: "JPY"},
    {value: "KRW"},
    {value: "KWD"},
    {value: "MYR"},
    {value: "NOK"},
    {value: "RUB"},
    {value: "SAR"},
    {value: "SEK"},
    {value: "SGD"},
    {value: "THB"},
    {value: "USD"},
    {value: "VND"},
]
//co the dung tim kiem nhi phan de lay ra 2 he so tranfer cua 2 state

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



