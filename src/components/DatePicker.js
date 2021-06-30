import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/MaterialIcons';


const DatePicker = ({ value, onChange, isVisible }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const onChangeValue = date => {
        onCancel();
        onChange(date);  
    }

    const onCancel = () => {
        setModalVisible(false);
    }

    return (
        <View>
            <TouchableOpacity  onPress={() => setModalVisible(true)}>
                <Icon name="today" size={25} size={25} color="#3a383a"  />
            </TouchableOpacity>
            <DateTimePickerModal
                mode="date"
                datePickerModeAndroid="calendar"
                titleIOS="Escolha o dia do Horóscopo"
                cancelTextIOS="Cancelar"
                confirmTextIOS="OK"
                date={value}
                isVisible={modalVisible}
                onConfirm={onChangeValue}
                onCancel={onCancel}
            />
        </View>
    )
};

export default DatePicker;

