import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Account from "../screens/Account/Account"
import Login from "../screens/Account/Login"

const Stack = createStackNavigator()

export default function AccountStack(){
    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen
                    name="account"
                    component={Account}
                    options={{title: "Mi cuenta"}}
                />
                <Stack.Screen 
                    name="login"
                    component={Login}
                    options={{title: "Iniciar session"}}
                    
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}