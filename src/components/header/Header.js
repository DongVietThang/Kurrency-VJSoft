import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class Header extends React.Component {
    render() {
        return (
            <View style = { styles.container }>
                <Text style = { styles.title }> Kurrency </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    title: {
        fontSize: 24,
        letterSpacing: 1.5,
        color: '#ffffff',
    },
})