import React, {Component, useState} from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground, StackNavigator, Button, TextInput} from 'react-native';
import styles from './styles.js';
import StyledButton from '../StyledButton/index.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from '../firebase/config'

export default function EntryPage({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onFooterLinkPress = () => {
      navigation.navigate("Registration")
  }

  const onLoginPress = () => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .get()
                .then(firestoreDocument => {
                    if (!firestoreDocument.exists) {
                        alert("User does not exist anymore.")
                        return;
                    }
                    const user = firestoreDocument.data()
                    navigation.navigate('HomePage', {user})
                })
                .catch(error => {
                    alert(error)
                });
        })
        .catch(error => {
            alert(error)
        })
  }

return (
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/appImages/newOcean.jpeg')} style={styles.image}/>
        <KeyboardAwareScrollView
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always">
            <Text style={styles.title}>My Health Passport</Text>
            <Text> </Text>
            <Text style={styles.subtitle}>Log-in to view journey</Text>
            <TextInput
                  style={styles.input}
                  placeholder='E-mail'
                  placeholderTextColor="#aaaaaa"
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
              />
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onLoginPress()}>
                <Text style={styles.buttonTitle}>Log in</Text>
            </TouchableOpacity>
            <View style={styles.footerView}>
                <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
            </View>
        </KeyboardAwareScrollView>
    </View>
  );
    
    /*
    return (
        <View style={styles.backgroundContainer}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <ImageBackground source={require('../../assets/appImages/newOcean.jpeg')}
                  style={styles.image}
                />
                <Text style={styles.title}>My Health Passport</Text>
                <Text> </Text>
                <Text style={styles.subtitle}>Log-in to view journey</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <View style = {styles.buttonsContainer}>
                <StyledButton onPress={()=>navigation.navigate("HomePage")} />
                <View style = {styles.footerView}><Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text></View>
                </View>
            </KeyboardAwareScrollView>
        </View>
      
    ); */
}
//export default entryPage;