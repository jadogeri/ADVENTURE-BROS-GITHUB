
const getRandomStage = (stageText)=>{

    switch(stageText){
        case "DARKNESS" :
            return "THE DARK SIDE OF WARNER BROS"
        case "DESERT":
            return "THE DESERT OF LOST SOULS"
        case "FOREST":
            return "THE FOREST OF THE WILD"
        case "LAB":
            return "THE LAB OF NEW DISCOVERY"
        case "NEWYORK":
            return "THE BIG APPLE OF NO RETURN"
        case "SNOW":
            return "THE SNOW FALL OF ICE AGE"
        case "VOLCANO" :
            return "THE VOLCANO AS THE WORLD ENDS"
        default:
            return ""

    }
  
}

export default getRandomStage;