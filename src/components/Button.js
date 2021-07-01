import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const Button = ({sign, onPress}) => {
    return (
        //Botão dos signos
        <View>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Svg width="110" height="110" style={styles.svg}>
                    <Circle
                        cx="55"
                        cy="55"
                        r={40}
                        fill={sign.color}
                        opacity={0.7}
                    >
                        
                    </Circle>
                    <View style={styles.imageTextButton}>
                        <Image
                            source={sign.logo}
                            style={styles.logo}
                        />
                        
                    </View>
                </Svg>

                <Text style={styles.label}>{sign.sign}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        margin: 10,
        marginHorizontal: 20,
    },

    imageTextButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 32,
    },
    label: {
        fontSize: 14,
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width:40,
        height: 40,
        resizeMode: 'stretch'
    },
})
