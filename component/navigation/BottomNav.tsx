import Dashboard from '../screen/Dashboard';
import History from '../screen/History';
import Reservasi from '../screen/Reservasi';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 24,
                },
                headerStyle: {
                    shadowColor: 'gray',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0,
                },
            }}
            >
            <Tab.Screen 
                name="Dashboard"
                component={Dashboard} 
                options={{
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    )
                }}
            />
            <Tab.Screen
                name="Reservasi"
                component={Reservasi} 
                options={{
                    tabBarLabel: 'Reservasi',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cart" color={color} size={26} />
                    ),
                }}
            />            
            <Tab.Screen
                name="History" 
                component={History}
                options={{
                    tabBarLabel: 'History',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="history" color={color} size={26} />
                    ),
                    tabBarBadge:10
                }}
            />
            </Tab.Navigator>
        </NavigationContainer>
    );
}            
                
export default BottomNavigation;