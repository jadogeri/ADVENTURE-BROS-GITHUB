import {StyleSheet} from 'react-native';

{/* stylesheet */}
const styles = StyleSheet.create({
    imageBackgroundContainer:{
      flex: 2,
      backgroundColor: 'black'
    },
    container: {
      flex: 0,
      backgroundColor: 'transparent',
      alignItems: 'center',
      marginTop: 40
    },
    image: {
      width: 400,
      height: 400,
      borderRadius: 5  
    },
    textContainer:{
      borderWidth: 4,
      borderColor: '#8cf',
      width: 400,
      Height: 200,
      borderRadius: 10,
      textAlign: 'center',
    },
    text:{
      textAlign: 'center',
      alignItems: 'center',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 50,
      color: '#6cf',
      padding: 20,
    },
    button:{
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontStyle: 'italic',
      fontWeight: 'bold',
      fontSize: 30,
      color: '#6af',
      padding: 15,
    },
    buttonContainer:{
      borderWidth: 8,
      borderColor: '#8cf',
      width: 315,
      height: 85,
      borderRadius: 50,
      marginLeft: 60,
      margin: 6
      
    }
  });

  export default styles;
