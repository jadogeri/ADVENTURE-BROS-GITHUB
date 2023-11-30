{/* imports */}
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './RuleStyle';

{/* main function: RuleScreen */}
const RuleScreen = (props) => {

  return (
    <ImageBackground style= { styles.imageBackgroundContainer } source ={ require('../../../assets/rulepic.gif')}>
     <SafeAreaView>
        <View style={ styles.container }>
            <View style= {styles.textContainer} >
                <Text style= { styles.text}> Rules </Text>
            </View>
          {/* <Image style= { styles.image } resizeMode= 'contain' source = { require('../../assets/main.png') }/> */}
          <View style={styles.window}> 
          <Text style={styles.textInfo}>
            1. Rubbish
          </Text>
          <Text style={styles.textInfo}>
            1. Rubbish
          </Text>
          <Text style={styles.textInfo}>
            1. Rubbish
          </Text>
          <Text style={styles.textInfo}>
            1. Rubbish
          </Text>
          <Text style={styles.textInfo}>
            1. Rubbish
          </Text>
          <Text style={styles.textInfo}>
            1. Rubbish
          </Text>
          <Text style={styles.textInfo}>
            1. Rubbish
          </Text>
          <Text style={styles.textInfo}>
            1. Rubbish
          </Text>
          </View>
          <StatusBar style="auto" />
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity  onPress= { () => { props.navigation.navigate("Home") } }>
                <Text style={styles.button}> BACk TO HOME </Text>
            </TouchableOpacity>
          </View>
     </SafeAreaView>
    </ImageBackground>       
  );
}
export default RuleScreen;
