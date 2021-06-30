import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    Modal, 
    TouchableOpacity, 
    ScrollView, 
    Image} from 'react-native';
import moment from 'moment';
import SVGModal from './SVGModal';
import Icon from '../services/loadFont';
import Woman from '../assets/woman.png'
import { formatDateToShow } from '../services/dateFormat';


const ModalSign = ({
    isVisible, 
    sign, 
    horoscope,
    dt,
    onClose,
}) => {
    return (
        <View >
            <Modal 
                visible={isVisible} 
                animationType='fade' 
                transparent={true}
                
                
            >
                <View style={styles.backgroundContainer}>
                    
                </View>
               
                
                <View style={styles.container}>
                    <View >
                        <SVGModal color={sign && sign.color} />
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.closeButton}>
                            <TouchableOpacity onPress={onClose}>
                                <Icon name="close" style={styles.customIcon} />
                            </TouchableOpacity>
                        </View>

                        <Image source={sign && sign.logo} style={styles.signImg}/>
                        <Text style={styles.title}>{sign && sign.sign}</Text>
                        <Text style={styles.label}>{formatDateToShow(dt)}</Text>
                       
                    </View>
                    <ScrollView >
                        <Text style={styles.description}>{horoscope && horoscope.description}</Text>
                    </ScrollView>
                    <Image source={Woman} style={styles.woman} />
                    <TouchableOpacity style={styles.backButton} onPress={onClose} >
                        <Text style={styles.labelBackButton}>Veja o horóscopo de outros signos!</Text>
                    </TouchableOpacity>
                </View>

            </Modal>
        </View>
    )
}

export default ModalSign

const styles = StyleSheet.create({
   
    backgroundContainer:{
        backgroundColor: 'black',
        opacity: 0.7,
        flex: 1,
    },

    container: {
        alignSelf: 'center',
        width: '95%',
        height: '90%',
        position: 'absolute',
        marginBottom: 5,
        bottom: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        flex: 1,
        elevation: 15,
        shadowColor: 'black',
    },

    contentContainer:{
        marginTop: -250,
    },

    closeButton: {
        alignItems: 'flex-end',
    },

    customIcon: {
        color: "#3a383a",
        alignSelf: 'center',
        fontSize: 25,
        margin: 10,
    },

    signImg:{
        alignSelf: 'center',
        height: 120,
        width: 120,
        resizeMode: 'stretch',

    },

    title: {
        fontSize: 32,
        fontWeight: '700',
        alignSelf: 'center',
        paddingTop: 30,
    }, 
    label: {
        fontSize: 14,
        alignSelf: 'center',
        paddingTop: -5,
        paddingBottom: 10,
    },

    description: {
        fontSize: 16,
        paddingHorizontal: 60,
        alignSelf: 'center',
    },
    woman: {
        alignSelf: 'center',
        height: 200,
        width: 230,
        resizeMode: 'stretch',
        marginTop: 10,
    },

    backButton:{
        backgroundColor: "#3a383a",
        width: '90%',
        height: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 30,
    },
    labelBackButton: {
        color: 'white',
        alignSelf: 'center',
    }
})
