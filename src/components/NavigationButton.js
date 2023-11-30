{/* imports */}
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, SafeAreaView } from 'react-native';

{/* main component: NavigationButton */}
const NavigationButton = (props) => {
    return(
        <TouchableOpacity style={styles.container} onPress={()=>props.navigate}>
            <View style={styles.t_container}>
            <Text style = {styles.text1}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default NavigationButton;

{/* stylesheet */}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginTop: 10,
        alignItems:'center',
        justifyContent: 'space-evenly',
    },
    t_container:{
        borderColor: 'white',
        color: '#111',
        borderWidth: 1,
        borderRadius: 10,
        width: 150,
        backgroundColor: '#3c5'
    },
   t_1container:{
        borderColor: 'white',
        color: '#111',
        borderWidth: 1,
        borderRadius: 10,
        width: 150,
        backgroundColor: '#724'
    },
    text1:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        fontStyle: 'italic',
        padding: 5,
        margin: 5
    },
    text2:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        fontStyle: 'italic',
        padding: 5,
        margin: 5
    },
});
