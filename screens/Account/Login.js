import React, {useState, useEffect} from "react"
import { StyleSheet, View, ScrollView, Text, Image } from "react-native"
import { Divider } from "react-native-elements"
import LoginForm from "../../components/Account/LoginForm"



export default function Login(){
    return (
        <ScrollView>
            <Image 
                source={require("../../assets/images/logo.png")}
                resizeMode="contain"
                style={styles.logo}
            />
            <View style={styles.ViewContainer}>
                <LoginForm />
            </View>
            <Divider style={styles.divider} />
            <View style={styles.ViewContainer}>
                <Text>
                    Datos de ingreso usuario - password 
                </Text>
                <Text>
                    usuario@usuario.com - 678901
                </Text>
                <Text>
                    admin@admin.com - 123456
                </Text>
            </View>
            
        </ScrollView>
    )
}


const styles  = StyleSheet.create({
    logo:{
        width: "100%",
        height: 30,
        marginTop: 20
    },
    ViewContainer:{
        marginRight: 40,
        marginLeft: 40
    },
    divider: {
        backgroundColor: "#0b88ee",
        margin: 40,
    },
})