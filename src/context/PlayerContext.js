import createDataContext from "./createDataContext";
import {playerReducer} from "../reducers/playerReducer";
import playerActions from "../actions/playerActions";


const [addPlayer,editPlayer,deletePlayer,getPlayer,updateIsActivePlayer] = playerActions

export const { Context, Provider } = createDataContext(playerReducer,
    { addPlayer: addPlayer, deletePlayer: deletePlayer, editPlayer: editPlayer, getPlayer: getPlayer,
     updateIsActivePlayer:updateIsActivePlayer },
    [] 
);


