{/* imports */ }
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './src/screens/Home/HomeScreen';
import RosterScreen from './src/screens/Roster/RosterScreen';
import DetailScreen from './src/screens/Detail/DetailScreen';
import AdventureScreen from './src/screens/Adventure/AdventureScreen';
import RuleScreen from './src/screens/Rule/RuleScreen';
import { Provider as PlayerProvider } from "./src/context/PlayerContext";
import {Provider as GameProvider } from "./src/context/GameContext";


{/* main function : navigator */ }
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Roster: RosterScreen,
    Adventure :AdventureScreen,
    Rule : RuleScreen,
    Detail : DetailScreen

  },
  {
    initialRouteName: "Roster",
    defaultNavigationOptions: {
      title: "Home",
    }
  }
);

const App = createAppContainer(navigator);

export default () => {

  return <GameProvider>
    <PlayerProvider>
    <App />
  </PlayerProvider>
  </GameProvider>

};









