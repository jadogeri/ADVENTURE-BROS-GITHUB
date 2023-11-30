{/* imports */ }
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { FlatList } from 'react-native';
import { IconButton, MD2Colors } from 'react-native-paper';
import { useState, useContext } from 'react';
import { withNavigation } from 'react-navigation';

{/* main component: DisplayRoaster */ }
const DisplayRoaster = (props) => {

    {/* Variables and functions */ }
    const [count, setCount] = useState([]);
    const [track, setTrack] = useState()
    const [currentList, setCurrentList] = useState([]);
    const [UpdatedList, setUpdateList] = useState([]);

    {/* helper function: addList */ }
    const addList = () => {
        setUpdateList([currentList]);
    }

    {/* helper function: mapRoaster */ }

    return (
        <View style={styles.container}>

            {/* {Roster ?
                <FlatList data={Roster}
                    keyExtractor={(element) => { return element.id }}
                    renderItem={({ item, index }) => {

                        return (
                            <View style={styles.renderRoaster}>
                                <TouchableOpacity style={styles.flatlist} onPress={props.nav}>
                                    <Text style={styles.detail}>  {item.name} 🎚️{item.level}  ❤️{item.currentHealth}/{item.maxHealth} 👊 {item.power} 💰{item.gold}</Text></TouchableOpacity>

                                <TouchableOpacity>
                                    <IconButton icon="check" iconColor='green' />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <IconButton icon="trash-can" iconColor='red' />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
                : <View style={styles.emptyContainer} ><Text style={styles.textLayout}>Roaster is currently empty</Text>
                    <Image style={styles.empty} source={require('../../assets/empty.png')} />

                </View>} */}



        </View>
    )
}
export default DisplayRoaster;
{/*

{/* stylesheet */}
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
