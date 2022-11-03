import React, {Component} from 'react';
import { Text, View, ImageBackground, Button, Pressable} from 'react-native';
import { color } from 'react-native-reanimated';
import styles from './styles';


const RegularButton = (props) => {
  const content = props.content;
  const onPress = props.onPress;
  //const type = props.type;

  //const backgroundColor = type === 'primary' ? '#0000ff':'#004dff';
  //const textColor = type === 'primary' ? '#fff':'#171a20';

  return (
    <View style ={styles.container}>
      <Pressable
        style={styles.button2}
        onPress = {onPress}
      >
        
      <Text style={styles.text2}>{content}</Text>
      </Pressable>
           
    </View>
  );
};

export default RegularButton;