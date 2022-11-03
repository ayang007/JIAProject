import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {decode, encode} from 'base-64'
import { StyleSheet, StackNavigator, NavigationContainer, Text, View, ImageBackground, AppRegistry, Button, TouchableOpacity} from 'react-native';

import EntryPage from './components/EntryPage/welcomePage';
import HomePage from './components/HomePage/index';
import Router from './components/Navigation/Router';


export default function App() {
  return (
    <Router />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#00d4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
