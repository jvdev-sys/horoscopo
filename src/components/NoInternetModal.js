import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import  Modal  from 'react-native-modal';

const Button = ({ children, disabled, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress} disabled={disabled}>
        <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
);

const NoInternetModal = ({ show, onRetry, isRetrying}) => {
    return (
        <Modal isVisible={show} style={styles.modal} animationInTiming={600} statusBarTranslucent={true}>
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Erro de conexão</Text>
                <Text style={styles.modalText}>
                    Opa! Aparentemente seu dispositivo está sem internet
                </Text>
                <Button onPress={onRetry} disabled={isRetrying}>
                    Tentar novamente
                </Button>
            </View>
        </Modal>
    )
}

export default NoInternetModal;

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        margin: 0,
    },
    modalContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 40,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    modalText: {
        fontSize: 14,
        color: '#555',
        marginTop: 14,
        textAlign: 'center',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#555',
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
})
