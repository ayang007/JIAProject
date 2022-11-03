import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backgroundContainer: {
        width: '100%',
        height: '100%',
      },
      titles: {
        marginTop: '40%',
        width: '100%',
        alignItems: 'center',
      },
      title: {
        fontSize: 40,
        fontWeight: '500',
        color: '#00d4ff',
        //Torq color blue is #00d4ff
      },
      subtitle: {
        fontSize: 16,
        color: '#fff'
      },
      container: {
        flexDirection: 'row',
      },
      image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      }
});

export default styles;