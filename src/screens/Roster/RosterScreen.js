{/* imports */ }
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList, Button, Alert } from 'react-native';
import NavigationButton from "../../components/NavigationButton";
import NavigationButton1 from "../../components/NavigationButton1";
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useContext, useState } from 'react';
import { Context as PlayerContext } from '../../context/PlayerContext';
import styles from './RosterStyle';
import PlayerGeneratorButton from '../../components/PlayerGeneratorButton';
import PlayerCard from '../../components/PlayerCard';
import getPlayerInitialData from '../../utils/getPlayerInitialStats';
import { hasQuestMaxReached } from '../../utils/hasQuestMaxReached';

let playerName = ''
let playerNames = [
  "MARIO",
  "LUIGI",
  "KONG",
  "TOAD",
  "YOSHI",
  "BOWSER",
  "WARIO",
  "BOOS",
  "GOOMBA"

];


const getRandomName = (arr) => {
  let name
      
try{
  if (arr.length > 0) {
      const random = Math.floor(Math.random() * arr.length);
      console.log('random',random);
      name =arr[random]
      console.log('line 75 name',name);
     arr.splice(random, 1)[0];
      
  }
}catch(e){console.log('line 78 roster',e);}
  return name;
};


{/* main function: RoasterScreen */ }
const RosterScreen = (props) => {
  const { state, addPlayer, deletePlayer, updateIsActivePlayer } = useContext(PlayerContext);
  return (

    <View style={styles.container}>
      <PlayerGeneratorButton 
          createPlayerHandler={() => {
        (playerNames.length > 0) ? 

          addPlayer( playerName = getRandomName(playerNames), getPlayerInitialData(playerName).level,
          getPlayerInitialData(playerName).power,getPlayerInitialData(playerName).maxHealth,
          getPlayerInitialData(playerName).currentHealth, getPlayerInitialData(playerName).gold)
          : console.log('no more')

        }}/>

         <View>
     <FlatList 
        keyExtractor={(key)=> { return key.id}}
        data = {state}
        renderItem ={({item})=>{
          return (<PlayerCard  name={item.name} level={item.level} currentHealth={item.currentHealth}
                              maxHealth ={item.maxHealth} power={item.power} gold={item.gold}
                               deleteHandler={()=>{ deletePlayer(item.id)}}
                               detailHandler={()=>{props.navigation.navigate('Detail',{id : item.id})}}
                               activeHandler={()=>{ updateIsActivePlayer(item.id, !item.isActive)}}
                               active={item.isActive}



          />)
        }}
     
     />
      </View>
      <StatusBar style="auto" />
      <View style={styles.NavContainer}>

        <TouchableOpacity onPress={() => { props.navigation.navigate("Roster") }}>

          <NavigationButton name={"Roster"} navigate={()=>props.navigation.navigate("Roster")} />
        </TouchableOpacity>

          <NavigationButton1 name={"Adventure"} 
          navigate={
            hasQuestMaxReached(state) > 2?
            ()=>{alert("maximum reached")} :
            ()=>{ props.navigation.navigate("Adventure",
                 {team : state.filter((player)=>{
                   return player.isActive === true
                 })}
            
            )}} />

      </View>
    </View>

  )
}
export default RosterScreen;

