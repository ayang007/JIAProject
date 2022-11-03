import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backgroundContainer: {
        width: '100%',
        height: '100%',
        color: '#fff'
      },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: '500',
        color: '#0000ff',
        margin: 10
        //Torq color blue is #00d4ff
    },
    subtitle: {
        fontSize: 16,
        color: '#4073ff'
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 500,
        borderRadius: 20,
        width: '90%',
        alignSelf: 'center',
        height: 60,
        padding: 20,
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#4073ff',
        padding: 10,
        margin: 20,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        //textTransform: 'uppercase',
        alignSelf: 'center'
    }
});

export default styles;