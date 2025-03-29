import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

const SeventhScreen = () => {
return(
<View style={styles.contenedorinf}>
    <ImageBackground
        style={styles.background}
    >
        <TouchableOpacity>
            <Text>Clientes</Text>
         </TouchableOpacity>
        <TouchableOpacity>
            <Text>Administradores</Text>
        </TouchableOpacity>
    </ImageBackground>
</View>
);

}
const styles = StyleSheet.create({
    background:{
        color:'white'
    }

});
export default SeventhScreen;