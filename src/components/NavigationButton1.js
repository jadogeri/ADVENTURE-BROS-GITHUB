{/* imports */}
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

{/* main component: NavigationButton1 */}
const NavigationButton1 = (props) => {
    return(
        <TouchableOpacity style={styles.container} onPress={props.navigate}>
                <View style={styles.t_1container}>
                <Text style={styles.text2}>{props.name}</Text>
                </View>
        </TouchableOpacity>
    )
}
export default NavigationButton1;

{/* stylesheet */}
const styles = StyleSheet.create({
container:{
    flexDirection: 'row',
    marginTop: 10,
    alignItems:'center',
    justifyContent: 'space-evenly',
},
t_1container:{   
    borderColor: 'white',
    color: '#111',
    borderWidth: 1,
    borderRadius: 10,
    width: 150,
    backgroundColor: '#724'
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
