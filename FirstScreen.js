import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Animated, Easing, Image } from 'react-native';

const FirstScreen = ({ navigation }) => {
    const translateX = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [bandWidth, setBandWidth] = useState(0);
    const [tomatoWidth, setTomatoWidth] = useState(0);

    useEffect(() => {
        const animateTomato = () => {
            Animated.parallel([
                Animated.timing(translateX, {
                    toValue: bandWidth - tomatoWidth,
                    duration: 4000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                })
            ]).start();
        };

        if (bandWidth > 0 && tomatoWidth > 0) {
            animateTomato();
        }

        const timer = setTimeout(() => {
            navigation.replace('SecondScreen');
        }, 5000);

        return () => clearTimeout(timer);
    }, [translateX, fadeAnim, navigation, bandWidth, tomatoWidth]);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
                <Image 
                    source={require('./logo_size2.png')} 
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.title}>SmartTomato</Text>
                <Text style={styles.subtitle}>Innovación en clasificación automatizada</Text>
            </Animated.View>
            
            <View 
                style={styles.bandContainer}
                onLayout={(event) => {
                    const { width } = event.nativeEvent.layout;
                    setBandWidth(width);
                }}
            >
                <View style={styles.band} />
                
                <Animated.View
                    style={[
                        styles.tomatoContainer,
                        { 
                            transform: [{ translateX: translateX }],
                        },
                    ]}
                    onLayout={(event) => {
                        const { width } = event.nativeEvent.layout;
                        setTomatoWidth(width);
                    }}
                >
                    <Image 
                        source={require('./imagen.png')} 
                        style={styles.tomatoImage}
                        resizeMode="contain"
                    />
                </Animated.View>
            </View>

            <Animated.View style={[styles.footer, { opacity: fadeAnim }]}>
                <Text style={styles.footerText}>Iniciando sistema...</Text>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 24,
        paddingTop: 40,
        paddingBottom: 60,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 16,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#2E7D32',
        marginTop: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#616161',
        marginTop: 8,
        textAlign: 'center',
    },
    bandContainer: {
        width: '100%',
        height: 80,
        position: 'relative',
        overflow: 'hidden',
        marginBottom: 40,
        justifyContent: 'center',
    },
    band: {
        width: '100%',
        height: 6,
        backgroundColor: '#E0E0E0',
        borderRadius: 3,
    },
    tomatoContainer: {
        position: 'absolute',
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    tomatoImage: {
        width: 40,
        height: 40,
    },
    footer: {
        alignItems: 'center',
    },
    footerText: {
        fontSize: 14,
        color: '#757575',
    },
});

export default FirstScreen;