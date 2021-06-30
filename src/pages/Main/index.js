import React, { useState } from 'react'
import { StyleSheet, Modal, Text, View, TouchableOpacity, StatusBar, Image} from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import useApi from '../../hooks/useApi';
import mascara from '../../assets/mascara.png'
import signs from '../../services/signs';
import Button from '../../components/Button';
import Icon from '../../services/loadFont';

import SVGMain from '../../components/SVGMain';
import ModalSign from '../../components/ModalSign';

const Main = () => {

    const [dt, setDt] = useState('2021-06-08');
    const [apiData] = useApi(dt);
    const [modalVisible, setModalVisible] = useState(false);
    const statusBarBackgroundColor = modalVisible ? "#54423e" : "#fac6c5";
    const signsIcons = signs;
    const [currentSign, setCurrentSign] = useState();
    const [currentHoroscopeSign, setCurrentHoroscopeSign] = useState();

    const openModal = (index) =>{
        if (apiData !== undefined){
            if (apiData[0] !== undefined) {
                setCurrentSign(signsIcons[index]);
                let horoscope = apiData[0].horoscopes.filter(item => item.sign === signsIcons[index].sign)[0];
                setCurrentHoroscopeSign(horoscope);
                setModalVisible(true);
            }
        }
        
        else{

        }
        
    }

    const onClose = () =>{
        setModalVisible(false);
    }

    return (

        <View >
            <Modal transparent={true} visible={true}>
                
                <View style={styles.container}>
                    <StatusBar barStyle='dark-content' backgroundColor={statusBarBackgroundColor} />
                    <View>
                        <SVGMain color='#fac6c5' />
                    </View>
                    <ModalSign
                        isVisible={modalVisible}
                        sign={currentSign}
                        horoscope={currentHoroscopeSign}
                        dt={dt}
                        onClose={onClose}

                    />

                    <View style={styles.header}>
                        <View style={styles.viewTitle}>
                            <TouchableOpacity onPress={() => { }}>
                                <Icon name="arrow-back" size={25} color="#3a383a" />
                            </TouchableOpacity>
                            <Text style={styles.title}>Horóscopo</Text>
                        </View>
                        <TouchableOpacity onPress={() => { }}>
                            <Icon name="more-vert" size={25} color="#3a383a" />
                        </TouchableOpacity>

                    </View >
                    <View style={styles.buttonContainer}>
                        <Text style={styles.labelTop}>Escolha um signo e descubra o horóscopo do dia!</Text>
                        <View style={styles.viewButtonRow1}>
                            <Button sign={signsIcons[0]} onPress={() => openModal(0)} />
                            <Button sign={signsIcons[1]} onPress={() => openModal(1)} />
                            <Button sign={signsIcons[2]} onPress={() => openModal(2)} />
                        </View>
                        <View style={styles.viewButtonRow2}>
                            <Button sign={signsIcons[3]} onPress={() => openModal(3)} />
                            <Button sign={signsIcons[4]} onPress={() => openModal(4)} />
                            <Button sign={signsIcons[5]} onPress={() => openModal(5)} />
                        </View>
                        <View style={styles.viewButtonRow3}>
                            <Button sign={signsIcons[6]} onPress={() => openModal(6)} />
                            <Button sign={signsIcons[7]} onPress={() => openModal(7)} />
                            <Button sign={signsIcons[8]} onPress={() => openModal(8)} />
                        </View>
                        <View style={styles.viewButtonRow3}>
                            <Button sign={signsIcons[9]} onPress={() => openModal(9)} />
                            <Button sign={signsIcons[10]} onPress={() => openModal(10)} />
                            <Button sign={signsIcons[11]} onPress={() => openModal(11)} />
                        </View>

                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.footerButton} onPress={() => { }}>

                            <Icon name="home" style={styles.customIcon} />
                            <Text style={styles.labelIcon}>Home</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.footerButton} onPress={() => { }}>

                            <Icon name="style" style={styles.customIcon} />
                            <Text style={styles.labelIcon}>Cartela</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.footerButton} onPress={() => { }}>

                            <Icon name="camera-enhance" style={styles.customIcon} />
                            <Text style={styles.labelIcon}>Color Match</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.footerButton} onPress={() => { }}>

                            <Icon name="checkroom" style={styles.customIcon} />
                            <Text style={styles.labelIcon}>Closet</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.footerButton} onPress={() => { }}>

                            <Icon name="shopping-bag" style={styles.customIcon} />
                            <Text style={styles.labelIcon}>Descontos</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
        
      </View>
    )
}

export default Main

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1,
        marginTop: -100,
    },
    backgroundImages: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    header: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: -480,
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 15,
    },
    viewTitle: {
        flex: 1,
        flexDirection: 'row',
    },
    title: {
        fontSize: 18,
        paddingHorizontal: 5,
    },

    buttonContainer: {
        justifyContent: 'center',
        flex: 1,
    },

    labelTop: {
        marginTop: 10,
        marginBottom: -10,
        marginLeft: 20,
    },

    viewButtonRow1:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 0,
    },
    viewButtonRow2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 0,
    },
    viewButtonRow3: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 0,
    },
    viewButtonRow4: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 0,
    },
    footer: {
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    footerLabels:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 15,
        
    },
    customIcon: {
        color: "#3a383a",
        alignSelf: 'center',
        fontSize: 30,
    },
    labelIcon: {
        alignSelf: 'center',
        fontSize:12,
        marginBottom: 10,
        paddingTop: 5,
    },
})
