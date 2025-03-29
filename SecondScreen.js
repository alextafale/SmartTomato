import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SecondScreen = ({ navigation }) => {
    return (
        <ImageBackground 
            source={require('./i2.webp')} 
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <MaterialIcons name="agriculture" size={60} color="#4CAF50" />
                    <Text style={styles.titulo}>Smart Tomato</Text>
                    <Text style={styles.subtitulo}>Innovación y calidad en cada jitomate</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.aboutButton]}
                        onPress={() => navigation.navigate('Sixth')}
                        activeOpacity={0.8}
                    >
                        <MaterialIcons name="info" size={24} color="white" style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>Conócenos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.loginButton]}
                        onPress={() => navigation.navigate('FifthScreen')}
                        activeOpacity={0.8}
                    >
                        <MaterialIcons name="login" size={24} color="white" style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>Iniciar Sesión</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.registerButton]}
                        onPress={() => navigation.navigate('ThirdScreen')}
                        activeOpacity={0.8}
                    >
                        <MaterialIcons name="person-add" size={24} color="white" style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>Crear Cuenta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.38)', // Fondo semitransparente para mejor legibilidad
        paddingHorizontal: 24,
    },
    header: {
        alignItems: 'center',
        marginBottom: 60,
    },
    titulo: {
        fontSize: 36,
        fontWeight: '700',
        color: '#2E7D32',
        marginTop: 16,
    },
    subtitulo: {
        fontSize: 16,
        color: 'black',
        marginTop: 8,
        textAlign: 'center',
        maxWidth: 300,
    },
    buttonContainer: {
        width: '100%',
        maxWidth: 400,
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        paddingVertical: 16,
        width: '100%',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    aboutButton: {
        backgroundColor: '#4CAF50',
    },
    loginButton: {
        backgroundColor: '#2196F3',
    },
    registerButton: {
        backgroundColor: '#FF5722',
    },
    buttonText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '600',
        marginLeft: 8,
    },
    buttonIcon: {
        marginRight: 8,
    },
});

export default SecondScreen;