import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, Dimensions} from 'react-native';
import Header from '../../assets/header.png'
import signs from '../../services/signs';
import Button from '../../components/Button';
import Icon from '../../services/loadFont';
import ModalSign from '../../components/ModalSign';

const Main = ({route}) => {
    //Inicializa com a data atual para consultar o horóscopo em seguida
    const dt = new Date();
    //Consome dados da API e filtra por data -- utilizando hook para separar os services da interface
    const [apiData] = route.params.apiData;
    const [modalVisible, setModalVisible] = useState(false);
    const msgColor = "#3a383a";
    //Array de icones dos signos guardados num arquivo de services -> services/signs.js
    const signsRow1 = signs.filter((item,index) => index < 3);
    const signsRow2 = signs.filter((item, index) => index >= 3 && index < 6);
    const signsRow3 = signs.filter((item, index) => index >= 6 && index < 9);
    const signsRow4 = signs.filter((item, index) => index >= 9 && index < 12);
    const signsIcons = signs;
    const [currentSign, setCurrentSign] = useState(route.params.selectedValue);
    const [currentHoroscopeSign, setCurrentHoroscopeSign] = useState();

    useEffect(() => {
        function loadApiData() {
            console.log(signsRow4[0].sign);
            let horoscope = apiData.horoscopes.filter(item => item.sign === currentSign.sign)[0];
            setCurrentHoroscopeSign(horoscope);
            setModalVisible(true);
        }
        loadApiData();
    }, [apiData])
    

    const openModal = (item) =>{       
        //escolhe o signo dentro do array de icones de signo e seta na variável para gerar o modal
        setCurrentSign(item);
        //filtra o texto da API para o signo escolhido ao clicar e pega a primeira ocorrencia, pois resulta um array de tamanho 01(um).
        let horoscope = apiData.horoscopes.filter(item => item.sign === item.sign)[0];
        setCurrentHoroscopeSign(horoscope);
        setModalVisible(true);
    }
    
    const onClose = () =>{
        setModalVisible(false);
    }

    return (
  
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent"
                translucent={true} />
            <Image source={Header} style={styles.headerImg} />
                    {/* Modal dos signos de horóscopo */}
                    <ModalSign
                        isVisible={modalVisible}
                        sign={currentSign}
                        horoscope={currentHoroscopeSign}
                        dt={dt}
                        onClose={onClose}
                    />

                    {/* Botões dos signos */}
                    <View style={styles.buttonContainer}>
                <Text style={[styles.labelTop, { color: msgColor }]}>Escolha um signo e descubra o horóscopo do dia!</Text>
                        <View style={styles.viewButtonRow1}>
                            {signsRow1.map((item, index) =>{
                                return <Button sign={item} onPress={() => openModal(item)} key={index}/>
                            })}
                            
                        </View>
                        <View style={styles.viewButtonRow2}>
                            {signsRow2.map((item, index) => {
                                return <Button sign={item} onPress={() => openModal(item)} key={index} />
                            })}
                        </View>
                        <View style={styles.viewButtonRow2}>
                            {signsRow3.map((item, index) => {
                                return <Button sign={item} onPress={() => openModal(item)} key={index} />
                            })}
                        </View>
                        <View style={styles.viewButtonRow2}>
                            {signsRow4.map((item, index) => {
                                return <Button sign={item} onPress={() => openModal(item)} key={index} />
                            })}
                        </View>
                    </View>
                    {/* Rodapé com botões que estão sem função atualmente, 
                    por não estar no escopo desse projeto em específico */}
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
    )
}

export default Main

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1,
    },

    headerImg:{
        width: Dimensions.get('window').width,
        height: 90,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    
    header: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 15,
    },
    viewTitle: {
        flex: 1,
        flexDirection: 'row',
    },
    title: {
        color: "#3a383a",
        fontSize: 16,
        paddingHorizontal: 5,
    },

    buttonTop:{
        color:"#3a383a",
        fontSize: 18,
    },

    buttonContainer: {
        justifyContent: 'center',
        flex: 1,
    },

    labelTop: {
        fontSize: 12,
        marginTop: 10,
        marginBottom: -10,
        marginLeft: 20,
    },
    
    labelDate : {
        color: "#3a383a",
        alignSelf: 'center',
        paddingRight: 5,
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
