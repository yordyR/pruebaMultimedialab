import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AccountStack from "../screens/Account/Account"
import Login from "../screens/Account/Login"

const Tab = createBottomTabNavigator()

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="AccountStack"
                    component={AccountStack} 
                    options={{title:"AccountStack"}} />
                <Tab.Screen name="login"
                    component={Login} 
                    options={{title:"Login"}} />
            </Tab.Navigator>
        </NavigationContainer>
    )

}