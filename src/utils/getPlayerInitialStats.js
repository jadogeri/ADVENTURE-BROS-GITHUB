import data from '../store/data'


const getPlayerInitialData = (playerName)=>{

    let player = {}
    player = data.find((character)=>{
        return character.name === playerName
    })

    return player
}

export default getPlayerInitialData;