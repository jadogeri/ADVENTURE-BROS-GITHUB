import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const PlayerGenerator =(props) => {
  return (
    <TouchableOpacity style={styles.layout} onPress={props.createPlayerHandler}>
    <Text style={styles.textLayout}>Click To Add Roster</Text> 
 </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    layout:{
        backgroundColor: '#135',
        borderRadius: 15,
        paddingVertical:11,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center', 
        borderColor: '#2cf',
        borderWidth: 2

    },
    textLayout:{
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',

    }


})

export default PlayerGenerator