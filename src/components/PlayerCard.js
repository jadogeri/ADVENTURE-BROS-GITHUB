
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import React,{useContext} from 'react'
const PlayerCard = (props) => {
     

      return (                
            <View style={styles.renderRoaster}>
                <TouchableOpacity style={styles.flatlist} onPress={props.detailHandler}>
                    <Text style={styles.detail}>  
                    {props.name} 🎚️{props.level}  ❤️{props.currentHealth}/{props.maxHealth} 👊 {props.power} 💰{props.gold}
                    </Text>
                    </TouchableOpacity>

                <TouchableOpacity style={{flexDirection:'row'}} onPress={props.activeHandler}>
                {props.active !== false ? 
                <IconButton icon="check" iconColor='green' />
                 :
                <Text style={{justifyContent: 'center',alignSelf: 'center',fontSize:20}}>🚫</Text>
                }
                </TouchableOpacity>

                <TouchableOpacity onPress={props.deleteHandler}>
                    <IconButton icon="trash-can" iconColor='red' />
                </TouchableOpacity>
            </View>       
       
    )
}

export default PlayerCard;

{/* stylesheet */ }
const styles = StyleSheet.create({
    container: {
        borderColor: '#fff',
        borderWidth: 3,
        width: 432,
        height: 708,
        marginBottom: 20
    },
    layout: {
        backgroundColor: '#135',
        borderRadius: 15,
        paddingVertical: 11,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderColor: '#2cf',
        borderWidth: 2

    },
    textLayout: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',

    },
    renderContainer: {
        flexDirection: 'row',
    },
    renderRoaster: {
        backgroundColor: '#112',
        borderRadius: 5,
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginVertical: 5,
        color: 'red',
        borderColor: '#2cf',
        borderWidth: 3,
        fontWeight: 'bold',
        flexDirection: 'row',
        alignItems: 'center',
    },
    detail: {
        flex: 1,
        fontWeight: "bold",
        color: '#4ef'
    },
    empty: {
        height: 300,
        width: 200,
        borderWidth: 3,
        borderColor: '#34e',
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 30,
        resizeMode: 'contain',
        borderRadius: 20
    },
    emptyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatlist: {
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    }

});
