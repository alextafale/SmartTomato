import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import QuarterScreen from './QuarterScreen';
import ThirdScreen from './ThirdScreen';
import FifthScreen from './FifthScreen'
import Sixth from './Sixth';
import SeventhScreen from './SeventhScreen';
const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="FirstScreen">
                <Stack.Screen name="FirstScreen" component={FirstScreen} />
                <Stack.Screen name="SecondScreen" component={SecondScreen} />
                <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
                <Stack.Screen name="QuarterScreen" component={QuarterScreen} />
                <Stack.Screen name="FifthScreen" component={FifthScreen} />
                <Stack.Screen name="Sixth" component={Sixth} />
                <Stack.Screen name="SeventhScreen" component={SeventhScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;