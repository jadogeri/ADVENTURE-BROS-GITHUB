{/* imports */}
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from "./HomeStyle";


{/* main function: HomeScreen */}
const HomeScreen = (props) => {
  return (
    <ImageBackground style= { styles.imageBackgroundContainer } source ={ require('../../../assets/smoke1.gif')}>
      <SafeAreaView>
          <View style={ styles.container }>
              <View style= {styles.textContainer} >
              <Text style= { styles.text}> The Adventure Gangs </Text>
              </View>
              <Image style= { styles.image } resizeMode= 'contain' source = { require('../../../assets/main.png') }/>
              <StatusBar style="auto" />
          </View>
          <View style={styles.buttonContainer}>
              <TouchableOpacity  onPress= { () => { props.navigation.navigate("Rule") } }>
              <Text style={styles.button}> RULES </Text>
              </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
              <TouchableOpacity  onPress= { () => { props.navigation.navigate("Roster") } }>
              <Text style={styles.button}> BEGIN QUEST </Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
export default HomeScreen;
