import React, { ReactNode, Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { HomePage } from '../pages/HomePage'
import { DetailPage } from '../pages/DetailsPage'

import { Icon } from 'native-base'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cart: {
        marginRight: 20,
        color: 'white'
    }
});


export default class Routes extends Component {

    render(): ReactNode {
        const StackNavigator = createStackNavigator()
        return (
            <NavigationContainer>
                <StackNavigator.Navigator>
                    <StackNavigator.Screen name={'login'} component={LoginPage} options={{ 
                            title: 'Login',
                            headerStyle: {
                                backgroundColor: "#0A60FF"
                            },
                            headerTintColor: '#fff',
                            headerTitleAlign: 'center'
                        }} />
                    <StackNavigator.Screen name={'register'} component={RegisterPage} options={{ 
                        title: '',
                        headerStyle: {
                            backgroundColor: "#0A60FF"
                        },
                        headerRight: () => (
                            <Icon 
                                name='power'
                                style={styles.cart}
                                onPress={() => alert("Um dia, quem sabe implemento isso!")}
                            />
                        ),
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center'
                    }} />

                    <StackNavigator.Screen name={'home'} component={HomePage} options={{ 
                        title: '',
                        headerStyle: {
                            backgroundColor: "#0A60FF"
                        },
                        headerRight: () => (
                            <Icon 
                                name='power'
                                style={styles.cart}
                                onPress={() => alert("Um dia, quem sabe implemento isso!")}
                            />
                        ),
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center'
                    }} />

                    <StackNavigator.Screen name={'details'} component={DetailPage} options={{ 
                        title: '',
                        headerStyle: {
                            backgroundColor: "#0A60FF",
                        },
                        headerRight: () => (
                            <Icon 
                                name='power'
                                style={styles.cart}
                                onPress={() => alert("Um dia, quem sabe implemento isso!")}
                            />
                        ),
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center'
                    }} />
                </StackNavigator.Navigator>
            </NavigationContainer>
        )
    }
}