import { Image,View,StyleSheet } from 'react-native'
import React from 'react'

const BigIcon = ({heroName}) => {

    // console.log('detailscreen line 19', heroName);
    try {
        switch (heroName) {
            case 'YOSHI':
                return <Image style={styles.image} source={require('../../assets/yoshi.png')} resizeMode='contain'
                />
            case 'BOOS':
                return <Image style={styles.image} source={require('../../assets/boos.png')} resizeMode='contain'
                />
            case 'BOWSER':
                return <Image style={styles.image} source={require('../../assets/bowser.png')} resizeMode='contain'
                />
            case 'GOOMBA':
                return <Image style={styles.image} source={require('../../assets/goomba.png')} resizeMode='contain'
                />
            case 'KONG':
                return <Image style={styles.image} source={require('../../assets/kong.png')} resizeMode='contain'
                />
            case 'LUIGI':
                return <Image style={styles.image} source={require('../../assets/luigi.png')} resizeMode='contain'
                />
            case 'MARIO':
                return <Image style={styles.image} source={require('../../assets/mario.png')} resizeMode='contain'
                />
            case 'TOAD':
                return <Image style={styles.image} source={require('../../assets/toad.png')} resizeMode='contain'
                />
            case 'WARIO':
                return <Image style={styles.image} source={require('../../assets/wario.png')} resizeMode='contain'
                />
            case 'WALUIGI':
                return <Image style={styles.image} source={require('../../assets/waluigi.png')} resizeMode='contain'
                />

            default:
                return <View></View>

        }
    } catch (e) { console.log('detailscreen line 59', e); }

}

export default BigIcon;

const styles = StyleSheet.create({
    
    image: {
        height: 200,
        width: '100%',
        marginBottom: 16,
    }

});
