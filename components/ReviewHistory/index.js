import React, {Component} from 'react';
import { Text, View, ImageBackground, StackNavigator, Button, TextInput} from 'react-native';
import styles from './styles.js';
import StyledButton from '../StyledButton/index.js';
import { NavigationContainer } from '@react-navigation/native';


const ReviewHistory = ({navigation}) => {
  return (
    <View style={styles.backgroundContainer}> 
    <ImageBackground style={styles.image} />
    
    <View style={styles.titles}>
    <Text style={styles.title}>Welcome, Dr. Tsui! 2</Text>
    </View>

    </View>

);
};

export default ReviewHistory;