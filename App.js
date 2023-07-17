import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screen/LoginScreen'
import DashboardScreen from './screen/DashboardScreen';
import TaskDirectoryScreen from './screen/TaskDirectoryScreen';
import RegisterScreen from './screen/RegisterScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Bienvendio" 
        component={LoginScreen} 
        options={{
          headerStyle: { backgroundColor: '#3FA763' },
          headerTintColor: 'white', // Cambiar el color del encabezado aquí
        }}
        />
        <Stack.Screen
          name="Registro" 
          component={RegisterScreen} 
          options={{
            headerStyle: { backgroundColor: '#3FA763' },
            headerTintColor: 'white', // Cambiar el color del encabezado aquí
          }}
        />
        <Stack.Screen name="Dashboard" component={DashboardScreen}  options={{
          headerStyle: { backgroundColor: '#3FA763' },
          headerTintColor: 'white', // Cambiar el color del encabezado aquí
        }}/>
        <Stack.Screen name="TaskDirectory" component={TaskDirectoryScreen} options={{
          headerStyle: { backgroundColor: '#3FA763' },
          headerTintColor: 'white', // Cambiar el color del encabezado aquí
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
