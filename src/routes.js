import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Splash from './pages/Splash';
import Main from './pages/Main';

const Stack = createStackNavigator();

const AppScreens = () => {
    return (
        <Stack.Navigator
            initialRouteName={'Splash'}
            
        >
            <Stack.Screen 
                name="Splash" 
                component={Splash}
                options={({route}) => ({
                    headerTitleStyle: {
                        color: '#3a383a',
                        fontSize: 12,
                    },
                    headerTitle: 'Escolha seu signo',
                    headerTransparent: true,
                })}
                />
            <Stack.Screen 
                name="Main" 
                component={Main} 
                options={({ route }) => ({
                    headerTitleStyle: {
                        color: '#3a383a',
                        fontSize: 14,
                        marginLeft:-10,
                    },
                    headerTitle: 'Horóscopo',
                    headerTransparent: true,
                })}
                />
        </Stack.Navigator>
    );
}




const Routes = () => {


    return (
        <NavigationContainer>
            < AppScreens/>
        </NavigationContainer>
    );
}

export default Routes;