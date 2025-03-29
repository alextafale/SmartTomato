import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Sixth = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <MaterialIcons name="agriculture" size={48} color="#4CAF50" />
                    <Text style={styles.titulo}>Smart Tomato</Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.slogan}>
                        Clasificación inteligente, calidad impecable
                    </Text>
                </View>

                <View style={styles.content}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Nuestra Tecnología</Text>
                        <Text style={styles.cardText}>
                            Smart Tomato optimiza la clasificación de jitomates mediante inteligencia artificial y visión por computadora. 
                            Nuestro sistema utiliza cámaras y modelos de aprendizaje automático para identificar jitomates maduros e 
                            inmaduros en tiempo real.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Proceso Automatizado</Text>
                        <Text style={styles.cardText}>
                            El sistema controla mecanismos que separan automáticamente los jitomates según su categoría, 
                            reduciendo errores humanos y optimizando la eficiencia del proceso.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Beneficios Clave</Text>
                        <View style={styles.benefitItem}>
                            <MaterialIcons name="check-circle" size={20} color="#4CAF50" />
                            <Text style={styles.benefitText}>Reducción de costos operativos</Text>
                        </View>
                        <View style={styles.benefitItem}>
                            <MaterialIcons name="check-circle" size={20} color="#4CAF50" />
                            <Text style={styles.benefitText}>Mejora en la calidad del producto</Text>
                        </View>
                        <View style={styles.benefitItem}>
                            <MaterialIcons name="check-circle" size={20} color="#4CAF50" />
                            <Text style={styles.benefitText}>Mayor eficiencia en la producción</Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Visión Futura</Text>
                        <Text style={styles.cardText}>
                            Esta tecnología representa un paso hacia una agricultura más eficiente, precisa y sostenible, 
                            estableciendo nuevos estándares para la industria alimentaria.
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
        padding: 24,
    },
    header: {
        alignItems: 'center',
        marginBottom: 32,
    },
    titulo: {
        fontSize: 32,
        fontWeight: '700',
        color: '#2E7D32',
        marginTop: 16,
        marginBottom: 8,
    },
    divider: {
        height: 3,
        width: 80,
        backgroundColor: '#4CAF50',
        borderRadius: 2,
        marginVertical: 12,
    },
    slogan: {
        fontSize: 18,
        fontWeight: '500',
        color: '#616161',
        textAlign: 'center',
        fontStyle: 'italic',
    },
    content: {
        width: '100%',
        maxWidth: 600,
        alignSelf: 'center',
    },
    card: {
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        borderLeftWidth: 4,
        borderLeftColor: '#4CAF50',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#2E7D32',
        marginBottom: 12,
    },
    cardText: {
        fontSize: 16,
        color: '#424242',
        lineHeight: 24,
    },
    benefitItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    benefitText: {
        fontSize: 16,
        color: '#424242',
        marginLeft: 8,
    },
});

export default Sixth;