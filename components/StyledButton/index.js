import React, {Component} from 'react';
import { Text, View, ImageBackground, Button, Pressable} from 'react-native';
import styles from './styles.js';
//import 'react-native-gesture-handler';
//import index from '../PageNavigation/index'

const StyledButton = ({onPress}) => {
  return (
      <View>
        
        <Pressable
            style={styles.button}
            onPress = {onPress}
        >
        
        <Text style={styles.text}>Log In</Text>
        </Pressable>
          
    </View>
  );
};

export default StyledButton;