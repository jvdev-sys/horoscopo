import React , { useState } from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity, Image , Dimensions, StatusBar} from 'react-native';
import Header from '../../assets/header.png'
import ModalPicker from '../../components/ModalPicker';
import signs from '../../services/signs';

const Splash = ({navigation}) => {
    const signsPicker = signs;
    const [isModalVisible, setIsModalVisible] = useState(false);
   
    const onSelectedValue = (data) => {
        navigation.navigate('Main', {selectedValue: data});
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent"
                translucent={true} />
            <Image source={Header} style={styles.headerImg}/>
            <View style={styles.selectContainer}>
                <Text style={styles.titlePicker}>Qual é o seu signo?</Text>
                <TouchableOpacity style={styles.selectButton} onPress={() => setIsModalVisible(true)}>
                    <Text style={styles.selectButtonText}>Escolha um signo</Text>
                </TouchableOpacity>
                <Modal
                    visible={isModalVisible}
                    transparent={true}
                    animationType='fade'
                    onRequestClose={() => setIsModalVisible(false)}
                >
                    <ModalPicker
                        data={signsPicker}
                        setIsModalVisible={setIsModalVisible}
                        onSelectedValue={onSelectedValue}
                    />
                </Modal>
                
            </View>
            
           
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    selectContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerImg:{
        width: Dimensions.get('window').width,
        height: 100,
        borderBottomLeftRadius: 30, 
        borderBottomRightRadius: 30,
    },
    titlePicker: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#3a383a",  
    },
    selectButton: {
        marginTop: 10,
        padding: 10,
        borderRadius: 20,
        backgroundColor:'#f2bcb7',
    },

    selectButtonText: {
        fontSize: 14,
        color: "white",
    },
    
    
})
