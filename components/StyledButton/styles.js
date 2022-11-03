import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#00d4ff',
        height: 40,
        width: '90%',
        borderRadius: 20,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
        textTransform: 'uppercase',
        alignSelf: 'center'
    }
});

export default styles;