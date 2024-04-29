import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { CommonType } from 'common/CommonType';
import LoginView from './LoginView'
import CardView from './CardView';


const StackNavigation = () => {
    const Stack = createStackNavigator<CommonType.ViewStackPageList>();

    const customStackNavigationOptions: StackNavigationOptions = {
        gestureEnabled: false,
        title: '',
        headerShown: false,
        headerStyle: {
            backgroundColor: '#209bec',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"LoginView"} screenOptions={customStackNavigationOptions}>
                <Stack.Screen name="LoginView" component={LoginView}>
                </Stack.Screen>
                <Stack.Screen name="CardView" component={CardView}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default StackNavigation;