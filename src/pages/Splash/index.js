import React , { useState } from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    Modal, 
    TouchableOpacity, 
    Image, 
    Dimensions, 
    StatusBar,
    ActivityIndicator,
    Alert,
} from 'react-native';
import Header from '../../assets/header.png';
import { formatDateToQuery } from '../../services/dateFormat';
import useApi from '../../hooks/useApi';
import NoInternetModal from '../../components/NoInternetModal';
import ModalPicker from '../../components/ModalPicker';
import signs from '../../services/signs';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Splash = ({navigation}) => {
    const signsPicker = signs;
    const dt = new Date();
    const [apiData, isLoading, isOffline, loadApiData] = useApi(formatDateToQuery(dt));
    const [isModalVisible, setIsModalVisible] = useState(false);

   
    const onSelectedValue = (data) => { 
        navigation.navigate('Main', {
            selectedValue: data,
            apiData: apiData,
        });
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent"
                translucent={true} />
            
            <Image source={Header} style={styles.headerImg}/>
           
            <View style={styles.selectContainer}>
                
                <Text style={styles.titlePicker}>Qual é o seu signo?</Text>
                {!(isLoading) &&
                    <TouchableOpacity style={styles.selectButton} onPress={() => setIsModalVisible(true)}>
                        <Text style={styles.selectButtonText}>Escolha um signo</Text>
                    </TouchableOpacity>
                }
                {isOffline && 
                    < NoInternetModal 
                        show={isOffline}
                        onRetry={() => loadApiData()}
                        isRetrying={false}
                    />
                }
                

                {isLoading && <ActivityIndicator color='#555' size={25} style={styles.activity} />}
                
                <ModalPicker
                    data={signsPicker}
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                    onSelectedValue={onSelectedValue}
                />
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

    activity: {
        marginTop: 10,
    },  
})
