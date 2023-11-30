
export const gameReducer = (state, action) => {
    switch (action.type) {
        case 'game_status':
            return action.payload;
        case 'add_Hero':
            return [...state, {
                id: Math.floor(Math.random() * 999999),
                name: action.payload.name,
                currentHealth: action.payload.currentHealth,
                maxHealth: action.payload.maxHealth,
                gold: action.payload.gold,
                level: action.payload.level,
                power: action.payload.power
            }
            ]
        case 'delete_Hero':
            return state.filter((hero) => {
                return hero.id !== action.payload
            });
        case 'edit_Hero':
            return state.map((hero) => {
                if (hero.id === action.payload.id) {
                    return action.payload;
                }
                else {
                    return hero;
                }
            })
        default:
            return state;
    }
}

/**
 * const updateGameStatus = (dispatch) => {
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
 */