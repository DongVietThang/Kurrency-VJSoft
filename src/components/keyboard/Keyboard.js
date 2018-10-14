import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Button } from '../button/Button';
import { ButtonDelete } from '../button/ButtonDelete';

export class Keyboard extends React.Component {
    render() {
        return (
            <View style = { styles.container }>
                <Button number = { '1' } onPress = {this.props.changeValue}/>
                <Button number = { '2' } onPress = {this.props.changeValue}/>
                <Button number = { '3' } onPress = {this.props.changeValue}/>
                <Button number = { '4' } onPress = {this.props.changeValue}/>
                <Button number = { '5' } onPress = {this.props.changeValue}/>
                <Button number = { '6' } onPress = {this.props.changeValue}/>
                <Button number = { '7' } onPress = {this.props.changeValue}/>
                <Button number = { '8' } onPress = {this.props.changeValue}/>
                <Button number = { '9' } onPress = {this.props.changeValue}/>
                <Button number = { '.' } onPress = {this.props.changeValue}/>
                <Button number = { '0' } onPress = {this.props.changeValue}/>
                <ButtonDelete onPress = { this.props.changeValue }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#ffffff',
        marginTop: 0,

    }
})