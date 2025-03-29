import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FifthScreen = ({ navigation }) => {
    const [correo, setCorreo] = useState('');
    const [contrasenya, setContraseña] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        if (!correo || !contrasenya) {
            Alert.alert('Error', 'Por favor, completa todos los campos.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(correo)) {
            Alert.alert('Error', 'Por favor, introduce un correo electrónico válido.');
            return;
        }
        navigation.navigate('QuarterScreen');
    };

    const handleOlvideContraseña = () => {
        Alert.alert('Recuperar contraseña', 'Se ha enviado un enlace de recuperación a tu correo electrónico.');
    };

    return (
        <ImageBackground
            source={require('./i3.jpg')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.titulo}>Bienvenido de nuevo!</Text>
                        <View style={styles.accentLine}></View>
                        <Text style={styles.subtitulo}>Innovación y calidad en cada jitomate</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <View style={styles.inputContainer}>
                            <Ionicons name="mail-outline" size={20} color="#6B7280" style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Correo electrónico"
                                placeholderTextColor="#9CA3AF"
                                value={correo}
                                onChangeText={setCorreo}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Ionicons name="lock-closed-outline" size={20} color="#6B7280" style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Contraseña"
                                placeholderTextColor="#9CA3AF"
                                value={contrasenya}
                                onChangeText={setContraseña}
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Ionicons 
                                    name={showPassword ? "eye-off-outline" : "eye-outline"} 
                                    size={20} 
                                    color="#6B7280" 
                                />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity 
                            style={styles.boton} 
                            onPress={handleLogin}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.textoBoton}>Iniciar Sesión</Text>
                        </TouchableOpacity>

                        <View style={styles.linksContainer}>
                            <TouchableOpacity onPress={handleOlvideContraseña}>
                                <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
                            </TouchableOpacity>
                            
                            <View style={styles.divider}></View>
                            
                            <TouchableOpacity onPress={() => navigation.navigate('ThirdScreen')}>
                                <Text style={styles.linkText}>¿No tienes cuenta? Regístrate</Text>
                            </TouchableOpacity>
                        </View>
                    </View>       
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
    overlay: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 29,
    },
    header: {
        marginBottom: 40,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 28,
        fontWeight: '800',
        color: '#1F2937',
        marginBottom: 8,
    },
    accentLine: {
        height: 4,
        width: 80,
        backgroundColor: '#EF4444',
        borderRadius: 2,
        marginBottom: 16,
    },
    subtitulo: {
        fontSize: 16,
        color: '#6B7280',
        textAlign: 'center',
    },
    formContainer: {
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
        backgroundColor: '#F9FAFB',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    icon: {
        marginRight: 12,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#1F2937',
    },
    boton: {
        backgroundColor: '#EF4444',
        borderRadius: 12,
        paddingVertical: 16,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
        marginBottom: 24,
    },
    textoBoton: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: '600',
    },
    linksContainer: {
        alignItems: 'center',
    },
    linkText: {
        color: '#EF4444',
        fontSize: 14,
        fontWeight: '600',
        marginVertical: 8,
    },
    divider: {
        height: 1,
        width: '40%',
        backgroundColor: '#E5E7EB',
        marginVertical: 8,
    },
});

export default FifthScreen;