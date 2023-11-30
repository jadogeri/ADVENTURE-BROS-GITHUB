
export const playerReducer = (state, action) => {
    switch (action.type) {
        case 'get_Player':

            return [state.find((character) => {
                return playerID === character.id})
            ]
        case 'add_Player':
            return [...state, {
                id: Math.floor(Math.random() * 999999),
                name: action.payload.name,
                currentHealth: action.payload.currentHealth,
                maxHealth: action.payload.maxHealth,
                gold: action.payload.gold,
                level: action.payload.level,
                power: action.payload.power,
                isActive: false
            }
            ]
        case 'delete_Player':
            return state.filter((character) => {
                if (character.id !== action.payload) {
                    return character
                }
            });
        case 'edit_Player':
            return state.map((hero) => {
                if (hero.id === action.payload.id) {
                    return action.payload;
                }
                else {
                    return hero;
                }
            })
        case  'update_isActive_Player':
            return state.map((hero) => {
                if (hero.id === action.payload.id) {
                    return {...hero, isActive: action.payload.isActive};
                }
                else {
                    return hero;
                }
            })
        default:
            return state;
    }
}

