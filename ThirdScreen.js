import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert, ScrollView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const ThirdScreen = ({ navigation }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasenya, setContraseña] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [genero, setGenero] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegistro = async () => {
        // Validaciones locales (se mantienen igual)
        if (!nombre || !apellido || !correo || !contrasenya || !direccion || !telefono || !genero) {
            Alert.alert('Error', 'Por favor, completa todos los campos.');
            return;
        }
        if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(contrasenya)) {
            Alert.alert('Error', 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula y un número.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(correo)) {
            Alert.alert('Error', 'Por favor, introduce un correo electrónico válido.');
            return;
        }
        if (telefono.length < 10) {
            Alert.alert('Error', 'El número de teléfono debe tener al menos 10 dígitos.');
            return;
        }
    
        try {
            const response = await axios.post('http://192.168.1.87:8081/registrar', {
                nombre: nombre,
                apellido: apellido,
                direccion: direccion,
                correo: correo,
                contrasenya: contrasenya,
                telefono: telefono,
                genero: genero
            });
    
            // Verificar si el registro fue exitoso según la respuesta del servidor
            if (response.data.success) {
                Alert.alert('Éxito', response.data.message, [
                    {
                        text: 'OK',
                        onPress: () => navigation.navigate('QuarterScreen')
                    }
                ]);
            } else {
                Alert.alert('Error', response.data.message || 'Ocurrió un error durante el registro');
            }
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            
            let errorMessage = 'Error al conectar con el servidor';
            if (error.response) {
                // El servidor respondió con un código de estado fuera del rango 2xx
                errorMessage = error.response.data.message || error.response.data;
            } else if (error.request) {
                // La solicitud fue hecha pero no se recibió respuesta
                errorMessage = 'No se recibió respuesta del servidor';
            }
    
            Alert.alert('Error', errorMessage);
        }
    };

    return (
        <ImageBackground
            source={require('./i3.jpg')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.titulo}>Crear Cuenta</Text>
                            <View style={styles.accentLine}></View>
                            <Text style={styles.subtitulo}>Únete a Smart Tomato</Text>
                        </View>

                        <View style={styles.formContainer}>
                            <View style={styles.rowContainer}>
                                <View style={[styles.inputContainer, {flex: 1, marginRight: 8}]}>
                                    <Ionicons name="person-outline" size={18} color="#6B7280" style={styles.icon} />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Nombre"
                                        placeholderTextColor="#9CA3AF"
                                        value={nombre}
                                        onChangeText={setNombre}
                                    />
                                </View>
                                <View style={[styles.inputContainer, {flex: 1}]}>
                                    <Ionicons name="person-outline" size={18} color="#6B7280" style={styles.icon} />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Apellido"
                                        placeholderTextColor="#9CA3AF"
                                        value={apellido}
                                        onChangeText={setApellido}
                                    />
                                </View>
                            </View>

                            <View style={styles.inputContainer}>
                                <Ionicons name="mail-outline" size={18} color="#6B7280" style={styles.icon} />
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
                                <Ionicons name="call-outline" size={18} color="#6B7280" style={styles.icon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Teléfono"
                                    placeholderTextColor="#9CA3AF"
                                    value={telefono}
                                    onChangeText={setTelefono}
                                    keyboardType="phone-pad"
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Ionicons name="home-outline" size={18} color="#6B7280" style={styles.icon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Dirección"
                                    placeholderTextColor="#9CA3AF"
                                    value={direccion}
                                    onChangeText={setDireccion}
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Ionicons name="lock-closed-outline" size={18} color="#6B7280" style={styles.icon} />
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
                                        size={18} 
                                        color="#6B7280" 
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.inputContainer}>
                                <Ionicons name="people-outline" size={18} color="#6B7280" style={styles.icon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Género"
                                    placeholderTextColor="#9CA3AF"
                                    value={genero}
                                    onChangeText={setGenero}
                                />
                            </View>

                            <TouchableOpacity 
                                style={styles.boton} 
                                onPress={handleRegistro}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.textoBoton}>Crear Cuenta</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={styles.loginLink} 
                                onPress={() => navigation.navigate('FifthScreen')}
                            >
                                <Text style={styles.loginText}>¿Ya tienes cuenta? <Text style={styles.loginTextBold}>Inicia sesión</Text></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        padding: 24,
    },
    header: {
        marginBottom: 32,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1F2937',
        marginBottom: 8,
    },
    accentLine: {
        height: 4,
        width: 80,
        backgroundColor: '#EF4444',
        borderRadius: 2,
        marginBottom: 12,
    },
    subtitulo: {
        fontSize: 16,
        color: '#6B7280',
    },
    formContainer: {
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 16,
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
    loginLink: {
        alignItems: 'center',
        marginTop: 16,
    },
    loginText: {
        color: '#6B7280',
        fontSize: 14,
    },
    loginTextBold: {
        fontWeight: '600',
        color: '#EF4444',
    },
});

export default ThirdScreen;