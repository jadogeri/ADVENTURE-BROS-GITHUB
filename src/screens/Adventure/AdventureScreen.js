{/* imports */ }
import React, { useContext } from 'react';
import { FlatList, View, Button, TouchableOpacity, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import NavigationButton from '../../components/NavigationButton';
import styles from "./AdventureStyle";
import { Context as PlayerContext } from '../../context/PlayerContext';
import { Context as GameContext } from '../../context/GameContext';
import getRandomStage from '../../utils/getRandomStage';

let stage = ''
stageKey=''
let stageList = [
    "DARKNESS",
    "DESERT",
    "FOREST",
    "LAB",
    "NEWYORK",
    "SNOW",
    "VOLCANO"  
  ];
  
  const getRandomStageKey = (arr) => {
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
  
  
const AdventureScreen = (props) => {
    const team = props.navigation.getParam('team');
    const { state } = useContext(GameContext);

    stageKey = getRandomStageKey(stageList);
    stage = getRandomStage(stageKey)


    return (
        <View>
            <Text></Text>
            <ImageBackground >
           
      
            <Text>{JSON.stringify(stageKey)}</Text>
                <Text>{JSON.stringify(stage)}</Text>
                
                <Text>p1 {JSON.stringify(team)}</Text>
                <Text>{JSON.stringify(state)}</Text>
            <FlatList 
                data={team}
                keyExtractor={(key)=>{ return key.id}}
                renderItem={({item})=>{

                    return <View>
                        <Text>{item.name}</Text>
                        
                        <Image />
                    </View>
                    
                }}
            />

            </ImageBackground>
        </View>
    )
}
export default AdventureScreen;

