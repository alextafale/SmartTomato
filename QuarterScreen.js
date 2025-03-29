import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const QuarterScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Smart Tomato</Text>
                <View style={styles.accentLine}></View>
            </View>

            <View style={styles.contenedorInfo}>
                <View style={[styles.fila, styles.filaMaduros]}>
                    <Image 
                        source={require('./image.png')} 
                        style={styles.imagen} 
                    />
                    <Text style={styles.texto}>Jitomates Maduros</Text>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}></Text>
                    </View>
                </View>

                <View style={[styles.fila, styles.filaInmaduros]}>
                    <Image 
                        source={require('./image2.png')} 
                        style={styles.imagen} 
                    />
                    <Text style={styles.texto}>Jitomates Inmaduros</Text>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}></Text>
                    </View>
                </View>
            </View>
            
            <TouchableOpacity onPress={() => navigation.navigate('SeventhScreen')}
                style={styles.buttonUsers}
                
            >
                <Text style={styles.buttonUsersText}>Ver usuarios y administradores</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 24,
    },
    buttonUsers: {
        backgroundColor: '#2E2E2E',
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 24,
        marginTop: 20,
        width: '100%',
        maxWidth: 400,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    buttonUsersText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    header: {
        marginBottom: 40,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 32,
        fontWeight: '800',
        color: '#2E2E2E',
        textAlign: 'center',
        marginBottom: 8,
    },
    accentLine: {
        height: 4,
        width: 90,
        backgroundColor: '#FF6B6B',
        borderRadius: 2,
    },
    contenedorInfo: {
        width: '100%',
        maxWidth: 400,
    },
    fila: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    filaMaduros: {
        backgroundColor: '#FFF5F5',
        borderLeftWidth: 4,
        borderLeftColor: '#FF6B6B',
    },
    filaInmaduros: {
        backgroundColor: '#F5FFF7',
        borderLeftWidth: 4,
        borderLeftColor: '#4CAF50',
    },
    imagen: {
        width: 40,
        height: 40,
        marginRight: 16,
    },
    texto: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333333',
        flex: 1,
    },
    badge: {
        backgroundColor: '#2E2E2E',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    badgeText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default QuarterScreen;