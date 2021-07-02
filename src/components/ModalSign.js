import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    Modal, 
    TouchableOpacity, 
    ScrollView, 
    Image,
    Dimensions} from 'react-native';
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
                animationType='slide' 
                transparent={true}
                statusBarTranslucent={true}
            >
                {/* View responsável pelo background escurecido */}
                <View style={styles.backgroundContainer}>
                    <Text style={styles.phoneLine}></Text>
                </View>
                <View style={styles.container}>
                    
                    <Image source={sign && sign.art} style={styles.imgArt} />
                    <View style={styles.contentContainer}>
                        <View style={styles.closeButton}>
                         
                            <TouchableOpacity onPress={onClose}>
                                <Icon name="close" style={styles.customIcon} />
                            </TouchableOpacity>
                        </View>
                     
                        <Image source={sign && sign.logo} style={styles.signImg}/>
                        <Text style={styles.title}>{sign && sign.sign}</Text>
                        <Text style={styles.dateLabel}>{formatDateToShow(dt)}</Text>
                       
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
    phoneLine:{
        borderRadius: 5,
        width: 50,
        height: 5,
        backgroundColor: '#bbd6e1',
        alignSelf:'center',
        marginTop: Dimensions.get('window').height - 740,
    },

    container: {
        alignSelf: 'center',
        width: '100%',
        height: '90%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        flex: 1,
        elevation: 15,
        shadowColor: 'black',
    },
    imgArt:{
        borderTopLeftRadius:15,
        borderTopRightRadius: 15,
        width: Dimensions.get('window').width,
        height: 100,
        resizeMode: 'stretch',
    },

    contentContainer:{
        marginTop: Dimensions.get('window').height - 910,
        height: Dimensions.get('window').height - 500,
    },

    closeButton: {
        alignItems: 'flex-end',
    },

    customIcon: {
        color: "#3a383a",
        alignSelf: 'center',
        fontSize: 16,
        margin: 10,
    },

    signImg:{
        alignSelf: 'center',
        height: 120,
        width: 120,
        resizeMode: 'stretch',

    },

    title: {
        fontSize: 24,
        fontWeight: '700',
        alignSelf: 'center',
        paddingTop: 30,
    }, 
    dateLabel: {
        fontSize: 11,
        alignSelf: 'center',
        paddingTop: -5,
        paddingBottom: 10,
    },

    description: {
        fontSize: 13,
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
        marginBottom: 25,
        borderRadius: 30,
    },
    labelBackButton: {
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
    }
})
