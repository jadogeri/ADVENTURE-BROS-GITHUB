{/* imports */ }
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import BigIcon from './BigIcon';

const PlayerDetailCard = (props) => {

    return (
        <View style={styles.card} >
            <View style={styles.nameContainer}>
                <Text style={styles.name}> {props.name}</Text>
                <Text style={styles.gold}> 💰 {props.gold}</Text>
            </View>
            <BigIcon heroName={props.name}/>
            <Image style={styles.image} resizeMode='contain' source={props.image} accessibilityLabel={`${props.name} bros`} />
            <View>
                <Text>LEVEL   🎚️: {props.level}</Text>
            </View>
            <View>
                <Text>POWER 👊: {props.power}</Text>
            </View>
            <View>
                <Text>HEALTH❤️: {props.currentHealth}/{props.maxHealth}</Text>
            </View>
        </View>
    )
}
export default PlayerDetailCard;

{/* stylesheet */ }
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
    nameContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#257',
        textShadowOffset: { width: 2, height: 2 },
        shadowColor: '#257',
        textShadowColor: '#257',
    },
    hp: {
        fontSize: 22,
        color: '#257',
    },
    image: {
        height: 200,
        width: '100%',
        marginBottom: 16,
    },
    text: {

    }

});
