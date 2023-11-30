
export const hasQuestMaxReached = (state) => {

    let count = 0

    if (state.map((character)=>{
       if( character.isActive === true){
        count = count + 1
       }
    }))

    return count

}