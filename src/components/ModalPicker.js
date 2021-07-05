import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, Modal } from 'react-native'


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPicker = ({
    data,
    isModalVisible,
    setIsModalVisible,
    onSelectedValue,
}) => {

    const onPressItem = (data) =>{
        setIsModalVisible(false);
        onSelectedValue(data);
    }

    const options = data.map((item, index) =>
        <TouchableOpacity 
            style={styles.option} 
            onPress={()=> onPressItem(item)} 
            key={index}
        >
            <Text style={styles.itemOption}>{item.sign}</Text>
        </TouchableOpacity>
    );
        
    

    return (

        <Modal
            visible={isModalVisible}
            transparent={true}
            animationType='fade'
            onRequestClose={() => setIsModalVisible(false)}
        >
            <TouchableOpacity
                style={styles.container}
                onPress={() => setIsModalVisible(false)}
            >
                <View style={styles.modal}>
                    <ScrollView>
                        {options}
                    </ScrollView>
                </View>
            </TouchableOpacity>
        </Modal>
        
    )
}

export default ModalPicker

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        width: WIDTH/2,
        height: HEIGHT/2,
    },
    option:{
        alignItems: 'flex-start',
    },
    itemOption:{
        margin: 10,
        fontWeight: 'bold',
    }
})
