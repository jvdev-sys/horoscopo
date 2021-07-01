import React, { useState } from 'react'
import { StyleSheet, Modal, Text, View, TouchableOpacity, StatusBar, Image} from 'react-native';
import useApi from '../../hooks/useApi';
import { formatDateToShow , formatDateToQuery } from '../../services/dateFormat';
import DatePicker from '../../components/DatePicker';
import signs from '../../services/signs';
import Button from '../../components/Button';
import Icon from '../../services/loadFont';

import SVGMain from '../../components/SVGMain';
import ModalSign from '../../components/ModalSign';

const Main = () => {
    //Inicializa com a data atual para consultar o horóscopo em seguida
    const [dt, setDt] = useState(new Date());
    //Consome dados da API e filtra por data -- utilizando hook para separar os services da interface
    const [apiData] = useApi(formatDateToQuery(dt));
    const [modalVisible, setModalVisible] = useState(false);
    //Mensagem exibida no topo da tela
    const [msg, setMsg] = useState('Escolha um signo e descubra o horóscopo do dia!');
    const [msgColor, setMsgColor] = useState('#000');
    const statusBarBackgroundColor = modalVisible ? "#54423e" : "#fac6c5";
    //Array de icones dos signos guardados num arquivo de services -> services/signs.js
    const signsIcons = signs;
    const [currentSign, setCurrentSign] = useState();
    const [currentHoroscopeSign, setCurrentHoroscopeSign] = useState();

    const dateSelect = (date) => {
        //seta a data escolhida no datePickerModal
        setDt(date);
        //limite inferior de data para filtro
        let dateLimit1 = new Date('2021-06-08');
        //limite superior de data para filtro -- até a data de entrega do projeto
        let dateLimit2 = new Date('2021-07-04');
        if (date < dateLimit1 || date > dateLimit2 ){
            //Se a data não estiver dentro desse limite, 
            //uma mensagem de aviso é mostrada na tela, do contrário, mostra-se a anterior com cor normal
            //talvez a mensagem não esteja adequada aos padrões da empresa, 
            //mas isso poderemos alinhar no futuro
            setMsg('Escolha uma data entre 08/06 e 03/07.');
            setMsgColor('red');
        }
        else{
            //se a data estiver nesse intervalo, a mensagem é mantida ou modificada para essa,
            // e a cor também muda 
            setMsg('Escolha um signo e descubra o horóscopo do dia!');
            setMsgColor('black');
        }
    }

    const openModal = (index) =>{
        //Só entra nessa condicional se apiData retornar algum valor
        if (apiData !== undefined){
            // o modal só é exibido se caso existir os dados na API
            if (apiData[0] !== undefined) {
                //escolhe o signo dentro do array de icones de signo e seta na variável para gerar o modal
                setCurrentSign(signsIcons[index]);
                //filtra o texto da API para o signo escolhido ao clicar e pega a primeira ocorrencia, pois resulta um array de tamanho 01(um).
                let horoscope = apiData[0].horoscopes.filter(item => item.sign === signsIcons[index].sign)[0];
                setCurrentHoroscopeSign(horoscope);
                setModalVisible(true);
            }
        }   
    }

    const onClose = () =>{
        setModalVisible(false);
    }

    return (

        <View >
            <StatusBar barStyle='dark-content' backgroundColor={statusBarBackgroundColor} />
            {/* O modal foi necessário para utilizar camadas e assim conseguir gerar os circulos svg de background */}
            <Modal transparent={true} visible={true}>
                
                <View style={styles.container}>
                    
                    <View>
                        <SVGMain />
                    </View>
                    {/* Modal dos signos de horóscopo */}
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
                                <Icon name="arrow-back" style={styles.buttonTop} />
                            </TouchableOpacity>
                            <Text style={styles.title}>Horóscopo</Text>
                        </View>
                        {/* Acredito não estar no escopo do projeto, 
                        mas fiz esse acréscimo de controle de datas
                        do horóscopo, somente funciona se a data for superior a 08-06, 
                        já que a API não tem dados de datas inferiores a essa.
                        Isso é interessante para o cliente visualizar os horoscopos dos dias
                        que passaram e ele pode não ter visualizado. 
                        Pra desativar isso é relativamente simples e requer apenas que se apaguem
                        4 linhas de código.
                        */}
                        <Text style={styles.labelDate}>{formatDateToShow(dt)}</Text>
                        <DatePicker value={dt} onChange={dateSelect}/>
                        <TouchableOpacity onPress={() => { }}>
                            <Icon name="more-vert" style={styles.buttonTop} />
                        </TouchableOpacity>

                    </View >
                    {/* Botões dos signos */}
                    <View style={styles.buttonContainer}>
                        <Text style={[styles.labelTop, {color: msgColor}]}>{msg}</Text>
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
                        <View style={styles.viewButtonRow2}>
                            <Button sign={signsIcons[6]} onPress={() => openModal(6)} />
                            <Button sign={signsIcons[7]} onPress={() => openModal(7)} />
                            <Button sign={signsIcons[8]} onPress={() => openModal(8)} />
                        </View>
                        <View style={styles.viewButtonRow2}>
                            <Button sign={signsIcons[9]} onPress={() => openModal(9)} />
                            <Button sign={signsIcons[10]} onPress={() => openModal(10)} />
                            <Button sign={signsIcons[11]} onPress={() => openModal(11)} />
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

    buttonTop:{
        color:"#3a383a",
        fontSize: 25,
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
    
    labelDate : {
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
