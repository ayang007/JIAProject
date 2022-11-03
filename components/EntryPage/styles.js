/*import React, { Component } from 'react';
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
        color: '#fff',
        //Torq color blue is #00d4ff
      },
      subtitle: {
        fontSize: 16,
        color: '#fff'
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
        bottom: 240,
        width: '100%'
      },
      usernameInput: {
        borderWidth: 1,
        borderColor: '#00d4ff',
        padding: 8,
        margin: 10,
        width: '90%',
        borderRadius: 20,
        top: 200,
        backgroundColor: 'white'
      },
      passwordInput: {
        borderWidth: 1,
        borderColor: '#00d4ff',
        padding: 8,
        margin: 10,
        width: '90%',
        borderRadius: 20,
        top: 195,
        backgroundColor: 'white'
      },
      footerView: {
        alignItems: 'center',
        marginTop: 20,
        flex: 1,
      },
      footerText: {
          fontSize: 16,
          fontWeight: "bold",
          color: 'black'
      },
      footerLink: {
          color: 'purple',
          fontWeight: "bold",
          fontSize: 16
      }      
});

export default styles;
*/

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute'
    },
    titles: {
      marginTop: '40%',
      width: '100%',
      alignItems: 'center',
    },
    title: {
      fontSize: 40,
      fontWeight: '500',
      color: '#fff',
      alignItems: 'center',
      marginTop: 200
      //Torq color blue is #00d4ff
    },
    subtitle: {
      fontSize: 16,
      color: '#fff',
      alignItems: 'center',
    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d',
        fontWeight: "bold"
    },
    footerLink: {
        color: "purple",
        fontWeight: "bold",
        fontSize: 16
    }
})