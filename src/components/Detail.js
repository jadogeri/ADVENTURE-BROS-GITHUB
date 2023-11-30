{/* imports */}
import { View, Text, StyleSheet, Platform, Image } from 'react-native';


const Detail = (props) => {

    return(
        <View style= { styles.card } >
            <View style= { styles.nameContainer }>
                <Text style= { styles.name }> { Roster[0].name }</Text>
                <Text style= { styles.gold }> 💰 {Roster[0].gold}</Text>
            </View>
            <Image style= { styles.image } resizeMode= 'contain'  source= { Roster[0].image } accessibilityLabel= { `${Roster.name} bros`} />
            <View>
                <Text>LEVEL   🎚️: {Roster[0].level}</Text> 
            </View>
            <View>
                <Text>POWER 👊: {Roster[0].power}</Text>
            </View>
            <View>
                <Text>HEALTH❤️: {Roster[0].currentHealth}/{Roster[0].maxHealth}</Text>
            </View>
        </View>
    )
}
export default Detail;

{/* stylesheet */}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ddd',
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "#333",
                shadowOpacity: 0.4,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            }
        }),
    },
    nameContainer:{
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    name:{
        fontSize: 30,
        fontWeight: "bold",
        color: '#257',
        textShadowOffset: { width: 2, height: 2 },
        shadowColor: '#257',
        textShadowColor: '#257',
    },
    hp:{
        fontSize: 22,
        color: '#257',
    },
    image:{
        height: 200,
        width: '100%',
        marginBottom: 16,
    },
    text:{
        
    }

});
