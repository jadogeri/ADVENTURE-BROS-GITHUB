
const updateGameStatus = (dispatch) => {
    return  (game_status) => {
        dispatch({ type: 'update_game_status', payload: {game_status : game_status} });
    
    }
}

const updateGameMode = (dispatch) => {
    return  (game_status) => {
        dispatch({ type: 'update_game_mode', payload: {game_mode : game_mode} });
    
    }
}

const editTotalGold = (dispatch) => {
    return  (total_gold) => {
        dispatch({ type: 'edit_total_gold', payload: {total_gold : total_gold} });    
    }
}

const editRounds = (dispatch) => {
    return  (rounds) => {
        dispatch({ type: 'edit_total_rounds', payload: {total_rounds : rounds} });    
    }
}
export default [updateGameStatus,updateGameMode,editTotalGold,editRounds]