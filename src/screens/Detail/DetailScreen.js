{/* imports */ }
import React, {useContext} from 'react';
import { View, Button, TouchableOpacity, Text, ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import Detail from '../../components/Detail';
import styles from './DetailStyle'
import {Context as PlayerContext} from '../../context/PlayerContext'
import PlayerDetailCard from '../../components/PlayerDetailCard';


{/* main component: CharacterScreen */ }
const DetailScreen = (props, { navigation }) => {
    const {state, getPlayer} = useContext(PlayerContext)
    const playerID = props.navigation.getParam('id')
    console.log(playerID)

    const player = state.find((character) => {
        return playerID === character.id
    })

    
    console.log(JSON.stringify(player))



    return (
        <View style={styles.container}>
            <PlayerDetailCard name={player.name} currentHeal={player.currentHealth}
            maxHealth={player.maxHealth} power={player.power} gold={player.gold}
            level={player.level}
            />

          {/* <Detail /> */}
           <View>
                <TouchableOpacity style={styles.touchContainer}>
                    <View style={styles.t_container}>

                        <Text style={styles.text1}>USE BAG💰 </Text>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchContainer} onPress={() => { props.navigation.navigate("Roster") }}>
                    <View style={styles.t1_container}>
                        <Text style={styles.text2}>ROASTER</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

{ /* component to be displayed on screen */ }
export default DetailScreen;
