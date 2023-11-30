import createDataContext from "./createDataContext";
import { gameReducer } from "../reducers/gameReducer";
import gameActions from "../actions/gameActions";

const [updateGameStatus,updateGameMode,editTotalGold,editRounds] = gameActions

export const { Context, Provider } = createDataContext(gameReducer,
    { updateGameStatus : updateGameStatus, updateGameMode : updateGameMode,
        editTotalGold : editTotalGold, editRounds: editRounds},
    [{game_status :"",mode:"",current_rounds : 0,total_gold:0, max_rounds :6, completed_rounds: 0}]
);