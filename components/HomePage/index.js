import React, {Component} from 'react';
import { Text, View, ImageBackground, TouchableOpacity, Button, Pressable} from 'react-native';
import styles from './styles';
import RegularButton from '../RegularButton';
import { NavigationContainer } from '@react-navigation/native';
/*
export default function HomePage(props) {
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}
*/
const HomePage = (props) => {
    console.log(props.route.params.user.first_name)
    return (
        <View style={styles.backgroundContainer}> 
        <ImageBackground style={styles.image} />
        
        <View style={styles.titles}>
        <Text style={styles.title}>Welcome, {props.route.params.user.first_name}</Text>
        <Text style={styles.subtitle}>Continue your journey below</Text>
        <Text style={styles.title}></Text>
        <Text style={styles.title}></Text>
        </View>


        <TouchableOpacity
            style={styles.button}
            onPress={()=>{props.navigation.navigate('NewDailyEntry')}}
        >
            <Text style={styles.buttonText}> New Entry </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.button}
            onPress={() => {props.navigation.navigate('ReviewHistory')}}
        >
            <Text style={styles.buttonText}> Review History </Text>
        </TouchableOpacity>

        
        <TouchableOpacity
            style={styles.button}
            onPress={() => {props.navigation.navigate('CareRoutine')}}
        >
            <Text style={styles.buttonText}> Care Routine </Text>
        </TouchableOpacity>


        <TouchableOpacity
            style={styles.button}
            onPress={() => {props.navigation.navigate('MyCareTeam')}}
        >
            <Text style={styles.buttonText}> My Care Team </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.button}
            onPress={() => {props.navigation.navigate('ApptSchedule')}}
        >
            <Text style={styles.buttonText}> Appointment Schedule </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.button}
            onPress={() => {props.navigation.navigate('Logout')}}
        >
            <Text style={styles.buttonText}> Log Out </Text>
        </TouchableOpacity>
        </View>
    );
};

export default HomePage;